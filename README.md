# Noogym Developer

Portal developer da Noogym para documentacao, APIs, SDKs, guias, status operacional e experiencia mockada de autenticacao/dashboard.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react
- Dados mockados em `data/developer.ts`
- Deploy standalone via Docker

## Rotas

### Portal publico

- `/` - Home da documentacao
- `/apis` - Catalogo de APIs
- `/apis/members/list` - Exemplo de endpoint
- `/guides` - Guia de inicio
- `/sdks` - SDKs
- `/status` - Status da API
- `/changelog` - Changelog
- `/terms` - Termos de Uso
- `/privacy` - Politica de Privacidade
- `/contact` - Contato

### Experiencia developer

- `/login` - Login mockado
- `/register` - Criacao de conta mockada
- `/forgot-password` - Recuperacao de senha mockada
- `/dashboard` - Dashboard pos-login mockado

As rotas `/developer/login`, `/developer/register`, `/developer/forgot-password` e `/developer/dashboard` continuam existindo como base dos componentes/paginas, mas as rotas principais de navegacao sao as top-level acima.

## Desenvolvimento

Instale dependencias:

```bash
npm install
```

Rode em desenvolvimento:

```bash
npm run dev
```

Por padrao o Next usa `http://localhost:3000`. Se a porta estiver ocupada:

```bash
npm run dev -- --port 3001
```

Validacoes:

```bash
npm run lint
npm run build
```

## Docker

Build e execucao com Compose:

```bash
docker compose up --build
```

O container publica a aplicacao em:

```text
http://localhost:3000
```

O build usa `output: "standalone"` no `next.config.ts`.

## Estrutura

```text
app/
  (portal)/              Paginas publicas do portal developer
  login/                 Alias top-level para auth
  register/
  forgot-password/
  dashboard/
  developer/             Implementacao das telas developer
components/developer/
  auth/                  Componentes reutilizaveis das telas de auth
  dashboard/             Componentes reutilizaveis do dashboard
data/
  developer.ts           Conteudo mockado do portal
docs/adr/                Architecture Decision Records
```

## Decisoes arquiteturais

As decisoes ficam documentadas em `docs/adr`.

- [ADR 0001 - Experiencia developer mockada no App Router](docs/adr/0001-developer-auth-dashboard-mock.md)

## Observacoes

- Nao ha integracao com backend real ainda.
- Formularios usam handlers mockados e redirecionam para `/dashboard`.
- Links auxiliares de suporte/newsletter usam `mailto:` por enquanto.
