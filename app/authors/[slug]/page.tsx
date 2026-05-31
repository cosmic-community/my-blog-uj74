// app/authors/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const photo = author.metadata?.profile_photo

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col items-center text-center mb-12">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
            alt={name}
            width={120}
            height={120}
            className="w-28 h-28 rounded-full object-cover mb-4"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-brand/10 flex items-center justify-center text-4xl mb-4">
            👤
          </div>
        )}
        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
        {bio && <p className="text-gray-600 max-w-2xl mt-3">{bio}</p>}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Posts by {name}</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts by this author yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div className="mt-12">
        <Link href="/authors" className="text-brand font-medium hover:underline">
          ← Back to all authors
        </Link>
      </div>
    </div>
  )
}