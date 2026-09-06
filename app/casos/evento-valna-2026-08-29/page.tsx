import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Evento Valna | Caso WIBindex 1.0",
  description:
    "Caso grupal Evento Valna con comparativa Bio-Well/GDV post energia escalar y post Gong, dashboard WIBindex 1.0 e inteligencia somatica aplicada.",
};

export default function EventoValnaCasePage() {
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
            Grupo: Evento Valna &middot; Fecha: 29 agosto 2026
          </p>
          <h1>Experiencia Gong &middot; WIBindex 1.0</h1>
          <p>
            Caso grupal de 10 participantes con tecnolog&iacute;a GDV Bio-Well. Esta
            lectura corresponde a una comparativa especial entre la medici&oacute;n
            posterior a energ&iacute;a escalar y la medici&oacute;n posterior al Gong,
            observando estr&eacute;s fisiol&oacute;gico, energ&iacute;a neurofisiol&oacute;gica y
            autoreconocimiento som&aacute;tico.
          </p>
        </div>

        <Image
          className="case-detail-photo"
          src="/images/casos/evento-valna-gong-2026-08-29.jpg"
          alt="Experiencia Gong del Evento Valna"
          width={960}
          height={1280}
          priority
          unoptimized
        />

        <section className="case-metrics">
          <article className="case-metric">
            <h2>Participantes</h2>
            <strong>10</strong>
          </article>
          <article className="case-metric">
            <h2>Estr&eacute;s promedio</h2>
            <strong>3.32 &rarr; 3.01</strong>
          </article>
          <article className="case-metric">
            <h2>Energ&iacute;a promedio</h2>
            <strong>48.45 &rarr; 55.40</strong>
          </article>
          <article className="case-metric">
            <h2>Convergencia</h2>
            <strong>70%</strong>
          </article>
        </section>

        <section className="case-note">
          <p>
            <strong>Contexto del caso:</strong> la secuencia Valna permite observar
            el pasaje desde una toma posterior a energ&iacute;a escalar hacia una toma
            posterior a la experiencia Gong. Por este motivo, el dashboard no se
            presenta como un antes y despu&eacute;s basal tradicional, sino como una
            lectura comparativa espec&iacute;fica dentro de una experiencia som&aacute;tica
            de modulaci&oacute;n y recuperaci&oacute;n.
          </p>
        </section>

        <section className="case-note">
          <p>
            <strong>Lectura Wellness Intelligence:</strong> el grupo mostr&oacute; una
            disminuci&oacute;n promedio del estr&eacute;s fisiol&oacute;gico y un aumento promedio
            de la energ&iacute;a neurofisiol&oacute;gica. En 7 de 10 participantes ambas
            variables se movieron en direcci&oacute;n convergente: menor carga de
            estr&eacute;s y mayor disponibilidad energ&eacute;tica.
          </p>
        </section>

        <section className="case-panel">
          <h2>Dashboard grupal editable</h2>
          <p>
            Panel dual WIBindex 1.0 construido exclusivamente con estr&eacute;s,
            energ&iacute;a y autoreconocimiento som&aacute;tico de cada participante.
          </p>
        </section>

        <iframe
          className="dashboard-frame"
          src="/dashboards/evento-valna-wibindex-1-0.html"
          title="Dashboard WIBindex 1.0 Evento Valna"
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
