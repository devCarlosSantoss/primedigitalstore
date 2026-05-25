import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-50">
      <div className="text-center px-4">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-dark-900 mb-2">
          Página não encontrada
        </h1>
        <p className="text-dark-500 mb-8 max-w-md mx-auto">
          A página que você está procurando pode ter sido removida ou está temporariamente indisponível.
        </p>
        <Link href="/" className="btn-primary">
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
