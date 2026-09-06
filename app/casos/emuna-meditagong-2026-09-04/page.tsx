import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "EMUNA - MeditaGong | Caso WIBindex 1.0",
  description:
    "Caso grupal EMUNA MeditaGong con medicion Bio-Well/GDV pre y post, dashboard WIBindex 1.0 e inteligencia somatica aplicada.",
};

export default function EmunaMeditaGongCasePage() {
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
            Grupo: EMUNA - MeditaGong &middot; Fecha: 4 septiembre 2026
          </p>
          <h1>MeditaGong &middot; WIBindex 1.0</h1>
          <p>
            Caso grupal de 9 participantes con mediciones Bio-Well/GDV pre y post
            pr&aacute;ctica. La lectura integra estr&eacute;s fisiol&oacute;gico, energ&iacute;a
            neurofisiol&oacute;gica y autoreconocimiento som&aacute;tico como registro
            complementario de la experiencia.
          </p>
        </div>

        <Image
          className="case-detail-photo"
          src="/images/casos/emuna-meditagong-2026-09-04.jpeg"
          alt="Caso grupal EMUNA MeditaGong con Gong"
          width={1600}
          height={1200}
          priority
          unoptimized
        />

        <section className="case-metrics">
          <article className="case-metric">
            <h2>Participantes</h2>
            <strong>9</strong>
          </article>
          <article className="case-metric">
            <h2>Estr&eacute;s promedio</h2>
            <strong>2.67 &rarr; 2.59</strong>
          </article>
          <article className="case-metric">
            <h2>Energ&iacute;a promedio</h2>
            <strong>50.17 &rarr; 61.36</strong>
          </article>
          <article className="case-metric">
            <h2>Convergencia</h2>
            <strong>33%</strong>
          </article>
        </section>

        <section className="case-note">
          <p>
            <strong>Contexto del caso:</strong> EMUNA - MeditaGong se documenta
            como una pr&aacute;ctica grupal de inteligencia som&aacute;tica aplicada con Gong.
            En Bio-Well, los participantes figuran bajo el prefijo A2; para la
            lectura p&uacute;blica se utiliza s&oacute;lo el primer nombre posterior a ese
            prefijo, facilitando la identificaci&oacute;n personal sin exponer el nombre
            completo.
          </p>
        </section>

        <section className="case-note">
          <p>
            <strong>Lectura Wellness Intelligence:</strong> el grupo mostr&oacute; una
            leve disminuci&oacute;n promedio del estr&eacute;s fisiol&oacute;gico y un aumento
            consistente de la energ&iacute;a neurofisiol&oacute;gica. La respuesta m&aacute;s
            homog&eacute;nea aparece en la energ&iacute;a, con 9 de 9 participantes en aumento
            posterior a la pr&aacute;ctica.
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
          src="/dashboards/emuna-meditagong-wibindex-1-0.html"
          title="Dashboard WIBindex 1.0 EMUNA MeditaGong"
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
