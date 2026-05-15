export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 lg:min-h-[700px] lg:pt-40"
    >
      {/* decorative blob */}
      <div
        className="pointer-events-none absolute -right-20 top-20 hidden h-[560px] w-[560px] rounded-full opacity-95 lg:block"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #4a6cf7 0%, #4a6cf7 60%, rgba(74,108,247,0) 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-10 hidden h-12 w-12 rounded-full bg-brand/30 lg:block"
        aria-hidden
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
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
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <img
              src="/figma/allan-foto.png"
              alt="Allan Melo"
              className="relative z-10 mx-auto w-full max-w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
