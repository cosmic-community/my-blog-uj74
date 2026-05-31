import Link from 'next/link'
import type { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const photo = author.metadata?.profile_photo

  return (
    <Link
      href={`/authors/${author.slug}`}
      className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
    >
      {photo ? (
        <img
          src={`${photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
          alt={name}
          width={100}
          height={100}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-brand/10 flex items-center justify-center text-3xl mb-4">
          👤
        </div>
      )}
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      {bio && <p className="text-sm text-gray-500 mt-2 line-clamp-3">{bio}</p>}
    </Link>
  )
}