import { useState } from "react";
import { Home, Menu, X } from "lucide-react";
import { useI18n } from "@/content/i18n";
import { cn } from "@/lib/utils";

const ids = ["about", "experience", "skills", "projects", "education", "contact"] as const;

function FlagBR() {
  return (
    <svg viewBox="0 0 28 20" className="h-3.5 w-5" aria-hidden="true">
      <rect width="28" height="20" rx="2" fill="#229e45" />
      <path d="M14 3 25 10 14 17 3 10Z" fill="#f8e509" />
      <circle cx="14" cy="10" r="4" fill="#2b49a3" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg viewBox="0 0 28 20" className="h-3.5 w-5" aria-hidden="true">
      <rect width="28" height="20" rx="2" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 20) / 13} width="28" height={20 / 13} fill="#b22234" />
      ))}
      <rect width="12" height="10.8" fill="#3c3b6e" />
    </svg>
  );
}

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const LangToggle = (
    <div className="flex items-center gap-1" role="group" aria-label="Idioma / Language">
      {(
        [
          ["pt", FlagBR, "Português"],
          ["en", FlagUS, "English"],
        ] as const
      ).map(([l, Flag, label]) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={label}
          className={cn(
            "grid h-7 w-10 place-items-center rounded-md transition-colors",
            lang === l ? "bg-primary" : "opacity-70 hover:opacity-100",
          )}
        >
          <Flag />
        </button>
      ))}
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-card/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#home"
          aria-label={t.nav.home}
          className="text-foreground transition-colors hover:text-primary"
        >
          <Home className="h-5 w-5" />
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-1 lg:flex">
            {ids.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-md px-3 py-2 text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-primary"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <span className="hidden h-6 w-px bg-border lg:block" />
          {LangToggle}
          <button
            type="button"
            className="text-foreground lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t px-5 pb-4 lg:hidden">
          {ids.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-3 font-medium text-secondary-foreground/80 hover:text-primary"
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
