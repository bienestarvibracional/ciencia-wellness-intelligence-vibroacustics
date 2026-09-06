import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl =
  "https://ciencia-wellness-intelligence.bienestarvibracional.chatgpt.site";
const pdfUrl = "/wibindex-somatic/wibindex-somatic-dashboard-entregable.pdf";

export const metadata: Metadata = {
  title: "WIBIndex Somatic™ | Inteligencia Somática y Bio-Well",
  description:
    "Propuesta institucional para visualizar la respuesta antes-después en Biodanza, Yoga, Tai Chi, Qi Gong y otras prácticas de Inteligencia Somática mediante WIBIndex Somatic™ y Bio-Well / GDV.",
  alternates: {
    canonical: `${siteUrl}/wibindex-somatic`,
  },
  openGraph: {
    title: "WIBIndex Somatic™ | Inteligencia Somática y Bio-Well",
    description:
      "Visualización antes-después para prácticas de Inteligencia Somática mediante WIBIndex Somatic™ y Bio-Well / GDV.",
    url: `${siteUrl}/wibindex-somatic`,
    siteName: "Bienestar Vibracional",
    images: [
      {
        url: `${siteUrl}/images/logo-bienestar-vibracional.png`,
        width: 1820,
        height: 956,
        alt: "Bienestar Vibracional",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

const editable = {
  "data-editable": "true",
  suppressContentEditableWarning: true,
};

const disciplines = [
  "Biodanza",
  "Yoga",
  "Tai Chi",
  "Qi Gong",
  "Eutonía",
  "Terapias de sonido",
  "Ejercicios sistémicos",
  "Constelaciones familiares",
  "5 Ritmos",
  "Alba Emoting",
  "Ecstatic Dance",
  "Danza movimiento terapia",
  "Prácticas corporales conscientes",
];

const indicators = [
  {
    origin: "ES · estrés fisiológico",
    title: "Regulación del estrés",
    body: [
      "Muestra cuánta capacidad tiene hoy tu organismo para afrontar las demandas sin quedar atrapado en un estado de alerta.",
      "Cuanto más alto el puntaje, mayor regulación. No significa “más estrés”.",
      "En una medición antes–después permite observar si, luego de la práctica, la respuesta fisiológica se desplazó hacia una zona de mayor regulación.",
    ],
  },
  {
    origin: "EN · energía funcional",
    title: "Energía funcional disponible",
    body: [
      "Refleja si tu sistema cuenta con recursos disponibles para sostener la actividad cotidiana y recuperarse.",
      "No mide entusiasmo, calorías ni producción de ATP.",
      "Un puntaje alto significa que la medición se encuentra más cerca del rango funcional definido por el WIBIndex Somatic™, no que la persona tenga “energía ilimitada”.",
      "El objetivo no es maximizar la energía, sino observar una disponibilidad energética compatible con regulación y estabilidad.",
    ],
  },
  {
    origin: "BN · balance neurovegetativo",
    title: "Equilibrio activación–recuperación",
    body: [
      "Observa qué tan equilibrada aparece la señal general entre dos capacidades fundamentales del organismo: ponerse en acción y poder volver al descanso.",
      "Un valor alto sugiere una organización más equilibrada entre activación y recuperación.",
      "Un valor bajo invita a observar si al organismo le cuesta frenar y recuperar después de activarse o si, por el contrario, presenta dificultad para volver a movilizar sus recursos.",
      "Este indicador crea uno de los puentes más claros entre la práctica corporal y los procesos de autorregulación.",
    ],
  },
  {
    origin: "Bio-Well / GDV",
    title: "Distribución y organización energética",
    featured: true,
    body: [
      "Este indicador presenta una representación visual del campo energético/electrofotónico registrado del participante a partir del procesamiento realizado por la tecnología Bio-Well / GDV.",
      "Su principal valor dentro del WIBIndex Somatic™ es visual y comparativo: permite observar cómo aparece distribuido y organizado el patrón antes de la intervención somática y contrastarlo con el registro obtenido después de la práctica.",
      "La lectura no busca determinar simplemente si existe “más” o “menos” energía. El interés está puesto en observar características de su distribución, continuidad, equilibrio y organización general.",
    ],
  },
];

const steps = [
  ["Preparación", "Consentimiento, breve reposo y condiciones estables."],
  ["Medición inicial", "Escaneo Bio-Well / GDV y mini escala sensoperceptiva."],
  ["Práctica", "Biodanza, Yoga, Tai Chi, Qi Gong, sonido, constelaciones, 5 Ritmos, Alba Emoting, Ecstatic Dance u otra dinámica corporal."],
  ["Medición final", "Se repite el procedimiento en una ventana temporal definida."],
  ["Dashboard", "Se visualizan los indicadores y el cambio antes-después."],
  ["Devolución", "Informe individual y lectura grupal agregada y confidencial."],
];

const bars = [
  ["Estrés", "52%", "34%"],
  ["Energía", "58%", "76%"],
  ["Balance", "48%", "73%"],
  ["Distribución y organización", "55%", "81%"],
  ["Integración", "46%", "79%"],
];

export default function WIBIndexSomaticPage() {
  return (
    <main className="somatic-page" id="inicio">
      <nav className="somatic-nav" aria-label="Navegación WIBIndex Somatic">
        <div className="somatic-shell somatic-nav-inner">
          <Link className="somatic-brand" href="/">
            <Image
              src="/images/logo-bienestar-vibracional.png"
              width={1820}
              height={956}
              alt="Bienestar Vibracional"
              unoptimized
            />
          </Link>
          <div className="somatic-nav-links">
            <a href="#contexto">Contexto</a>
            <a href="#indice">Índice</a>
            <a href="#indicadores">Indicadores</a>
            <a href="#dashboard">Resultado visual</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      <section className="somatic-hero">
        <div className="somatic-shell somatic-hero-grid">
          <div>
            <p className="somatic-eyebrow">WIBIndex Somatic™</p>
            <h1 {...editable}>
              Tu cliente cambió.
              <span>¿Cómo lo demostramos?</span>
            </h1>
            <p className="somatic-lead" {...editable}>
              WIBIndex Somatic™ es una herramienta profesional para medir
              objetivamente la Inteligencia Somática y seguir su evolución con
              indicadores comparables antes, durante y después de cada
              intervención.
            </p>
            <p className="somatic-lead somatic-lead-secondary" {...editable}>
              Acompañamos la evolución hacia la homeostasis: una capacidad que
              el organismo sabe recuperar cuando generamos el contexto somático
              adecuado, con seguridad, presencia, respiración, movimiento y
              registro corporal.
            </p>
            <div className="somatic-version-row" aria-label="Versiones WIBIndex Somatic">
              <span>Versión 1.0 · Bio-Well / GDV + integración somática</span>
              <span>Versión 2.0 · incorpora parámetros de HRV</span>
            </div>
            <div className="somatic-actions">
              <a className="somatic-btn somatic-btn-primary" href="#dashboard">
                Ver resultado visual
              </a>
              <a className="somatic-btn somatic-btn-secondary" href="#protocolo">
                Cómo se implementa
              </a>
            </div>
          </div>
          <aside className="somatic-hero-card" aria-label="Síntesis del marco">
            <p className="somatic-quote" {...editable}>
              Del “me siento mejor” al “podemos medir cómo evolucionó”.
            </p>
            <div className="somatic-mini-grid">
              <div className="somatic-mini-card">
                <strong>Antes</strong>
                <span>Estado basal y percepción inicial.</span>
              </div>
              <div className="somatic-mini-card">
                <strong>Después</strong>
                <span>Respuesta fisiológica y sensoperceptiva.</span>
              </div>
              <div className="somatic-mini-card">
                <strong>Bio-Well / GDV</strong>
                <span>Datos funcionales comparables.</span>
              </div>
              <div className="somatic-mini-card">
                <strong>Dashboard</strong>
                <span>Lenguaje visual institucional.</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="contexto" className="somatic-section">
        <div className="somatic-shell">
          <div className="somatic-section-kicker">01 · Contexto</div>
          <h2 {...editable}>La Inteligencia Somática también puede observarse.</h2>
          <p className="somatic-section-intro" {...editable}>
            Biodanza, Yoga, Tai Chi, Qi Gong, Eutonía y otras dinámicas
            corporales habilitan percibir, regular y reorganizar la experiencia
            a través del cuerpo vivo. WIBIndex Somatic™ permite que médicos,
            psicólogos, psiquiatras, kinesiólogos, osteópatas, fisioterapeutas,
            coaches, terapeutas de sonido, facilitadores de ejercicios
            sistémicos, consteladores familiares, facilitadores de 5 Ritmos,
            Alba Emoting, Ecstatic Dance, terapeutas corporales y profesionales
            del bienestar vean en menos de 3 segundos qué cambió y cómo
            seguirlo.
          </p>
          <div className="somatic-professional-strip" aria-label="Beneficio profesional">
            <strong>No reemplaza tu criterio clínico.</strong>
            <span>Lo complementa con indicadores comparables antes, durante y después de cada intervención.</span>
          </div>
          <div className="somatic-cards-3">
            <article className="somatic-card">
              <h3 {...editable}>¿Qué sucede?</h3>
              <p {...editable}>
                La experiencia moviliza la percepción, la emoción encarnada, el
                tono corporal y la respuesta fisiológica.
              </p>
            </article>
            <article className="somatic-card teal">
              <h3 {...editable}>¿Qué se desarrolla?</h3>
              <p {...editable}>
                Mayor registro corporal, autorregulación, integración
                emoción-cuerpo y disponibilidad para aprender.
              </p>
            </article>
            <article className="somatic-card mixed">
              <h3 {...editable}>¿Por qué medir?</h3>
              <p {...editable}>
                Para traducir en un lenguaje visual aquello que la persona
                describe como presencia, alivio, vitalidad, calma o integración.
              </p>
            </article>
          </div>
          <div className="somatic-disciplines" aria-label="Prácticas aplicables">
            {disciplines.map((item) => (
              <span className="somatic-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="somatic-section somatic-section-soft" id="indice">
        <div className="somatic-shell">
          <div className="somatic-section-kicker">02 · La nueva capa</div>
          <h2 {...editable}>¿Qué es el WIBIndex Somatic™?</h2>
          <p className="somatic-section-intro" {...editable}>
            Es una capa interpretativa del Wellness Intelligence Framework que
            integra datos obtenidos con Bio-Well / GDV y una breve
            autoevaluación sensoperceptiva para describir la respuesta inmediata
            del organismo ante una práctica de Inteligencia Somática. Esta
            landing presenta la versión 1.0 del WIBIndex Somatic™; la versión
            2.0 amplía el modelo incorporando parámetros relacionados con la
            variabilidad de la frecuencia cardíaca.
          </p>
          <div className="somatic-bridge">
            <div className="somatic-bridge-panel">
              <h3 {...editable}>La experiencia vivida</h3>
              <p {...editable}>
                Respiración, apoyo, emoción, presencia, conexión, vitalidad y
                percepción del propio cuerpo.
              </p>
            </div>
            <div className="somatic-bridge-arrow" aria-hidden="true">
              ↔
            </div>
            <div className="somatic-bridge-panel">
              <h3 {...editable}>La respuesta observada</h3>
              <p {...editable}>
                Estrés, energía funcional, balance neurovegetativo, distribución
                y organización energética y cambio sensoperceptivo.
              </p>
            </div>
          </div>
          <div className="somatic-note" {...editable}>
            El objetivo no es diagnosticar ni “probar” una terapia. Es hacer
            visible una respuesta antes-después y convertirla en una herramienta
            educativa, exploratoria y de seguimiento.
          </div>
        </div>
      </section>

      <section id="indicadores" className="somatic-section">
        <div className="somatic-shell">
          <div className="somatic-section-kicker">03 · Composición del índice</div>
          <h2 {...editable}>
            ¿Cómo se compone el WIBIndex Somatic™?
          </h2>
          <p className="somatic-section-intro" {...editable}>
            El WIBIndex Somatic™ integra diferentes indicadores para ofrecer una
            lectura sencilla de cómo se organiza el organismo en el momento de
            la medición y qué cambios aparecen después de una práctica de
            Inteligencia Somática.
          </p>
          <div className="somatic-interpretation-rule">
            <strong {...editable}>
              “Un puntaje más alto no significa ‘más’ de cada variable.
              Significa mayor proximidad al rango funcional definido por el
              índice.”
            </strong>
            <p {...editable}>
              Por ejemplo, un valor alto en Regulación del estrés no significa
              que la persona tenga más estrés, sino que su organismo presenta
              una respuesta más cercana al rango de regulación esperado.
            </p>
            <p {...editable}>
              De esta manera, todos los indicadores pueden leerse en una misma
              dirección: cuanto mayor es el puntaje, mayor es la organización
              funcional observada para esa dimensión.
            </p>
          </div>

          <div className="somatic-indicator-list">
            {indicators.map((indicator, index) => (
              <details
                className={
                  indicator.featured
                    ? "somatic-indicator is-featured"
                    : "somatic-indicator"
                }
                key={indicator.title}
                open={index < 3 || indicator.featured}
              >
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b {...editable}>{indicator.title}</b>
                  <small {...editable}>Indicador de origen: {indicator.origin}</small>
                </summary>
                <div className="somatic-indicator-body">
                  {indicator.body.map((paragraph) => (
                    <p key={paragraph} {...editable}>
                      {paragraph}
                    </p>
                  ))}

                  {indicator.featured ? (
                    <>
                      <div className="somatic-before-after" aria-label="Comparación antes y después">
                        <div>
                          <strong>ANTES</strong>
                          <Image
                            src="/wibindex-somatic/marcelo-bianchi-campo-energia-pre.png"
                            alt="Ejemplo Bio-Well / GDV antes de la práctica"
                            width={1800}
                            height={900}
                            unoptimized
                          />
                          <span {...editable}>
                            Cómo se presenta el patrón previo a la práctica.
                          </span>
                        </div>
                        <b aria-hidden="true">→</b>
                        <div>
                          <strong>DESPUÉS</strong>
                          <Image
                            src="/wibindex-somatic/marcelo-bianchi-campo-energia-post.png"
                            alt="Ejemplo Bio-Well / GDV después de la práctica"
                            width={1800}
                            height={900}
                            unoptimized
                          />
                          <span {...editable}>
                            Cómo se reorganiza el patrón inmediatamente después
                            de la experiencia somática.
                          </span>
                        </div>
                      </div>

                      <div className="somatic-feature-block">
                        <h3 {...editable}>¿Qué aporta a la Inteligencia Somática?</h3>
                        <p {...editable}>
                          Este indicador crea un puente especialmente intuitivo
                          entre sensopercepción y visualización.
                        </p>
                        <blockquote {...editable}>
                          “¿Qué siento diferente en mi cuerpo después de la
                          práctica y qué diferencias puedo observar entre ambas
                          imágenes?”
                        </blockquote>
                        <p {...editable}>
                          La representación visual funciona como un recurso
                          para estimular el autorregistro y favorecer una
                          conversación sobre los cambios experimentados durante
                          Biodanza, Yoga, Tai Chi, Qi Gong, Eutonía, danza u
                          otras prácticas corporales.
                        </p>
                      </div>

                      <div className="somatic-feature-block">
                        <h3 {...editable}>Coherencia antes–después</h3>
                        <p {...editable}>
                          Dentro del WIBIndex Somatic™, la comparación permite
                          explorar si después de la intervención aparece un
                          patrón más organizado, continuo, equilibrado o
                          coherente respecto de la medición inicial.
                        </p>
                        <p {...editable}>
                          No interpretar una imagen aislada como diagnóstico.
                        </p>
                        <blockquote {...editable}>
                          “Lo relevante es el contraste entre ambos momentos y
                          su relación con la experiencia que la propia persona
                          reconoce en su cuerpo.”
                        </blockquote>
                      </div>

                      <div className="somatic-layer-diagram" aria-label="Tres capas de lectura">
                        <div>
                          <strong>TECNOLOGÍA</strong>
                          <span>La tecnología aporta la imagen.</span>
                        </div>
                        <b>+</b>
                        <div>
                          <strong>WIBINDEX SOMATIC™</strong>
                          <span>El índice aporta el marco comparativo.</span>
                        </div>
                        <b>+</b>
                        <div>
                          <strong>SENSOPERCEPCIÓN</strong>
                          <span>La persona aporta el reconocimiento de su experiencia.</span>
                        </div>
                      </div>
                      <p className="somatic-feature-close" {...editable}>
                        “La integración de estas tres capas convierte la
                        medición en una herramienta de aprendizaje somático.”
                      </p>
                    </>
                  ) : null}
                </div>
              </details>
            ))}
          </div>

          <div className="somatic-principle-box">
            <div>
              <div className="somatic-section-kicker">Principio central</div>
              <h3 {...editable}>El índice no busca maximizar variables</h3>
              <p {...editable}>
                El objetivo no es conseguir menos estrés + más energía + más
                activación. El objetivo es observar si las diferentes variables
                se desplazan hacia rangos de mayor regulación, equilibrio y
                organización funcional.
              </p>
            </div>
            <div className="somatic-score-equation" aria-label="Regla de puntaje">
              <span>MAYOR PUNTAJE</span>
              <b>=</b>
              <span>MAYOR PROXIMIDAD AL RANGO FUNCIONAL DEFINIDO PARA ESA DIMENSIÓN</span>
            </div>
          </div>

          <div className="somatic-layer-box">
            <div className="somatic-section-kicker">Capa somática</div>
            <h3 {...editable}>
              Lo que la persona reconoce en sí misma
            </h3>
            <p {...editable}>
              La medición se complementa con una breve instancia de
              autorreconocimiento o sensopercepción.
            </p>
            <div className="somatic-experience-compare">
              <div>
                <strong>ANTES</strong>
                <span {...editable}>
                  “Llego con la mente acelerada y me cuesta registrar el apoyo
                  del cuerpo.”
                </span>
              </div>
              <div>
                <strong>DESPUÉS</strong>
                <span {...editable}>
                  “Siento más presencia, respiración y contacto con el suelo.”
                </span>
              </div>
            </div>
            <p {...editable}>
              Esta información subjetiva no necesita ponderar el score
              fisiológico para tener valor. Su función es generar el puente
              entre lo que la tecnología observa, lo que el cuerpo experimenta
              y lo que la persona logra reconocer.
            </p>
            <blockquote {...editable}>
              “El WIBIndex Somatic™ no busca decirle a una persona cómo está.
              Busca ayudarla a aprender a reconocer cómo responde su propio
              organismo.”
            </blockquote>
          </div>

          <div className="somatic-section-close">
            <h3 {...editable}>Una lectura antes–después</h3>
            <p {...editable}>
              En Biodanza, Yoga, Tai Chi, Qi Gong, Eutonía, danza y otras
              prácticas corporales, la comparación permite formular una pregunta
              muy concreta:
            </p>
            <blockquote {...editable}>
              “¿Cómo llegó mi organismo a esta experiencia y cómo salió de
              ella?”
            </blockquote>
            <p {...editable}>
              “El WIBIndex Somatic™ transforma esa comparación en una
              herramienta de Inteligencia Somática, haciendo visible parte de
              aquello que la práctica permitió sentir.”
            </p>
          </div>
        </div>
      </section>

      <section className="somatic-section somatic-section-soft" id="protocolo">
        <div className="somatic-shell">
          <div className="somatic-section-kicker">04 · Implementación</div>
          <h2 {...editable}>
            Un protocolo simple, no invasivo y compatible con la práctica
          </h2>
          <p className="somatic-section-intro" {...editable}>
            La medición se integra a la actividad sin modificar su propósito
            vivencial ni la autonomía del facilitador.
          </p>
          <div className="somatic-protocol">
            {steps.map(([title, body], index) => (
              <div className="somatic-step" key={title}>
                <div className="somatic-step-number">{index + 1}</div>
                <h3 {...editable}>{title}</h3>
                <p {...editable}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dashboard" className="somatic-section">
        <div className="somatic-shell">
          <div className="somatic-section-kicker">05 · Resultado visual</div>
          <h2 {...editable}>Inteligencia Somática medible, presentada como dashboard profesional</h2>
          <p className="somatic-section-intro" {...editable}>
            El resultado visual permite cuantificar regulación del sistema nervioso,
            registrar la evolución de cada cliente, mostrar resultados de forma
            clara y sostener un lenguaje común entre distintas disciplinas.
          </p>
          <div className="somatic-pdf-stage" aria-label="Dashboard WIBIndex Somatic embebido">
            <iframe
              src={pdfUrl}
              title="Ejemplo de dashboard WIBIndex Somatic"
              loading="lazy"
            />
          </div>
          <div className="somatic-dashboard">
            <div className="somatic-dash-card">
              <div className="somatic-score-row">
                <div>
                  <div className="somatic-section-kicker">WIBIndex Somatic™</div>
                  <h3 {...editable}>Respuesta inmediata</h3>
                  <p {...editable}>Ejemplo demostrativo antes-después.</p>
                </div>
                <div className="somatic-score-ring" aria-label="Puntaje 79">
                  <strong>79</strong>
                </div>
              </div>
              <div className="somatic-bars">
                {bars.map(([label, before, after]) => (
                  <div className="somatic-bar-row" key={label}>
                    <span className="somatic-bar-label">{label}</span>
                    <span className="somatic-bar-track">
                      <i
                        className="somatic-bar-before"
                        style={{ width: before }}
                        aria-hidden="true"
                      />
                      <i
                        className="somatic-bar-after"
                        style={{ width: after }}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="somatic-dash-card somatic-dashboard-copy">
              <h3 {...editable}>¿Qué recibe la institución?</h3>
              <ul>
                <li {...editable}>Reporte individual comparativo antes-después.</li>
                <li {...editable}>
                  Dashboard institucional con datos agregados y anonimizados.
                </li>
                <li {...editable}>Narrativa breve para devolución pedagógica.</li>
                <li {...editable}>
                  Base inicial para pilotos, investigación y mejora continua.
                </li>
                <li {...editable}>
                  Un lenguaje común para distintas disciplinas bajo un mismo
                  marco.
                </li>
              </ul>
              <div className="somatic-note" {...editable}>
                La lectura combina profundidad metodológica y lenguaje sencillo,
                sin transformar la experiencia corporal en una interpretación
                clínica.
              </div>
              <div className="somatic-actions">
                <a className="somatic-btn somatic-btn-primary" href={pdfUrl} download>
                  Descargar ejemplo de entregable PDF
                </a>
                <a
                  className="somatic-btn somatic-btn-secondary"
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver PDF en una nueva pestaña
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="somatic-section somatic-section-soft" id="piloto">
        <div className="somatic-shell">
          <div className="somatic-section-kicker">06 · Propuesta institucional</div>
          <h2 {...editable}>Tres formas de comenzar</h2>
          <div className="somatic-cards-3">
            <article className="somatic-card">
              <h3 {...editable}>Jornada demostrativa</h3>
              <p {...editable}>
                Una medición antes-después en una clase o encuentro especial
                para presentar la metodología y generar primeras evidencias.
              </p>
            </article>
            <article className="somatic-card teal">
              <h3 {...editable}>Ciclo breve</h3>
              <p {...editable}>
                Tres o cuatro encuentros para observar tendencias, comparar
                disciplinas o registrar evolución en un pequeño grupo piloto.
              </p>
            </article>
            <article className="somatic-card mixed">
              <h3 {...editable}>Programa institucional</h3>
              <p {...editable}>
                Integración a un área académica, formativa o de bienestar para
                construir una línea propia de investigación y seguimiento.
              </p>
            </article>
          </div>
          <div className="somatic-note" {...editable}>
            Qué mide la tecnología GDV de Biowell Inc. explicada &gt;{" "}
            <a
              href="https://bio-well.es/que-mide-el-metodo-gdv"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://bio-well.es/que-mide-el-metodo-gdv
            </a>
          </div>
        </div>
      </section>

      <section className="somatic-cta" id="contacto">
        <div className="somatic-shell">
          <div className="somatic-section-kicker">Próximo paso</div>
          <h2 {...editable}>
            Co-diseñar un piloto que haga visible el valor de la Inteligencia
            Somática
          </h2>
          <p {...editable}>
            La propuesta puede adaptarse a la identidad, objetivos pedagógicos y
            disciplinas de cada institución.
          </p>
          <div className="somatic-actions">
            <a
              className="somatic-btn somatic-btn-primary"
              href="mailto:hola@bienestarvibracional.com"
            >
              hola@bienestarvibracional.com
            </a>
          </div>
        </div>
      </section>

      <footer className="somatic-footer">
        <div className="somatic-shell somatic-footer-inner">
          <Image
            src="/images/logo-bienestar-vibracional.png"
            width={1820}
            height={956}
            alt="Bienestar Vibracional"
            unoptimized
          />
          <span {...editable}>
            Wellness Intelligence Framework · Argentina ·{" "}
            <Link href="/">Sitio principal</Link>
          </span>
        </div>
      </footer>
    </main>
  );
}
