import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terminos de uso | Ciencia Wellness Intelligence",
  description:
    "Terminos de uso del sitio Ciencia Wellness Intelligence de Bienestar Vibracional.",
};

export default function TermsPage() {
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
          <Link href="/privacidad">Privacidad</Link>
        </nav>
      </header>

      <section className="legal-hero">
        <p className="overline">Ciencia Wellness Intelligence</p>
        <h1>Terminos de uso</h1>
        <p>
          Estos terminos regulan el uso del sitio publico de Ciencia Wellness
          Intelligence de Bienestar Vibracional, creado para compartir
          documentacion educativa, casos grupales y dashboards WIBindex.
        </p>
        <small>Ultima actualizacion: 6 de septiembre de 2026</small>
      </section>

      <section className="legal-content">
        <article>
          <h2>Uso del sitio</h2>
          <p>
            El sitio permite acceder a contenidos educativos, fichas de casos,
            dashboards grupales, imagenes documentales y recursos vinculados a
            inteligencia somatica aplicada, vibroacustica y medicion funcional.
          </p>
          <p>
            Los casos se presentan con datos anonimizados o reducidos a primer
            nombre, segun el criterio definido para facilitar identificacion sin
            exponer informacion completa de cada participante.
          </p>
        </article>

        <article>
          <h2>Alcance educativo</h2>
          <p>
            El contenido del sitio tiene finalidad educativa, reflexiva y de
            acompanamiento en bienestar. No constituye diagnostico, tratamiento,
            promesa de resultado ni sustituto de atencion medica, psicologica,
            psiquiatrica o de cualquier otro profesional de la salud.
          </p>
        </article>

        <article>
          <h2>Responsabilidad del lector</h2>
          <p>
            Cada persona es responsable de usar la informacion a su ritmo,
            escuchar su cuerpo, pedir ayuda profesional cuando lo necesite y
            consultar con profesionales de salud cuando exista una situacion que
            requiera cuidado especial.
          </p>
        </article>

        <article>
          <h2>Disponibilidad y cambios</h2>
          <p>
            Podemos actualizar el sitio, sus recursos, textos, visualizaciones
            o estos terminos para mejorar la experiencia, corregir errores o
            adaptar la documentacion a nuevas necesidades metodologicas.
          </p>
        </article>

        <article>
          <h2>Contacto</h2>
          <p>
            Para consultas sobre estos terminos, escribinos a{" "}
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
