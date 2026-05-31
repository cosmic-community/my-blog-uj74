import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-4">🔍</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="inline-block bg-brand text-white font-medium px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}