import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/content/i18n";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

const title = "Thiago Luan Ferreira de Souza — Analista de Dados | Python | SQL | Power BI";
const description =
  "Portfólio de Thiago Luan: análise de dados, Business Intelligence, Python, SQL, Power BI e automação de processos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
