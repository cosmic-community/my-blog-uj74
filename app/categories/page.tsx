import Link from 'next/link'
import { getAllCategories, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'Categories | My Blog',
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Categories</h1>
      {categories.length === 0 ? (
        <p className="text-gray-500">No categories found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const name = getMetafieldValue(category.metadata?.name) || category.title
            const description = getMetafieldValue(category.metadata?.description)
            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-2">{name}</h2>
                {description && <p className="text-sm text-gray-500">{description}</p>}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}