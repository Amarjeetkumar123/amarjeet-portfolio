import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
      <div className="divider mb-6" />
      <div className="flex flex-col gap-3 text-xs text-[var(--fg-3)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-medium text-[var(--fg)]">{portfolio.name}</span>
          {" "}· Software Developer · Noida, India
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${portfolio.email}`} className="hover:text-[var(--fg)] transition-colors">
            Email
          </a>
          <a href={portfolio.resume} target="_blank" rel="noreferrer" className="hover:text-[var(--fg)] transition-colors">
            Resume
          </a>
          <a href="#top" className="hover:text-[var(--fg)] transition-colors">↑ Top</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
