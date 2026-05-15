export function CTA() {
  return (
    <section id="contato" className="py-12">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-20 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 100%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[1.2]">
              Quer trabalhar junto comigo e criar soluções incríveis?
            </h2>
            <div className="mt-10 flex justify-center">
              <a
                href="mailto:allansmelo97@gmail.com"
                className="inline-flex items-center justify-center rounded-xl border border-brand bg-white px-9 py-3 text-base font-bold text-brand transition-colors hover:bg-slate-50"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
