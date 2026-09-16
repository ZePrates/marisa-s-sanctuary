import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowLeft } from "lucide-react";

import { profileConfig } from "@/lib/profile-config";

export const Route = createFileRoute("/conhece-me")({
  head: () => ({
    meta: [
      { title: profileConfig.about.seo.title },
      {
        name: "description",
        content: profileConfig.about.seo.description,
      },
      {
        property: "og:title",
        content: profileConfig.about.seo.title,
      },
      {
        property: "og:description",
        content: profileConfig.about.seo.description,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/conhece-me" },
      { property: "og:locale", content: "pt_PT" },
      { name: "twitter:title", content: profileConfig.about.seo.title },
      {
        name: "twitter:description",
        content: profileConfig.about.seo.description,
      },
    ],
    links: [{ rel: "canonical", href: "/conhece-me" }],
  }),
  component: ConheceMe,
});

function ConheceMe() {
  const { initials, name, title, bookingUrl, about } = profileConfig;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-10 sm:py-12">
      {/* Elementos decorativos muito discretos, iguais à home */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full border border-sage/10" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full border border-sage/10" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[420px] flex-col items-center text-center">
        {/* Fotografia / placeholder */}
        <div className="animate-soft-scale">
          <div className="rounded-full p-[3px] ring-1 ring-sage/20">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-sage-border bg-creme-light shadow-[0_10px_30px_-18px_var(--color-sage)]">
              <span className="font-serif text-2xl font-medium tracking-[0.08em] text-sage-dark">
                {initials}
              </span>
            </div>
          </div>
        </div>

        {/* Identidade */}
        <div className="mt-6 animate-fade-in-up delay-100">
          <h1 className="font-serif text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-sage-dark sm:text-[1.9rem]">
            {name}
          </h1>

          <p className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-sage-foreground/70">
            {title}
          </p>
        </div>

        {/* Separador editorial, igual ao da home */}
        <div
          aria-hidden="true"
          className="mt-7 flex animate-fade-in-up items-center gap-3 delay-200"
        >
          <span className="h-px w-9 bg-sage/30" />
          <span className="h-1 w-1 rounded-full bg-sage/50" />
          <span className="h-px w-9 bg-sage/30" />
        </div>

        {/* Frase introdutória */}
        <div className="mt-6 animate-fade-in-up delay-200">
          <p className="text-justify text-[0.98rem] leading-relaxed text-balance text-sage-foreground/80">
            {about.intro}
          </p>
        </div>

        {/* Blocos de conteúdo */}
        <div className="mt-9 flex w-full flex-col gap-5 text-left">
          {about.sections.map((section, index) => (
            <section
              key={section.title}
              className={`animate-fade-in-up rounded-2xl p-6 ${
                "emphasis" in section && section.emphasis
                  ? "border border-olive/20 bg-olive-muted/40"
                  : "border border-sage-border/60 bg-creme-light/60"
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <h2 className="font-serif text-[1.15rem] font-semibold text-olive-deep">
                {section.title}
              </h2>

              {"paragraphs" in section && (
                <div className="mt-3 flex flex-col gap-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-justify text-[0.92rem] leading-relaxed text-sage-foreground/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {"items" in section && (
                <ul className="mt-3 flex flex-col gap-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-justify text-[0.92rem] leading-relaxed text-sage-foreground/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage/60"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Botões finais */}
        <nav
          aria-label="Ações"
          className="mt-9 flex w-full flex-col gap-3.5 animate-fade-in-up delay-700"
        >
          <a
            href={bookingUrl}
            className="group flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-2xl bg-olive px-6 py-4 text-center text-[0.98rem] font-semibold tracking-[0.01em] text-creme-light shadow-[0_8px_22px_-12px_var(--color-olive)] ring-1 ring-inset ring-creme-light/15 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-olive-deep hover:shadow-[0_12px_28px_-12px_var(--color-olive)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
          >
            <Calendar
              aria-hidden="true"
              className="h-[1.05em] w-[1.05em] shrink-0 opacity-80 transition-transform duration-300 group-hover:scale-105"
              strokeWidth={1.75}
            />
            <span>Marcar Consulta</span>
          </a>

          <Link
            to="/"
            className="group flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-2xl border border-olive/25 bg-olive-muted/60 px-6 py-4 text-center text-[0.96rem] font-medium tracking-[0.01em] text-olive-deep transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-olive/40 hover:bg-olive-muted hover:shadow-[0_8px_20px_-14px_var(--color-olive)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-[1em] w-[1em] shrink-0 opacity-60 transition-transform duration-300 group-hover:-translate-x-0.5"
              strokeWidth={1.75}
            />
            <span>Voltar à página inicial</span>
          </Link>
        </nav>
      </div>
    </main>
  );
}
