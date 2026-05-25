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

# Build
npm run build

# Produção
npm start
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

O projeto está configurado para deploy na **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Licença

Todos os direitos reservados.
