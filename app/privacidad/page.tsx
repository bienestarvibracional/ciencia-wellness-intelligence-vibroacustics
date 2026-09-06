import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Politica de privacidad | Ciencia Wellness Intelligence",
  description:
    "Politica de privacidad del sitio Ciencia Wellness Intelligence de Bienestar Vibracional.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-brand" href="/">
          <Image
            src="/images/logo-bienestar-vibracional.png"
            alt="Bienestar Vibracional"
            width={190}
            height={76}
            unoptimized
          />
        </Link>
        <nav>
          <Link href="/casos">Casos</Link>
          <Link href="/terminos">Terminos</Link>
        </nav>
      </header>

      <section className="legal-hero">
        <p className="overline">Ciencia Wellness Intelligence</p>
        <h1>Politica de privacidad</h1>
        <p>
          Esta politica explica como Bienestar Vibracional usa la informacion
          vinculada al sitio publico Ciencia Wellness Intelligence y a sus casos
          documentados.
        </p>
        <small>Ultima actualizacion: 6 de septiembre de 2026</small>
      </section>

      <section className="legal-content">
        <article>
          <h2>Informacion presentada</h2>
          <p>
            El sitio puede mostrar contexto de sesiones, imagenes documentales,
            fecha, lugar, practica realizada, metricas grupales, dashboards
            WIBindex y autoreconocimiento somatico reportado por participantes.
          </p>
          <p>
            La informacion sensible se publica de manera anonimizada o reducida
            a primer nombre cuando esa forma ayuda a que cada participante pueda
            reconocerse sin exponer su identidad completa.
          </p>
        </article>

        <article>
          <h2>Para que se usa</h2>
          <p>
            La informacion se usa para documentar tendencias grupales,
            comunicar resultados educativos y sostener una biblioteca publica de
            casos de inteligencia somatica aplicada.
          </p>
          <p>
            No vendemos datos ni los usamos para publicidad externa.
          </p>
        </article>

        <article>
          <h2>Servicios externos</h2>
          <p>
            El sitio puede utilizar infraestructura de publicacion, repositorios
            de codigo, analitica basica, almacenamiento de imagenes o servicios
            de base de datos cuando se habilite una etapa automatizada.
          </p>
        </article>

        <article>
          <h2>Datos de salud y bienestar</h2>
          <p>
            Los dashboards y registros se presentan con finalidad educativa,
            comparativa y de bienestar. No reemplazan diagnostico, tratamiento
            ni indicacion medica, psicologica o nutricional.
          </p>
        </article>

        <article>
          <h2>Contacto</h2>
          <p>
            Para consultas sobre privacidad o uso de datos, escribinos a{" "}
            <a href="mailto:hola@bienestarvibracional.com">
              hola@bienestarvibracional.com
            </a>
            .
          </p>
        </article>
      </section>
    </main>
  );
}
