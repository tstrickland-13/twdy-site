export function SectionDivider() {
  return (
    <div aria-hidden="true" className="bg-black py-14 md:py-16">
      <div className="container flex items-center justify-center gap-5">
        <span className="h-px w-full max-w-[160px] bg-gradient-to-r from-transparent to-[var(--color-accent)]/60" />
        <span className="h-2.5 w-2.5 rotate-45 bg-[var(--color-accent)]" />
        <span className="h-px w-full max-w-[160px] bg-gradient-to-l from-transparent to-[var(--color-accent)]/60" />
      </div>
    </div>
  );
}
