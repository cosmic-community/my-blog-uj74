# My Blog

![App Preview](https://imgix.cosmicjs.com/34995910-5cbf-11f1-ba46-4feeec079fc7-autopilot-photo-1526772662000-3f88f10405ff-1780211171602.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and responsive blog built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). My Blog showcases posts, authors, and categories with a clean editorial design powered by your existing Cosmic content.

## Features

- 📝 **Posts** with featured images, rich content, tags, authors, and categories
- 👤 **Author profiles** with bios and profile photos
- 🏷️ **Category pages** to browse posts by topic
- 🎨 **Modern, responsive design** with Tailwind CSS
- ⚡ **Server Components** for fast, secure data fetching
- 🔍 **SEO-friendly** dynamic routes and metadata
- 📱 Fully mobile-optimized layout

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a1bddb2ebf42ceaaf383291&clone_repository=6a1bde6eebf42ceaaf3832ba)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing `posts`, `authors`, and `categories`

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Set the following environment variables:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all posts with related authors and categories
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from three Cosmic object types:

- **posts** — `content`, `featured_image`, `tags`, `author`, `category`
- **authors** — `name`, `bio`, `profile_photo`
- **categories** — `name`, `description`

Connected objects (author, category) are resolved using the Cosmic `depth` parameter. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel**: Import the repo and set the environment variables in the dashboard.
- **Netlify**: Connect the repo and add the environment variables in site settings.

Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform's environment settings.
<!-- README_END -->