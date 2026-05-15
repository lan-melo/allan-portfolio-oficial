import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 lg:min-h-[700px] lg:pt-40 lg:pb-0"
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

          <Reveal direction="left" delay={120} className="lg:hidden">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/figma/allan-foto.png"
                alt="Allan Melo"
                className="relative z-10 mx-auto w-full transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
        <img
          src="/figma/allan-foto.png"
          alt=""
          aria-hidden
          className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02]"
        />
      </div>
    </section>
  );
}
