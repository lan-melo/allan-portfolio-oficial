"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Currículo", href: "#curriculo" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.18)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "py-3" : "py-6"
          }`}
        >
          <a
            href="#"
            className="flex items-center transition-transform duration-300 hover:scale-105"
            aria-label="Allan Melo"
          >
            <img
              src="/figma/logo.svg"
              alt="Allan Melo"
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-8" : "h-10"
              }`}
            />
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#contato" className="btn-primary !px-6 !py-2.5 text-sm">
              Entrar em contato
            </a>
            <a href="#projetos" className="btn-outline !px-6 !py-2.5 text-sm">
              Ver todos projetos
            </a>
          </div>

          <button
            type="button"
            className="rounded-md p-2 transition-colors hover:bg-surface lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? (
              <X className="h-6 w-6 text-ink" />
            ) : (
              <Menu className="h-6 w-6 text-ink" />
            )}
          </button>
        </div>

        <div
          className="h-[3px] w-full overflow-hidden bg-brand/10"
          role="progressbar"
          aria-label="Progresso de leitura"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div
            className="h-full bg-brand transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
            open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mb-4 rounded-2xl bg-white p-4 shadow-card">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base text-ink transition-colors hover:bg-surface hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-slate-100 pt-3">
                <a href="#contato" className="btn-primary w-full">
                  Entrar em contato
                </a>
                <a href="#projetos" className="btn-outline w-full">
                  Ver todos projetos
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
