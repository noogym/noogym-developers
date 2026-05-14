# ADR 0001 - Experiencia developer mockada no App Router

## Status

Aceito

## Contexto

O projeto precisa oferecer telas de autenticacao e dashboard pos-login para validar a experiencia visual do Noogym Developer antes de existir uma integracao real com backend.

A stack atual ja usa Next.js App Router, TypeScript, Tailwind CSS e lucide-react. O portal publico tambem ja possui componentes de identidade visual Noogym Developer que devem ser reaproveitados.

## Decisao

Manter as telas `/login`, `/register`, `/forgot-password` e `/dashboard` como paginas do App Router com dados e handlers mockados.

Os componentes reutilizaveis ficam em:

- `components/developer/auth`
- `components/developer/dashboard`

As rotas top-level sao as rotas principais de navegacao. As paginas em `app/developer/*` permanecem como implementacao base para preservar organizacao e permitir reaproveitamento.

## Consequencias

Pontos positivos:

- Permite evoluir UI e responsividade sem bloquear em backend.
- Mantem a identidade visual e componentes isolados.
- Facilita futura substituicao dos handlers mockados por chamadas reais.

Pontos de atencao:

- Nao existe protecao real de rotas.
- Fluxos sociais, termos, suporte e newsletter ainda sao placeholders funcionais ou `mailto:`.
- Quando o backend existir, sera necessario adicionar camada de autenticacao, validacao e tratamento de erros reais.

## Alternativas consideradas

- Integrar autenticacao real agora: rejeitado porque ainda nao ha contrato de backend definido.
- Criar projeto separado para auth/dashboard: rejeitado para evitar duplicacao de identidade visual, Tailwind e navegacao.
