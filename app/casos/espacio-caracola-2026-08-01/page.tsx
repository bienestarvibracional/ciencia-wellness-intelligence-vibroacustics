import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Espacio Caracola | Caso WIBindex 1.0",
  description:
    "Caso grupal Espacio Caracola con experiencia Gong, medición Bio-Well/GDV y dashboard WIBindex 1.0.",
};

export default function EspacioCaracolaCasePage() {
  return (
    <main className="cases-page">
      <header className="cases-header cases-shell">
        <Link className="cases-brand" href="/">
          <Image
            src="/images/logo-bienestar-vibracional.png"
            width={1820}
            height={956}
            alt="Bienestar Vibracional"
            unoptimized
          />
          <span>
            Wellness Intelligence : Vibroacústica Sonido + Vibración
            <span>Casos de inteligencia somática aplicada</span>
          </span>
        </Link>
        <nav className="cases-nav" aria-label="Navegación de casos">
          <Link className="course-link" href="/">
            Inicio
          </Link>
          <Link className="course-link" href="/casos">
            CASOS
          </Link>
        </nav>
      </header>

      <section className="cases-main cases-shell">
        <div className="cases-title">
          <p className="case-meta">Grupo: Espacio Caracola · Fecha: 1 agosto 2026</p>
          <h1>Experiencia Gong · WIBindex 1.0</h1>
          <p>
            Sesión grupal documentada con medición pre y post de estrés
            fisiológico y energía neurofisiológica, más autoreconocimiento
            somático reportado por cada participante.
          </p>
        </div>

        <Image
          className="case-detail-photo"
          src="/images/casos/espacio-caracola-gong-2026-08-01.jpeg"
          alt="Grupo Espacio Caracola luego de la experiencia Gong"
          width={1600}
          height={1200}
          priority
          unoptimized
        />

        <section className="case-metrics">
          <article className="case-metric">
            <h2>Participantes</h2>
            <strong>13</strong>
          </article>
          <article className="case-metric">
            <h2>Estrés promedio</h2>
            <strong>2.69 → 2.50</strong>
          </article>
          <article className="case-metric">
            <h2>Energía promedio</h2>
            <strong>50.45 → 52.26</strong>
          </article>
          <article className="case-metric">
            <h2>Convergencia</h2>
            <strong>46%</strong>
          </article>
        </section>

        <section className="case-note">
          <p>
            <strong>Nota de integración:</strong> Consideramos esta intervención
            una práctica de inteligencia somática donde el cuerpo entrena la
            capacidad de regulación homeostática y activación vagal. La respuesta
            neurofisiológica se interpreta dentro del contexto de la experiencia
            de bienestar diseñada.
          </p>
        </section>

        <section className="case-panel">
          <h2>Dashboard grupal</h2>
        </section>

        <iframe
          className="dashboard-frame"
          src="/dashboards/espacio-caracola-wibindex-1-0.html"
          title="Dashboard WIBindex 1.0 Espacio Caracola"
        />

        <section className="case-note">
          <p>
            Quienes deseen un análisis ampliado de todo su organismo a través de
            la tecnología GDV de Bio-Well pueden acceder a una consulta privada.
            Más información:{" "}
            <a
              href="https://bienestarvibracional.com/vibracoaching-1-a-1"
              target="_blank"
              rel="noreferrer"
            >
              bienestarvibracional.com/vibracoaching-1-a-1
            </a>
          </p>
        </section>
      </section>

      <footer className="cases-footer cases-shell">
        www.bienestarvibracional.com
      </footer>
    </main>
  );
}
