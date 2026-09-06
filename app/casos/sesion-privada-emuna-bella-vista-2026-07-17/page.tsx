import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sesión privada en Espacio EMUNA | Caso WIBindex 1.0",
  description:
    "Caso grupal privado en Espacio EMUNA Bella Vista con experiencia Gong, medición Bio-Well/GDV y dashboard WIBindex 1.0.",
};

export default function SesionPrivadaEmunaCasePage() {
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
          <p className="case-meta">
            Grupo: SESION PRIVADA en Espacio EMUNA (Bella Vista) · Fecha: 17 julio 2026
          </p>
          <h1>Experiencia Gong · WIBindex 1.0</h1>
          <p>
            Sesión grupal privada documentada con medición pre y post de estrés
            fisiológico y energía neurofisiológica, más autoreconocimiento
            somático reportado por cada participante.
          </p>
        </div>

        <Image
          className="case-detail-photo"
          src="/images/casos/sesion-privada-emuna-bella-vista-2026-07-17.jpg"
          alt="Sesión privada con Gong en Espacio EMUNA Bella Vista"
          width={1778}
          height={1280}
          priority
          unoptimized
        />

        <section className="case-metrics">
          <article className="case-metric">
            <h2>Participantes</h2>
            <strong>6</strong>
          </article>
          <article className="case-metric">
            <h2>Estrés promedio</h2>
            <strong>2.68 → 2.14</strong>
          </article>
          <article className="case-metric">
            <h2>Energía promedio</h2>
            <strong>52.26 → 55.02</strong>
          </article>
          <article className="case-metric">
            <h2>Convergencia</h2>
            <strong>83%</strong>
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
          src="/dashboards/sesion-privada-emuna-wibindex-1-0.html"
          title="Dashboard WIBindex 1.0 sesión privada Espacio EMUNA"
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
