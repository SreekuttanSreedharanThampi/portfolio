"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/content/nav";

/**
 * Below `md` the inline nav links don't fit, so they collapse behind a toggle.
 * The only client component in the header — state is one boolean.
 *
 * The panel is positioned against the sticky <header> (`top-full`), so it hangs
 * directly under the bar and spans its full width regardless of header height.
 */
const barClass =
  "absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-[top,transform] duration-200 motion-reduce:transition-none";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    // Rotating to landscape can cross the `md` breakpoint, where the inline nav
    // takes over, so drop the panel instead of leaving it stranded open.
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onBreakpointChange = () => {
      if (desktop.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpointChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="-mr-1.5 flex size-10 items-center justify-center rounded-[7px] text-muted-foreground transition-colors hover:text-accent active:text-accent motion-reduce:transition-none md:hidden"
      >
        <span aria-hidden="true" className="relative block size-5">
          <span
            className={`${barClass} ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[7px]"}`}
          />
          <span
            className={`${barClass} ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[13px]"}`}
          />
        </span>
      </button>

      {/* Tap anywhere below the header to dismiss. */}
      {open ? (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="absolute inset-x-0 top-full h-screen w-full cursor-default md:hidden"
        />
      ) : null}

      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-full z-10 border-b border-border bg-surface md:hidden"
      >
        <ul className="mx-auto flex max-w-[820px] flex-col px-4 py-2 md:px-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3.5 font-mono text-sm text-muted-foreground transition-colors hover:text-accent active:bg-accent-tint active:text-accent motion-reduce:transition-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
