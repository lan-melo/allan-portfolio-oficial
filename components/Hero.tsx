import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 lg:min-h-[700px] lg:pt-40"
    >

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <p className="text-base font-semibold text-brand">
              Olá, tudo bem? <span aria-hidden>👋</span> Eu sou
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-[45px] lg:leading-[1.1]">
              Allan Melo
            </h1>
            <h2 className="mt-3 text-xl text-muted">
              <span>Senior </span>
              <span className="text-ink">Product Designer e Design Engineer</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Eu não desenho telas. Eu projeto decisões. Transformo fricção em
              fluxo, cliques em conversões e usuários em fãs com UX orientado a
              dados, não a achismos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contato" className="btn-primary">
                Entrar em contato
              </a>
              <a href="#projetos" className="btn-outline">
                Ver todos projetos
              </a>
            </div>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div
                className="pointer-events-none absolute right-0 top-0 z-0 h-[78%] w-[78%] rounded-full bg-brand"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 z-[1]"
                style={{
                  backgroundImage: [
                    "repeating-linear-gradient(to right, rgba(74,108,247,0.5) 0 4px, transparent 4px 10px)",
                    "repeating-linear-gradient(to right, rgba(74,108,247,0.5) 0 4px, transparent 4px 10px)",
                    "repeating-linear-gradient(to right, rgba(74,108,247,0.5) 0 4px, transparent 4px 10px)",
                    "repeating-linear-gradient(to bottom, rgba(74,108,247,0.5) 0 4px, transparent 4px 10px)",
                    "repeating-linear-gradient(to bottom, rgba(74,108,247,0.5) 0 4px, transparent 4px 10px)",
                    "repeating-linear-gradient(to bottom, rgba(74,108,247,0.5) 0 4px, transparent 4px 10px)",
                  ].join(", "),
                  backgroundSize:
                    "100% 1px, 100% 1px, 100% 1px, 1px 100%, 1px 100%, 1px 100%",
                  backgroundPosition:
                    "0 18%, 0 62%, 0 88%, 18% 0, 62% 0, 88% 0",
                  backgroundRepeat: "no-repeat",
                }}
                aria-hidden
              />
              <img
                src="/figma/allan-foto.png"
                alt="Allan Melo"
                className="relative z-10 mx-auto w-full transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]"
              />
              <div
                className="absolute bottom-3 right-3 z-20 grid h-16 w-16 place-items-center rounded-full bg-white shadow-lg ring-1 ring-black/5"
                aria-hidden
              >
                <img src="/figma/a-mark.svg" alt="" className="h-8 w-8" />
              </div>
              <div
                className="absolute -bottom-1 left-0 right-0 z-10 h-[3px] bg-brand"
                aria-hidden
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
