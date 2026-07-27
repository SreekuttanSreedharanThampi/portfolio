// Section title followed by a thin rule that fills the remaining width.
export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-bold tracking-[-0.01em] text-foreground">{title}</h2>
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}
