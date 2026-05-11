export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12">
      <div className="container">
        <p className="text-center text-sm text-[var(--color-text-muted)]">
          © {year} TWDY Agency LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
