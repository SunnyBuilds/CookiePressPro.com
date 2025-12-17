import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getPostBySlug, getAllPosts } from "@/lib/api"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post?.slug || "",
  }))
}

interface PageProps {
  params: {
    slug: string
  }
}

export default async function ReviewArticlePage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const { frontmatter, content } = post
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <article className="bg-white flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Reviews
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content - 2/3 width */}
            <div className="md:col-span-2">
              {frontmatter.category && (
                <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                  {frontmatter.category}
                </span>
              )}
              <h1 className="font-serif font-bold text-4xl mt-3 mb-4 leading-tight text-balance">
                {frontmatter.title || "Untitled Post"}
              </h1>
              {frontmatter.date && (
                <p className="text-gray-600 mb-8">
                  Published {new Date(frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {frontmatter.author && ` · By ${frontmatter.author}`}
                  {frontmatter.readTime && ` · ${frontmatter.readTime} min read`}
                </p>
              )}

              {/* Description */}
              {frontmatter.description && (
                <p className="text-gray-700 mb-8 leading-relaxed">{frontmatter.description}</p>
              )}

              {/* Hero Image */}
              {frontmatter.image && (
                <div className="relative aspect-video mb-8 border border-gray-200">
                  <Image
                    src={frontmatter.image}
                    alt={frontmatter.title || "Post image"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose max-w-none">
                <MDXRemote source={content} />
              </div>
            </div>

            {/* Sidebar - 1/3 width, sticky */}
            <aside className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                {frontmatter.productCard && (
                  <ProductCard
                    title={frontmatter.productCard.title || frontmatter.title}
                    image={frontmatter.productCard.image || frontmatter.image || ""}
                    rating={frontmatter.productCard.rating}
                    category={frontmatter.productCard.category || frontmatter.category || ""}
                    excerpt={frontmatter.productCard.excerpt || frontmatter.description || ""}
                    slug={params.slug}
                    compact={true}
                  />
                )}

                <div className="bg-[#F1F5F9] p-6 border border-gray-200">
                  <h3 className="font-serif font-bold text-lg mb-4">Related Reviews</h3>
                  <ul className="space-y-3 text-sm">
                    {getAllPosts()
                      .filter((p) => p?.slug !== params.slug)
                      .slice(0, 3)
                      .map((post) => (
                        <li key={post?.slug}>
                          <Link
                            href={`/reviews/${post?.slug}`}
                            className="text-[#2563EB] hover:underline leading-relaxed"
                          >
                            {post?.frontmatter.title || "Untitled"}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
