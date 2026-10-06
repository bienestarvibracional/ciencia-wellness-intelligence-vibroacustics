import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "GF BODY FIT STUDIO | Caso WIBindex 1.0",
  description:
    "Caso grupal GF BODY FIT STUDIO con medicion Bio-Well/GDV pre y post Yoga + Gong, dashboard WIBindex 1.0 e inteligencia somatica aplicada.",
};

export default function GfBodyFitStudioCasePage() {
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
            Grupo: GF BODY FIT STUDIO &middot; Fecha: 3 octubre 2026
          </p>
          <h1>Yoga + Gong &middot; WIBindex 1.0</h1>
          <p>
            Caso grupal con mediciones Bio-Well/GDV pre y post pr&aacute;ctica
            som&aacute;tica: 20 minutos de Yoga y 33 minutos de Gong. La lectura
            integra estr&eacute;s fisiol&oacute;gico, energ&iacute;a neurofisiol&oacute;gica y
            autoreconocimiento som&aacute;tico como registro complementario de la
            experiencia.
          </p>
        </div>

        <Image
          className="case-detail-photo"
          src="/images/casos/gf-body-fit-studio-yoga-gong-2026-10-03.jpeg"
          alt="Caso grupal GF BODY FIT STUDIO con Yoga y Gong"
          width={960}
          height={1280}
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
            <strong>2.44 &rarr; 2.25</strong>
          </article>
          <article className="case-metric">
            <h2>Energ&iacute;a promedio</h2>
            <strong>61.07 &rarr; 61.21</strong>
          </article>
          <article className="case-metric">
            <h2>Convergencia</h2>
            <strong>40%</strong>
          </article>
        </section>

        <section className="case-note">
          <p>
            <strong>Contexto del caso:</strong> GF BODY FIT STUDIO se documenta
            como una experiencia grupal de inteligencia som&aacute;tica aplicada que
            combin&oacute; Yoga y Gong. En Bio-Well, los registros figuran bajo el
            prefijo A4; para la lectura p&uacute;blica se utiliza s&oacute;lo el primer
            nombre posterior a ese prefijo, facilitando la identificaci&oacute;n
            personal sin exponer el nombre completo. El registro A4 FRANCISCO no
            se incluye en el dashboard porque no cuenta con segunda medici&oacute;n.
          </p>
        </section>

        <section className="case-note">
          <p>
            <strong>Lectura Wellness Intelligence:</strong> la muestra v&aacute;lida
            mostr&oacute; una reducci&oacute;n del estr&eacute;s fisiol&oacute;gico en 5 de 5
            participantes con doble medici&oacute;n. La energ&iacute;a promedio permaneci&oacute;
            estable con una leve variaci&oacute;n ascendente; varios valores iniciales
            se encontraban por encima de la meseta funcional y tendieron a
            acercarse al rango de regulaci&oacute;n.
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
          src="/dashboards/gf-body-fit-studio-wibindex-1-0.html"
          title="Dashboard WIBindex 1.0 GF BODY FIT STUDIO"
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
