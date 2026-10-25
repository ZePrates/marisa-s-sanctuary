# Marisa's Sanctuary — instruções para o Claude

Página "link na bio" da Marisa Valido dos Santos, psicóloga (TanStack Start com SSR, React, Tailwind 4, sem base de dados). Responder sempre em **português europeu**, de forma direta, e explicar o que se alterou em cada passo.

Visão geral e estrutura: `README.md`.

## Fluxo de trabalho

O Lovable deixou de fazer parte do fluxo: o código edita-se aqui, o GitHub guarda-o e a Vercel publica-o.

1. Cada alteração numa branch própria, a partir do `origin/main` atualizado. Nunca commit direto no `main`.
2. Antes de **cada** push, correr e ver passar:
   ```sh
   bun run lint
   bunx tsc --noEmit
   ```
   Se mexer em `vite.config.ts`, dependências ou `bun.lock`, correr também `NITRO_PRESET=vercel bun run build`.
3. Push da branch → a Vercel cria uma _preview_ (`marisa-s-sanctuary-git-<branch>-zeduarte10-5394.vercel.app`, só visível com sessão na Vercel) e a CI do GitHub corre os mesmos checks.
4. Merge no `main` (só quando o utilizador pedir) → a Vercel publica em produção: `https://marisa-s-sanctuary.vercel.app`.

Projeto Vercel `marisa-s-sanctuary` (conta `zeduarte10-5394`), funções em Dublin (`dub1`).

Instalar dependências com `bun install --frozen-lockfile`; o `bun.lock` aponta para o registo público do npm.

## Conteúdo

- Textos, links e SEO: só em `src/lib/profile-config.ts`.
- Fotos: ficheiros em `src/assets/`, importados no código (`import foto from "@/assets/….jpg"`). Não voltar a usar `*.asset.json` (eram alojados pelo Lovable).
- Identidade visual: tokens em `src/styles.css` (creme, verde-sálvia, oliva; Cormorant Garamond + Karla). Manter o tom calmo e editorial.

## Regras

- Pedir confirmação explícita antes de apagar ficheiros fora do âmbito, `force push` ou reescrever histórico.
- Não fazer merge no `main` nem mexer nele sem pedido.
- O link do site está na bio do Instagram da Marisa: mudar o domínio implica atualizar a bio.
