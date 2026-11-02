import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./profile";

const dict = {
  pt: {
    nav: {
      home: "Início",
      about: "Perfil",
      experience: "Experiência",
      skills: "Competências",
      projects: "Projetos",
      education: "Formação",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Data Science | BI | Automação",
      headline: "Analista de Dados focado em Python, SQL, Power BI e automação de processos.",
      intro:
        "Bacharel em Sistemas de Informação, com experiência em desenvolvimento web, automações com Python e bancos de dados. Transformo dados e processos em soluções eficientes para organizações.",
      resume: "Baixar currículo",
      email: "E-mail",
      highlights: [
        { title: "Dados", text: "Análise e tratamento de dados com Python e SQL" },
        { title: "BI", text: "Dashboards e indicadores com Power BI" },
        { title: "Automação", text: "Processos automatizados com Python e N8N" },
      ],
      facts: [
        "Sistemas de Informação — CEST",
        "Python, SQL, MySQL,  SQL Server",
        "Power BI, N8N, React",
      ],
    },
    about: {
      eyebrow: "Perfil",
      title: "Dados aplicados a processos, eficiência e decisão.",
      text: "Sou bacharel em Sistemas de Informação, com experiência em analide de dados, automação de processos utilizando Python, bancos de dados e implementação de soluções tecnológicas.",
      text2:
        "Tenho interesse em análise de dados, Business Intelligence e Inteligência Artificial, buscando transformar dados e processos em soluções eficientes para organizações.",
    },
    experience: { eyebrow: "Experiência", title: "Histórico profissional" },
    skills: { eyebrow: "Competências", title: "Stack técnico e atuação" },
    projects: {
      eyebrow: "Projetos",
      title: "Portfólio de projetos",
      subtitle: "Espaço preparado para projetos de dados, dashboards, automações e aplicações web.",
      soon: "Em breve",
      code: "GitHub",
      demo: "Demonstração",
    },
    education: {
      eyebrow: "Formação",
      title: "Educação e certificações",
      courses: "Especializações e cursos complementares",
      coursesEmpty: "Seção reservada para especializações e cursos complementares.",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre dados, automação e decisões melhores.",
      text: "Aberto a oportunidades como Analista de Dados Júnior, Analista de BI e Desenvolvedor Python.",
    },
    footer: "Todos os direitos reservados.",
    backToTop: "Voltar ao topo",
  },
  en: {
    nav: {
      home: "Home",
      about: "Profile",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Data Analysis | BI | Automation",
      headline: "Data Analyst focused on Python, SQL, Power BI and process automation.",
      intro:
        "B.Sc. in Information Systems, with experience in web development, Python automation and databases. I turn data and processes into efficient solutions for organizations.",
      resume: "Download résumé",
      email: "E-mail",
      highlights: [
        { title: "Data", text: "Data analysis and wrangling with Python and SQL" },
        { title: "BI", text: "Dashboards and KPIs with Power BI" },
        { title: "Automation", text: "Automated processes with Python and N8N" },
      ],
      facts: ["Information Systems — CEST", "Python, SQL, MySQL, Supabase", "Power BI, N8N, React"],
    },
    about: {
      eyebrow: "Profile",
      title: "Data applied to processes, efficiency and decisions.",
      text: "I hold a bachelor's degree in Information Systems, with experience in web systems development, process automation using Python, databases and implementing technology solutions.",
      text2:
        "I'm interested in data analysis, Business Intelligence and Artificial Intelligence, aiming to turn data and processes into efficient solutions for organizations.",
    },
    experience: { eyebrow: "Experience", title: "Professional history" },
    skills: { eyebrow: "Skills", title: "Tech stack and expertise" },
    projects: {
      eyebrow: "Projects",
      title: "Project portfolio",
      subtitle: "Space prepared for data projects, dashboards, automations and web applications.",
      soon: "Coming soon",
      code: "GitHub",
      demo: "Live demo",
    },
    education: {
      eyebrow: "Education",
      title: "Education and certifications",
      courses: "Specializations and additional courses",
      coursesEmpty: "Section reserved for specializations and additional courses.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about data, automation and better decisions.",
      text: "Open to opportunities as a Junior Data Analyst, BI Analyst and Python Developer.",
    },
    footer: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export type Dict = (typeof dict)["pt"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dict[lang] as Dict }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
