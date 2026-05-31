import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryBadgeProps {
  category: Category
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const name = getMetafieldValue(category.metadata?.name) || category.title

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="inline-block bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full hover:bg-brand/20 transition-colors"
    >
      {name}
    </Link>
  )
}