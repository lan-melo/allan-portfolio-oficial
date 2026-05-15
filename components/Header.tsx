"use client";

import { useState } from "react";
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

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-x">
        <div className="flex items-center justify-between py-6">
          <a href="#" className="flex items-center" aria-label="Allan Melo">
            <img src="/figma/logo.svg" alt="Allan Melo" className="h-10 w-auto" />
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-2 text-base text-ink transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#contato" className="btn-primary">
              Entrar em contato
            </a>
            <a href="#projetos" className="btn-outline">
              Ver todos projetos
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-6 w-6 text-ink" /> : <Menu className="h-6 w-6 text-ink" />}
          </button>
        </div>

        {open && (
          <div className="rounded-2xl bg-white p-4 shadow-card lg:hidden">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base text-ink hover:bg-surface"
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
        )}
      </div>
    </header>
  );
}
