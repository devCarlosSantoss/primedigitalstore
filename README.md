<div align="center">
  <img src="./public/images/logo.svg" alt="PrimeDigitalStore" height="60" />
  <h1 align="center">PrimeDigitalStore</h1>
  <p align="center">Plataforma de produtos digitais premium com landing pages individuais para cada produto.</p>
  <p align="center">
    <strong>Next.js 14</strong> ·
    <strong>TypeScript</strong> ·
    <strong>Tailwind CSS</strong> ·
    <strong>i18n</strong>
  </p>
</div>

## Sobre

**PrimeDigitalStore** é uma plataforma de vendas de produtos digitais construída com Next.js 14. Cada produto possui sua própria landing page de venda com header, conteúdo detalhado, bônus, call-to-action, FAQs e produtos relacionados.

### Funcionalidades

- Landing pages individuais para cada produto digital
- Suporte bilíngue (Português / Inglês) via contexto React
- Página inicial com seções de categorias, produtos em destaque, mais vendidos, benefícios, depoimentos, FAQ e newsletter
- Design responsivo com Tailwind CSS
- Roteamento dinâmico para produtos via `[slug]`
- Geração de páginas estáticas para todos os produtos
- SEO com Open Graph e meta tags

## Stack

| Tecnologia | Versão  |
|-----------|---------|
| Next.js   | 14.x    |
| React     | 18.x    |
| TypeScript| 5.x     |
| Tailwind CSS | 3.4.x |
| lucide-react | 0.400.x |

## Estrutura

```
src/
├── app/
│   ├── layout.tsx              # Layout raiz (Header, Footer, LanguageProvider)
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # Página 404
│   └── produtos/[slug]/page.tsx # Landing page do produto
├── components/
│   ├── layout/                 # Header, Footer
│   ├── sections/               # Seções da home (Hero, Categories, FAQ, etc.)
│   ├── product/                # Componentes da página de produto
│   └── ui/                     # Componentes reutilizáveis (Icon, ProductCard)
├── data/
│   └── products.ts             # Dados de categorias, produtos, benefícios e FAQs
├── i18n/
│   ├── LanguageProvider.tsx     # Contexto de internacionalização
│   ├── types.ts                # Tipos do dicionário
│   └── dictionaries/           # Traduções pt.ts e en.ts
├── lib/
│   └── utils.ts                # Utilitários (cn, formatPrice, formatSalesCount)
└── types/
    └── index.ts                # Tipos do projeto
```

## Começando

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build estático (gera a pasta out/)
npm run build

# Testar o build
npx serve out
```

## Produtos

A plataforma conta com **8 produtos** distribuídos em **8 categorias**:

| Produto | Categoria | Preço |
|---------|-----------|-------|
| Marketing Digital 360 | E-books | R$ 49,90 |
| Desenvolvimento Fullstack Pro | Cursos | R$ 197 |
| Notion Pro Manager | Templates | R$ 29,90 |
| Planilha Financeira Inteligente | Planilhas | R$ 39,90 |
| Mentoria de Carreira em Tech | Mentorias | R$ 497 |
| Pack Premium de Prompts para IA | Prompts | R$ 19,90 |
| Sistema de Design UI Pro | Design | R$ 79,90 |
| Tráfego Pago Masterclass | Cursos | R$ 147 |

## Deploy

O projeto usa **export estático** (`output: 'export'` e `trailingSlash: true` no `next.config.js`) e é hospedado no **Cloudflare Pages**, que serve a pasta `out/` gerada pelo build. O URL do projeto é `primedigitalstore.pages.dev`, independente do subdomínio da conta.

O arquivo `public/_headers` define cache imutável para `/_next/static/*` e headers de segurança; o Next.js o copia para `out/` durante o build, e o Pages aplica essas regras. O `404.html` gerado pelo Next.js é servido automaticamente nas rotas inexistentes.

### Configuração em `dash.cloudflare.com`

Workers & Pages → *Create application* → *Pages* → *Connect to Git*, no repositório `devCarlosSantoss/primedigitalstore`:

| Campo                    | Valor            |
|--------------------------|------------------|
| Project name             | `primedigitalstore` |
| Production branch        | `main`           |
| Framework preset         | `None`           |
| Build command            | `npm run build`  |
| Build output directory   | `out`            |
| Root directory           | `/`              |
| Node version             | `NODE_VERSION=22`|

Usar o preset **Next.js** é incorto aqui: ele espera SSR e aponta o output para `.next`. O preset precisa ser `None`, porque o site é um export estático.

### Deploy manual

```bash
npm run build        # gera out/
npm run deploy:pages # wrangler pages deploy out
npm run preview      # sobe o wrangler dev em http://localhost:8787
```

Como o export é estático, recursos que dependem de servidor (API routes, ISR, Server Actions) exigem revisar o `next.config.js`. O `npm start` deixa de se aplicar: para testar localmente, sirva a pasta `out/`.

### Alternativa: Cloudflare Workers

O `wrangler.jsonc` mantém uma configuração de *Static Assets* equivalente, caso o projeto volte a rodar como Worker (`npm run deploy`). Ela gera o URL `<worker>.<subdomínio-da-conta>.workers.dev`, que carrega o nome da conta.

## Licença

Todos os direitos reservados.
