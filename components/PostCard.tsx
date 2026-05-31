import Link from 'next/link'
import type { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const authorName = author ? getMetafieldValue(author.metadata?.name) || author.title : ''
  const categoryName = category ? getMetafieldValue(category.metadata?.name) || category.title : ''

  return (
    <article className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
      <Link href={`/posts/${post.slug}`} className="block">
        {featuredImage ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=480&fit=crop&auto=format,compress`}
            alt={post.title}
            width={400}
            height={240}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center text-4xl">
            📝
          </div>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        {categoryName && (
          <span className="text-xs font-semibold text-brand uppercase tracking-wide mb-2">
            {categoryName}
          </span>
        )}
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          <Link href={`/posts/${post.slug}`} className="hover:text-brand transition-colors">
            {post.title}
          </Link>
        </h3>
        {authorName && (
          <p className="text-sm text-gray-500 mt-auto pt-2">By {authorName}</p>
        )}
      </div>
    </article>
  )
}