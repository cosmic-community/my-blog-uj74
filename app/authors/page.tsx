import { getAllAuthors } from '@/lib/cosmic'
import AuthorCard from '@/components/AuthorCard'

export const metadata = {
  title: 'Authors | My Blog',
}

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Authors</h1>
      {authors.length === 0 ? (
        <p className="text-gray-500">No authors found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      )}
    </div>
  )
}