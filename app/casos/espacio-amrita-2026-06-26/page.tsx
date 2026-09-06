import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Espacio AMRITA | Caso WIBindex 1.0",
  description:
    "Caso grupal Espacio AMRITA con experiencia Gong, medicion Bio-Well/GDV y dashboard WIBindex 1.0.",
};

export default function EspacioAmritaCasePage() {
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
            Wellness Intelligence : Vibroac&uacute;stica Sonido + Vibraci&oacute;n
            <span>Casos de inteligencia som&aacute;tica aplicada</span>
          </span>
        </Link>
        <nav className="cases-nav" aria-label="Navegaci&oacute;n de casos">
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
            Grupo: Espacio AMRITA &middot; Fecha: 26 junio 2026
          </p>
          <h1>Experiencia Gong &middot; WIBindex 1.0</h1>
          <p>
            Sesi&oacute;n grupal documentada con medici&oacute;n pre y post de estr&eacute;s
            fisiol&oacute;gico y energ&iacute;a neurofisiol&oacute;gica, m&aacute;s
            autoreconocimiento som&aacute;tico reportado por cada participante.
          </p>
        </div>

        <Image
          className="case-detail-photo"
          src="/images/casos/espacio-amrita-gong-2026-06-26.jpeg"
          alt="Practica grupal con Gong en Espacio AMRITA"
          width={955}
          height={1077}
          priority
          unoptimized
        />

        <section className="case-metrics">
          <article className="case-metric">
            <h2>Participantes</h2>
            <strong>5</strong>
          </article>
          <article className="case-metric">
            <h2>Estr&eacute;s promedio</h2>
            <strong>3.12 &rarr; 2.38</strong>
          </article>
          <article className="case-metric">
            <h2>Energ&iacute;a promedio</h2>
            <strong>58.66 &rarr; 66.12</strong>
          </article>
          <article className="case-metric">
            <h2>Convergencia</h2>
            <strong>60%</strong>
          </article>
        </section>

        <section className="case-note">
          <p>
            <strong>Nota de integraci&oacute;n:</strong> Consideramos esta intervenci&oacute;n
            una pr&aacute;ctica de inteligencia som&aacute;tica donde el cuerpo entrena la
            capacidad de regulaci&oacute;n homeost&aacute;tica y activaci&oacute;n vagal. La respuesta
            neurofisiol&oacute;gica se interpreta dentro del contexto de la experiencia
            de bienestar dise&ntilde;ada.
          </p>
        </section>

        <section className="case-panel">
          <h2>Dashboard grupal</h2>
        </section>

        <iframe
          className="dashboard-frame"
          src="/dashboards/espacio-amrita-wibindex-1-0.html"
          title="Dashboard WIBindex 1.0 Espacio AMRITA"
        />

        <section className="case-note">
          <p>
            Quienes deseen un an&aacute;lisis ampliado de todo su organismo a trav&eacute;s de
            la tecnolog&iacute;a GDV de Bio-Well pueden acceder a una consulta privada.
            M&aacute;s informaci&oacute;n:{" "}
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
