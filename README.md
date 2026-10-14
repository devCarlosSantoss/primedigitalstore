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

O projeto usa **export estático** (`output: 'export'` e `trailingSlash: true` no `next.config.js`) e é hospedado no **Cloudflare Workers** via *Static Assets*: o Worker serve a pasta `out/` gerada pelo build, sem script de servidor. O `wrangler.jsonc` não define `main`, ou seja, é um Worker só de assets.

A Cloudflare unificou o Pages dentro do Workers, então **não existe mais `*.pages.dev`** para projetos novos — `wrangler pages deploy` hoje apenas faz um deploy no Workers. O URL no plano gratuito é `primedigitalstore.<subdomínio-da-conta>.workers.dev`. Para um endereço próprio, use um domínio em *Settings → Domains & Routes*.

O `wrangler.jsonc` usa `not_found_handling: "404-page"` para servir o `404.html` do Next.js, e `html_handling: "auto-trailing-slash"`, que redireciona `/produtos/slug` para `/produtos/slug/` — o mesmo comportamento do `trailingSlash: true`.

O arquivo `public/_headers` define cache imutável para `/_next/static/*` e headers de segurança; o Next.js o copia para `out/` durante o build, e o Workers aplica essas regras.

### Configuração em `dash.cloudflare.com`

Workers & Pages → *Create* → *Deploy to Workers* → conectar o repositório `devCarlosSantoss/primedigitalstore`:

| Campo                  | Valor                 |
|------------------------|-----------------------|
| Build command          | `npm run build`       |
| Deploy command         | `npx wrangler deploy` |
| Root directory         | `/`                   |
| Build caching          | `out` e `.next`       |

Variáveis de ambiente: `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID`.

### Deploy manual

```bash
npm run build     # gera out/
npm run deploy    # wrangler deploy
npm run preview   # sobe o wrangler dev em http://localhost:8787
```

Como o export é estático, recursos que dependem de servidor (API routes, ISR, Server Actions) exigem revisar o `next.config.js`. O `npm start` deixa de se aplicar: para testar localmente, sirva a pasta `out/`.

## Licença

Todos os direitos reservados.
