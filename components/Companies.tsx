const companies = ["XP Educação", "Hazo", "Tecnologia Única", "CI&T", "Amazon", "Unifast"];

export function Companies() {
  return (
    <section className="bg-surface py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Experiência comprovada</p>
          <h2 className="mt-3 h-section">Empresas que trabalho(ei)</h2>
          <p className="mt-4 text-base text-muted">
            Experiência comprovada em diversos projetos para as empresas abaixo:
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-70">
          {companies.map((name) => (
            <div
              key={name}
              className="text-xl font-semibold tracking-tight text-ink/70"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
