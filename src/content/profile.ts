/**
 * Edite aqui todos os dados do portfólio.
 * Edit all portfolio content here.
 */
import dashboardImg from "@/assets/project-dashboard.jpg";
import automationImg from "@/assets/project-automation.jpg";
import webappImg from "@/assets/project-webapp.jpg";

export type Lang = "pt" | "en";
export type Localized = Record<Lang, string>;

/** Links configuráveis — substitua pelos seus endereços reais. */
export const links = {
  linkedin: "https://www.linkedin.com/in/thiago-luan369",
  github: "https://github.com/th-dev01",
  email: "thdev.programacao@gmail.com",
  /** Coloque o PDF em /public e ajuste o caminho (ex.: "/curriculo-thiago.pdf"). */
  resume: "/curriculo.pdf",
  /** Foto de perfil exibida no destaque inicial. */
  photo: "/foto_prof.png",
};

export const profile = {
  name: "Thiago Luan Ferreira de Souza",
  shortName: "Thiago Luan",
  initials: "TL",
  title: "Analista de Dados | Python | SQL | Power BI | Automação e IA",
  titleEn: "Data Analyst | Python | SQL | Power BI | Automation & AI",
};

export const experiences = [
  {
    role: { pt: "Assistente de TI", en: "IT Assistant" },
    company: "ONE Empreendimentos",
    period: { pt: "Mai 2023 — Ago 2025", en: "May 2023 — Aug 2025" },
    items: {
      pt: [
        "Desenvolvimento web",
        "Automações de processos com Python",
        "Suporte técnico aos usuários",
        "Soluções tecnológicas internas",
      ],
      en: [
        "Web development",
        "Process automation with Python",
        "Technical support for users",
        "Internal technology solutions",
      ],
    },
  },
];

export type SkillIcon = "code" | "database" | "chart" | "workflow" | "layout";

export const skillGroups: { title: Localized; icon: SkillIcon; items: string[] }[] = [
  {
    title: { pt: "Linguagens e dados", en: "Languages & data" },
    icon: "code",
    items: ["Python", "SQL"],
  },
  {
    title: { pt: "Bancos de dados", en: "Databases" },
    icon: "database",
    items: ["MySQL", "SQL Server"],
  },
  { title: { pt: "Analytics e BI", en: "Analytics & BI" }, icon: "chart", items: ["Power BI"] },
  {
    title: { pt: "Automação", en: "Automation" },
    icon: "workflow",
    items: ["N8N", "Python", "Automação de processos"],
  },
  { title: { pt: "Web e design", en: "Web & design" }, icon: "layout", items: ["React", "Figma"] },
];

export type Project = {
  title: Localized;
  description: Localized;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
};

/**
 * Espaços reservados para projetos. Substitua título, descrição, tecnologias
 * e links quando os projetos estiverem publicados.
 */
export const projects: Project[] = [
  {
    title: { pt: "Análise exploratória de dados", en: "Exploratory data analysis" },
    description: {
      pt: "Espaço reservado para um projeto de análise exploratória: limpeza, tratamento e visualização de dados.",
      en: "Placeholder for an exploratory analysis project: data cleaning, wrangling and visualization.",
    },
    tech: ["Python", "Pandas", "SQL"],
    image: dashboardImg,
  },
  {
    title: { pt: "Dashboard Power BI", en: "Power BI dashboard" },
    description: {
      pt: "Espaço reservado para um dashboard com indicadores e visualizações interativas.",
      en: "Placeholder for a dashboard with KPIs and interactive visuals.",
    },
    tech: ["Power BI", "SQL"],
    image: dashboardImg,
  },
  {
    title: { pt: "Automação de processos", en: "Process automation" },
    description: {
      pt: "Espaço reservado para uma automação de rotinas com scripts e fluxos integrados.",
      en: "Placeholder for a routine automation built with scripts and integrated workflows.",
    },
    tech: ["Python", "N8N"],
    image: automationImg,
  },
  {
    title: { pt: "Aplicação web", en: "Web application" },
    description: {
      pt: "Espaço reservado para uma aplicação web com front-end moderno e banco de dados.",
      en: "Placeholder for a web application with a modern front-end and database.",
    },
    tech: ["React", "Supabase", "Figma"],
    image: webappImg,
  },
];

export const education = [
  {
    degree: { pt: "Bacharelado em Sistemas de Informação", en: "B.Sc. in Information Systems" },
    school: "CEST",
    period: { pt: "Concluído em 2026", en: "Completed in 2026" },
  },
];

/** Adicione especializações e cursos complementares aqui. */
export const courses: { name: Localized; school: string; year: string }[] = [];
