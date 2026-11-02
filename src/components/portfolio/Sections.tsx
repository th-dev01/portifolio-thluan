import {
  Award,
  BarChart3,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  LayoutTemplate,
  Mail,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/content/i18n";
import {
  courses,
  education,
  experiences,
  links,
  profile,
  projects,
  skillGroups,
  type SkillIcon,
} from "@/content/profile";
import { GithubIcon, LinkedinIcon, Reveal, Section } from "./shared";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-primary">
            {t.about.eyebrow}
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
            {t.about.title}
          </h2>
        </Reveal>
        <Reveal delay={100} className="grid gap-5 text-lg leading-relaxed text-muted-foreground">
          <p>{t.about.text}</p>
          <p>{t.about.text2}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  const { t, lang } = useI18n();
  return (
    <Section
      id="experience"
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
      className="bg-secondary"
    >
      <ol className="relative grid gap-5">
        <span
          className="absolute bottom-0 left-[16.5rem] top-0 hidden w-px bg-border md:block"
          aria-hidden
        />
        {experiences.map((e) => (
          <li key={e.company}>
            <Reveal>
              <article className="relative grid gap-5 rounded-2xl border bg-card p-6 md:grid-cols-[13rem_1fr] md:gap-14">
                <div>
                  <span className="inline-block rounded-full bg-highlight-soft px-3 py-1 text-xs font-extrabold uppercase text-highlight">
                    {e.period[lang]}
                  </span>
                  <p className="mt-4 font-display text-xl font-extrabold leading-tight">
                    {e.company}
                  </p>
                </div>
                <span
                  className="absolute left-[16rem] top-7 hidden h-3.5 w-3.5 rounded-full border-2 border-primary bg-card ring-4 ring-card md:block"
                  aria-hidden
                >
                  <span className="m-auto mt-[2px] block h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{e.role[lang]}</h3>
                  <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-muted-foreground">
                    {e.items[lang].map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const skillIcons: Record<SkillIcon, LucideIcon> = {
  code: Code2,
  database: Database,
  chart: BarChart3,
  workflow: Workflow,
  layout: LayoutTemplate,
};

export function Skills() {
  const { t, lang } = useI18n();
  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = skillIcons[g.icon];
          return (
            <Reveal key={g.title.pt} delay={(i % 3) * 80}>
              <div className="h-full min-h-56 rounded-2xl border bg-card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{g.title[lang]}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border bg-secondary px-3 py-1.5 text-xs font-bold text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Projects() {
  const { t, lang } = useI18n();
  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      subtitle={t.projects.subtitle}
      className="bg-secondary"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title.pt} delay={(i % 2) * 100}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card">
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {!p.github && !p.demo && (
                  <span className="absolute right-3 top-3 rounded-full bg-highlight-soft px-3 py-1 text-xs font-extrabold uppercase text-highlight">
                    {t.projects.soon}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold">{p.title[lang]}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description[lang]}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border bg-secondary px-3 py-1 text-xs font-bold"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <Button asChild={!!p.github} variant="outline" size="sm" disabled={!p.github}>
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <GithubIcon /> {t.projects.code}
                      </a>
                    ) : (
                      <>
                        <GithubIcon /> {t.projects.code}
                      </>
                    )}
                  </Button>
                  <Button asChild={!!p.demo} variant="soft" size="sm" disabled={!p.demo}>
                    {p.demo ? (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <ExternalLink /> {t.projects.demo}
                      </a>
                    ) : (
                      <>
                        <ExternalLink /> {t.projects.demo}
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  const { t, lang } = useI18n();
  return (
    <Section id="education" eyebrow={t.education.eyebrow} title={t.education.title}>
      <div className="grid gap-4">
        {education.map((e) => (
          <Reveal key={e.school}>
            <div className="flex items-center gap-5 rounded-2xl border bg-card p-5 transition-shadow hover:shadow-card">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border text-primary">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-extrabold uppercase tracking-wide text-primary">
                  {e.period[lang]}
                </p>
                <h3 className="text-lg font-bold">{e.degree[lang]}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
              </div>
            </div>
          </Reveal>
        ))}

        {courses.length === 0 ? (
          <Reveal delay={100}>
            <div className="flex items-center gap-5 rounded-2xl border border-dashed bg-card/60 p-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border text-primary">
                <Award className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold">{t.education.courses}</h3>
                <p className="text-sm text-muted-foreground">{t.education.coursesEmpty}</p>
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((c) => (
              <Reveal key={c.name.pt}>
                <div className="flex items-center gap-4 rounded-2xl border bg-card p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border text-primary">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold text-highlight">{c.year}</p>
                    <h3 className="font-bold">{c.name[lang]}</h3>
                    <p className="text-sm text-muted-foreground">{c.school}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export function Contact() {
  const { t } = useI18n();
  const items = [
    { href: `mailto:${links.email}`, label: "E-mail", Icon: Mail, ext: false },
    { href: links.linkedin, label: "LinkedIn", Icon: LinkedinIcon, ext: true },
    { href: links.github, label: "GitHub", Icon: GithubIcon, ext: true },
  ];
  return (
    <section id="contact" className="bg-navy py-20 text-navy-foreground">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1.3fr_1fr] md:px-8">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em]">
            {t.contact.eyebrow}
          </p>
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-navy-muted">{t.contact.text}</p>
        </div>
        <div className="flex gap-3 md:justify-end">
          {items.map(({ href, label, Icon, ext }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
              className="grid h-14 w-14 place-items-center rounded-full border border-navy-border bg-navy-foreground/5 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-navy-deep py-7 text-sm text-navy-muted">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 md:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name}. {t.footer}
        </span>
        <a href="#home" className="font-bold text-accent hover:underline">
          {t.backToTop}
        </a>
      </div>
    </footer>
  );
}
