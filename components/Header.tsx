import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <span className="text-2xl">📝</span>
            <span>My Blog</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <Link href="/posts" className="hover:text-brand transition-colors">
              Posts
            </Link>
            <Link href="/categories" className="hover:text-brand transition-colors">
              Categories
            </Link>
            <Link href="/authors" className="hover:text-brand transition-colors">
              Authors
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}