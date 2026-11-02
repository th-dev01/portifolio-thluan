import { BarChart3, Code2, Download, GraduationCap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/content/i18n";
import { links, profile } from "@/content/profile";
import { GithubIcon, LinkedinIcon } from "./shared";

export function Hero() {
  const { t } = useI18n();
  const factIcons = [GraduationCap, Code2, BarChart3];

  return (
    <section id="home" className="bg-hero-light">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 md:px-8 lg:grid-cols-[1fr_340px] lg:pt-36">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-primary">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.shortName}
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl font-bold leading-snug text-foreground sm:text-2xl">
            {t.hero.headline}
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{t.hero.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-lg px-5 font-bold">
              <a href={links.resume} download>
                <Download /> {t.hero.resume}
              </a>
            </Button>
            <Button asChild variant="navy" size="lg" className="h-12 rounded-lg px-5 font-bold">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon /> LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-lg bg-card px-5 font-bold"
            >
              <a href={`mailto:${links.email}`}>
                <Mail /> {t.hero.email}
              </a>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.hero.highlights.map((h) => (
              <div key={h.title} className="rounded-xl border bg-card/80 p-5">
                <h3 className="text-2xl font-bold text-primary">{h.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="mx-auto w-full max-w-sm rounded-2xl border bg-card p-5 shadow-card animate-in fade-in zoom-in-95 duration-1000">
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-secondary">
            {links.photo ? (
              <img
                src={links.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
                width={640}
                height={800}
              />
            ) : (
              <div className="grid h-full w-full place-items-center">
                <span className="font-display text-8xl font-extrabold text-gradient-primary">
                  {profile.initials}
                </span>
              </div>
            )}
          </div>
          <ul className="mt-5 grid gap-2">
            {t.hero.facts.map((f, i) => {
              const Icon = factIcons[i] ?? Code2;
              return (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-md border-l-[3px] border-primary bg-secondary px-4 py-2.5 text-sm font-semibold"
                >
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              );
            })}
          </ul>
          <div className="mt-5 flex gap-2">
            {[
              { href: links.linkedin, label: "LinkedIn", Icon: LinkedinIcon, ext: true },
              { href: links.github, label: "GitHub", Icon: GithubIcon, ext: true },
              { href: `mailto:${links.email}`, label: "E-mail", Icon: Mail, ext: false },
            ].map(({ href, label, Icon, ext }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
                className="grid h-10 w-10 place-items-center rounded-full border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
