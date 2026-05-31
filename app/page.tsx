import Link from 'next/link'
import { getAllPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function HomePage() {
  const posts = await getAllPosts()
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stories, ideas, and insights from our writers.
        </p>
      </section>

      {featured ? (
        <section className="mb-12">
          <Link
            href={`/posts/${featured.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow md:flex"
          >
            {featured.metadata?.featured_image ? (
              <img
                src={`${featured.metadata.featured_image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                alt={featured.title}
                width={600}
                height={400}
                className="w-full md:w-1/2 h-64 md:h-auto object-cover"
              />
            ) : (
              <div className="w-full md:w-1/2 h-64 bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center text-6xl">
                📝
              </div>
            )}
            <div className="p-8 flex flex-col justify-center md:w-1/2">
              {featured.metadata?.category && (
                <span className="text-xs font-semibold text-brand uppercase tracking-wide mb-3">
                  {getMetafieldValue(featured.metadata.category.metadata?.name) ||
                    featured.metadata.category.title}
                </span>
              )}
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-brand transition-colors mb-3">
                {featured.title}
              </h2>
              {featured.metadata?.author && (
                <p className="text-sm text-gray-500">
                  By {getMetafieldValue(featured.metadata.author.metadata?.name) ||
                    featured.metadata.author.title}
                </p>
              )}
            </div>
          </Link>
        </section>
      ) : (
        <p className="text-center text-gray-500">No posts found.</p>
      )}

      {rest.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}