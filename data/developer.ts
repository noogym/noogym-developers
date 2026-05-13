export type IconName =
  | "activity"
  | "barChart"
  | "bell"
  | "book"
  | "box"
  | "briefcase"
  | "card"
  | "check"
  | "clock"
  | "cloud"
  | "code"
  | "coffee"
  | "database"
  | "file"
  | "filter"
  | "globe"
  | "home"
  | "key"
  | "layers"
  | "lock"
  | "rocket"
  | "shield"
  | "terminal"
  | "users"
  | "webhook";

export type ApiItem = {
  name: string;
  slug: string;
  description: string;
  icon: IconName;
};

export type SdkItem = {
  name: string;
  language: string;
  description: string;
  install: string;
  icon: IconName;
  popular?: boolean;
};

export type ChangelogItem = {
  version: string;
  title: string;
  date: string;
  category: "Novo" | "Melhoria" | "Correção";
  tag: string;
  changes: string[];
};

export type StatusService = {
  name: string;
  description: string;
  uptime: string;
  status: "Operacional" | "Monitorando";
  icon: IconName;
};

export const topNav = [
  { label: "Documentação", href: "/" },
  { label: "APIs", href: "/apis" },
  { label: "SDKs", href: "/sdks" },
  { label: "Guias", href: "/guides" },
  { label: "Exemplos", href: "/#primeiros-passos" },
  { label: "Changelog", href: "/changelog" },
  { label: "Status", href: "/status" },
];

export const apis: ApiItem[] = [
  {
    name: "Academias (Gyms)",
    slug: "gyms",
    description: "Gerencie academias, unidades, horários e configurações.",
    icon: "briefcase",
  },
  {
    name: "Membros (Members)",
    slug: "members",
    description: "Cadastre, consulte e gerencie membros da academia.",
    icon: "users",
  },
  {
    name: "Planos (Plans)",
    slug: "plans",
    description: "Crie e gerencie planos, preços e modalidades.",
    icon: "file",
  },
  {
    name: "Check-ins",
    slug: "check-ins",
    description: "Registre e consulte check-ins de membros.",
    icon: "check",
  },
  {
    name: "Pagamentos",
    slug: "payments",
    description: "Processe pagamentos e consulte transações.",
    icon: "card",
  },
  {
    name: "Assinaturas",
    slug: "subscriptions",
    description: "Gerencie assinaturas, renovações e cancelamentos.",
    icon: "shield",
  },
  {
    name: "Marketplace",
    slug: "marketplace",
    description: "Consulte produtos, crie pedidos e gerencie entregas.",
    icon: "box",
  },
  {
    name: "Notificações",
    slug: "notifications",
    description: "Envie e gerencie notificações e comunicações.",
    icon: "bell",
  },
  {
    name: "Relatórios",
    slug: "reports",
    description: "Acesse relatórios e métricas da sua operação.",
    icon: "barChart",
  },
];

export const sdkItems: SdkItem[] = [
  {
    name: "JavaScript / TypeScript",
    language: "TypeScript",
    description: "SDK oficial para Node.js, front-end e aplicações full-stack.",
    install: "npm install @noogym/sdk",
    icon: "code",
    popular: true,
  },
  {
    name: "Flutter",
    language: "Dart",
    description: "Integre apps mobile com ambientes sandbox e produção.",
    install: "dart pub add noogym_sdk",
    icon: "layers",
  },
  {
    name: "Python",
    language: "Python",
    description: "Automatize integrações, relatórios e rotinas de dados.",
    install: "pip install noogym",
    icon: "terminal",
  },
  {
    name: "PHP",
    language: "PHP",
    description: "Conecte sistemas web, CRMs e backoffices em PHP.",
    install: "composer require noogym/sdk",
    icon: "globe",
  },
  {
    name: "C# (.NET)",
    language: "C#",
    description: "Cliente tipado para serviços .NET e integrações corporativas.",
    install: "dotnet add package Noogym.SDK",
    icon: "box",
  },
  {
    name: "Java",
    language: "Java",
    description: "Biblioteca para aplicações JVM com retries e logs nativos.",
    install: "implementation 'ao.noogym:sdk:2.8.0'",
    icon: "coffee",
  },
];

export const guideSteps = [
  {
    title: "Crie sua conta",
    description: "Crie uma conta de desenvolvedor no Noogym para começar.",
    icon: "users" as IconName,
  },
  {
    title: "Obtenha suas chaves",
    description: "Gere suas chaves de API para acessar nossos endpoints.",
    icon: "key" as IconName,
  },
  {
    title: "Faça sua primeira requisição",
    description: "Use nossas APIs para buscar dados e testar integrações.",
    icon: "code" as IconName,
  },
  {
    title: "Configure webhooks",
    description: "Receba eventos em tempo real da sua aplicação.",
    icon: "webhook" as IconName,
  },
  {
    title: "Vá para produção",
    description: "Teste no sandbox e leve sua integração para o ar.",
    icon: "rocket" as IconName,
  },
];

export const changelogItems: ChangelogItem[] = [
  {
    version: "v2.8.0",
    title: "Relatórios e Analytics Avançados",
    date: "22 de Maio de 2024",
    category: "Novo",
    tag: "Novos recursos",
    changes: [
      "Nova API: GET /v2/reports/analytics",
      "Filtros avançados por data, plano e unidade",
      "Exportação em CSV e XLSX",
    ],
  },
  {
    version: "v2.7.0",
    title: "Melhorias na Performance",
    date: "10 de Maio de 2024",
    category: "Melhoria",
    tag: "Melhorias",
    changes: [
      "Redução de 40% no tempo de resposta em /members",
      "Cache inteligente para planos e produtos",
      "Melhorias na paginação de resultados",
    ],
  },
  {
    version: "v2.6.1",
    title: "Correções e Estabilidade",
    date: "02 de Maio de 2024",
    category: "Correção",
    tag: "Correções",
    changes: [
      "Corrigido erro ao criar check-ins em academias com múltiplas unidades",
      "Ajuste na validação de planos recorrentes",
      "Melhor tratamento de erros em webhooks",
    ],
  },
  {
    version: "v2.6.0",
    title: "Webhooks Avançados",
    date: "24 de Abril de 2024",
    category: "Novo",
    tag: "Novos recursos",
    changes: [
      "Novos eventos para membros, pagamentos e assinaturas",
      "Assinatura HMAC nos payloads",
      "Retentativas automáticas configuráveis",
    ],
  },
];

export const statusServices: StatusService[] = [
  {
    name: "API Core",
    description: "Serviço principal da API e endpoints públicos",
    uptime: "100.00%",
    status: "Operacional",
    icon: "cloud",
  },
  {
    name: "Autenticação",
    description: "Login, OAuth, tokens e gerenciamento de chaves",
    uptime: "100.00%",
    status: "Operacional",
    icon: "lock",
  },
  {
    name: "Banco de Dados",
    description: "Armazenamento de dados e consultas",
    uptime: "99.99%",
    status: "Operacional",
    icon: "database",
  },
  {
    name: "Pagamentos",
    description: "Processamento de pagamentos e assinaturas",
    uptime: "99.98%",
    status: "Operacional",
    icon: "card",
  },
  {
    name: "Webhooks",
    description: "Entrega de eventos em tempo real",
    uptime: "99.99%",
    status: "Operacional",
    icon: "webhook",
  },
  {
    name: "Armazenamento de Arquivos",
    description: "Upload e gerenciamento de arquivos",
    uptime: "100.00%",
    status: "Operacional",
    icon: "box",
  },
];

export const endpointDoc = {
  title: "Listar Membros",
  method: "GET",
  path: "/v1/members",
  description:
    "Retorna uma lista de membros cadastrados na academia autenticada com filtros opcionais e paginação.",
  params: [
    ["page", "integer", "Página desejada.", "Não"],
    ["limit", "integer", "Quantidade de itens por página. Máx: 100", "Não"],
    ["search", "string", "Busca por nome, e-mail ou telefone.", "Não"],
    ["status", "string", "Filtra por status do membro.", "Não"],
    ["plan_id", "string", "Filtra por ID do plano.", "Não"],
    ["order_by", "string", "Ordenar por campo.", "Não"],
    ["order", "string", "Ordem da listagem.", "Não"],
  ],
};

export const memberResponse = `{
  "success": true,
  "data": {
    "members": [
      {
        "id": "mbr_8f7a2c1b",
        "name": "João da Silva",
        "email": "joao@email.com",
        "phone": "+244 900 000 000",
        "plan_id": "pln_123456",
        "status": "active",
        "created_at": "2024-05-20T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 125,
      "pages": 13
    }
  }
}`;

export const curlExample = `curl --request GET \\
  --url https://api.noogym.ao/v1/gyms \\
  --header 'Authorization: Bearer SUA_CHAVE_API' \\
  --header 'Content-Type: application/json'`;

export const tsExample = `import { Noogym } from '@noogym/sdk'

const noogym = new Noogym({
  apiKey: 'sua_api_key',
  environment: 'sandbox'
})

const gyms = await noogym.gyms.list({ page: 1, limit: 10 })
console.log(gyms.data)`;
