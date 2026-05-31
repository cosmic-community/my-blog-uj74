// app/categories/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
        {description && <p className="text-gray-600 max-w-2xl">{description}</p>}
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts in this category yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div className="mt-12">
        <Link href="/categories" className="text-brand font-medium hover:underline">
          ← Back to all categories
        </Link>
      </div>
    </div>
  )
}