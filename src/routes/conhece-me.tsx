import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar } from "lucide-react";

import marisaFotoCapaAsset from "@/assets/marisa-foto-capa.jpg.asset.json";
import { cn } from "@/lib/utils";
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

const cardStyles = [
  {
    // Quem sou: tom sálvia suave, com moldura flutuante
    container:
      "relative rounded-2xl border border-sage/20 bg-sage-soft p-7 shadow-sm transition-transform duration-500 ease-out hover:-translate-y-0.5",
    deco:
      "pointer-events-none absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-2xl border border-olive/10",
    title:
      "font-serif text-[1.2rem] font-semibold italic leading-tight text-olive-deep",
    body: "text-left text-[0.93rem] leading-[1.75] text-sage-foreground/85",
  },
  {
    // O meu percurso: olive profundo, texto claro
    container:
      "rounded-2xl bg-olive-card p-7 shadow-xl transition-transform duration-500 ease-out hover:-translate-y-0.5",
    title:
      "font-serif text-[1.2rem] font-semibold italic leading-tight text-creme-light",
    body: "text-left text-[0.93rem] leading-[1.75] text-creme-light/90",
    markerBorder: "border-creme-light/50",
    markerBg: "bg-creme-light/25",
    line: "bg-creme-light/20",
  },
  {
    // Experiência e áreas: creme quente com traço lateral
    container:
      "rounded-2xl border-l-4 border-sage-accent bg-sage-cream p-7 transition-transform duration-500 ease-out hover:-translate-y-0.5",
    title:
      "font-serif text-[1.2rem] font-semibold italic leading-tight text-olive-deep",
    body: "text-left text-[0.93rem] leading-[1.75] text-sage-foreground/85",
    markerBorder: "border-sage/40",
    markerBg: "bg-sage/25",
    line: "bg-sage/20",
  },
  {
    // A forma como trabalho: olive profundo, maior destaque
    container:
      "relative rounded-2xl bg-olive-card p-7 shadow-xl transition-transform duration-500 ease-out hover:-translate-y-0.5",
    title:
      "font-serif text-[1.25rem] font-semibold italic leading-tight text-creme-light",
    body: "text-left text-[0.94rem] leading-[1.8] text-creme-light/90",
    quote: "text-creme-light/15",
    markerBorder: "border-creme-light/50",
    markerBg: "bg-creme-light/25",
    line: "bg-creme-light/20",
  },
];

function ConheceMe() {
  const { name, title, bookingUrl, about } = profileConfig;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12 sm:py-16">
      {/* Elementos decorativos muito discretos, iguais à home */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full border border-sage/10" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full border border-sage/10" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[420px] flex-col items-center text-center">
        {/* Fotografia */}
        <div className="animate-soft-scale">
          <div className="rounded-full p-[3px] ring-1 ring-sage/20">
            <img
              src={marisaFotoCapaAsset.url}
              alt={`Fotografia de ${name}`}
              className="h-24 w-24 rounded-full border border-sage-border object-cover shadow-[0_10px_30px_-18px_var(--color-sage)]"
            />
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
        <div className="mt-7 animate-fade-in-up delay-200">
          <p className="text-center text-[0.98rem] leading-relaxed text-balance text-sage-foreground/80">
            {about.intro}
          </p>
        </div>

        {/* Secções em caixinhas com várias tonalidades */}
        <div className="mt-14 flex w-full flex-col gap-8 text-left">
          {about.sections.map((section, index) => {
            const style = cardStyles[index % cardStyles.length];
            const isEmphasis = "emphasis" in section && section.emphasis;

            return (
              <section
                key={section.title}
                aria-label={section.title}
                className={cn("animate-fade-in-up", style.container)}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {index === 0 && (
                  <span
                    aria-hidden="true"
                    className={cn("hidden sm:block", style.deco)}
                  />
                )}

                <h2 className={cn(style.title)}>{section.title}</h2>

                {"paragraphs" in section && !isEmphasis && (
                  <div className="mt-4 flex flex-col gap-3.5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className={cn(style.body)}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {"items" in section && (
                  <ul className="relative mt-4 flex flex-col gap-3">
                    {/* Linha vertical extremamente subtil entre os itens */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute bottom-[6px] left-[2.5px] top-[6px] w-px",
                        style.line,
                      )}
                    />
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "relative flex items-start gap-3 text-[0.92rem] leading-[1.75]",
                          style.body,
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "relative z-10 mt-[0.58em] h-1.5 w-1.5 shrink-0 rounded-full border",
                            style.markerBorder,
                            style.markerBg,
                          )}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {"paragraphs" in section && isEmphasis && (
                  <div className="relative mt-5 border-l-2 border-creme-light/20 py-1 pl-5">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -left-1 -top-4 font-serif text-3xl leading-none",
                        style.quote,
                      )}
                    >
                      &ldquo;
                    </span>
                    <div className="flex flex-col gap-3.5">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className={cn(style.body)}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Botões finais */}
        <nav
          aria-label="Ações"
          className="mt-14 flex w-full flex-col gap-3.5 animate-fade-in-up delay-700"
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
