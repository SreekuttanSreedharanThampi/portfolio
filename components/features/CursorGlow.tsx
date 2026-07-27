"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient radial glow. Visible immediately on landing at a default position
 * (upper-centre, behind the hero) and follows the cursor once the mouse moves.
 * Kept cheap and accessible:
 * - pointer position is batched into one `requestAnimationFrame` per frame
 * - moved with `transform` only (compositor-friendly), no layout/paint thrash
 * - under `prefers-reduced-motion: reduce` it stays put (still visible, just
 *   doesn't track the cursor)
 * - `pointer-events-none` so it never intercepts clicks or scrolling
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      const el = ref.current;
      if (el) el.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%)) translateZ(0)`;
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      // Default landing position (before any mouse move): centred horizontally,
      // ~a third of the way down, sitting behind the hero.
      style={{ transform: "translate(calc(50vw - 50%), calc(32vh - 50%)) translateZ(0)" }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[800px] w-[800px] rounded-full will-change-transform [background:radial-gradient(circle,_rgba(102,217,196,0.15)_0%,_rgba(102,217,196,0.05)_35%,_transparent_70%)]"
    />
  );
}
