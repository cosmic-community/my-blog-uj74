// app/posts/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getMetafieldValue, getTagsArray } from '@/lib/cosmic'
import CategoryBadge from '@/components/CategoryBadge'

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const content = getMetafieldValue(post.metadata?.content)
  const tags = getTagsArray(post.metadata?.tags)
  const authorName = author ? getMetafieldValue(author.metadata?.name) || author.title : ''
  const authorPhoto = author?.metadata?.profile_photo

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {category && (
        <div className="mb-4">
          <CategoryBadge category={category} />
        </div>
      )}

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

      {author && (
        <div className="flex items-center gap-3 mb-8">
          {authorPhoto ? (
            <img
              src={`${authorPhoto.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
              alt={authorName}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-xl">
              👤
            </div>
          )}
          <Link
            href={`/authors/${author.slug}`}
            className="text-sm font-medium text-gray-700 hover:text-brand transition-colors"
          >
            {authorName}
          </Link>
        </div>
      )}

      {featuredImage && (
        <img
          src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
          alt={post.title}
          width={800}
          height={450}
          className="w-full rounded-2xl object-cover mb-8"
        />
      )}

      {content && (
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-12">
        <Link href="/posts" className="text-brand font-medium hover:underline">
          ← Back to all posts
        </Link>
      </div>
    </article>
  )
}