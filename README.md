# Marisa's Sanctuary

Página "link na bio" da Marisa Valido dos Santos, Psicóloga Clínica e da Saúde: substitui o Linktree no Instagram ([@marisasantos.psicologa](https://www.instagram.com/marisasantos.psicologa/)).

**Site em produção:** <https://marisa-s-sanctuary.vercel.app> (Vercel; ver «Publicação» abaixo).

## Páginas

| Rota          | O que mostra                                                                            |
| ------------- | --------------------------------------------------------------------------------------- |
| `/`           | Foto, nome, frase principal, botão **Marcar Consulta** (WhatsApp), Instagram e LinkedIn |
| `/conhece-me` | Quem sou, percurso, como posso ajudar e forma de trabalhar                              |

Todos os textos e links (WhatsApp, Instagram, LinkedIn, SEO) estão em `src/lib/profile-config.ts`. Para mudar uma frase ou um link, é só esse ficheiro.

## Stack

- TanStack Start (SSR) + React + Tailwind CSS 4, sem base de dados.
- Fotos em `src/assets/` (importadas pelo Vite). A foto em uso é `marisa-foto-retrato.jpg`.
- Alojamento: Vercel (escalão Hobby), publicado a partir deste repositório.
- Começou no [Lovable](https://lovable.dev) e deixou de depender dele. O briefing original está em `docs/briefing-original.md`.

## Desenvolvimento

```sh
bun install --frozen-lockfile
bun run dev        # http://localhost:8080
bun run lint
bunx tsc --noEmit
NITRO_PRESET=vercel bun run build
```

## Publicação (Vercel)

Cada `push` ao `main` volta a publicar sozinho; cada branch tem uma _preview_ própria.

Configuração única na Vercel: _Add New > Project_, importar este repositório. O Nitro deteta a Vercel e gera o formato certo; o _Build Command_ é `bun run build` e o _Install Command_ `bun install --frozen-lockfile`. Não há variáveis de ambiente nem segredos.
