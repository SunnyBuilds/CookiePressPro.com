import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  image: string
  rating: number
  category: string
  excerpt: string
  slug: string
  compact?: boolean
}

export function ProductCard({ title, image, rating, category, excerpt, slug, compact = false }: ProductCardProps) {
  if (compact) {
    return (
      <div className="bg-card border border-border p-4 h-fit">
        <div className="aspect-square relative mb-3">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{category}</span>
          <h3 className="font-serif font-bold text-lg leading-tight text-foreground">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">Our Rating:</span>
            <span className="text-lg font-bold text-foreground">{rating}/10</span>
          </div>
          <Link
            href={`#price`}
            className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 font-semibold hover:bg-primary/90 transition-colors"
          >
            Check Current Price
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border hover:border-muted-foreground transition-colors">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-48 aspect-square relative">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain p-4" />
        </div>
        <div className="flex-1 p-6">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{category}</span>
          <h3 className="font-serif font-bold text-xl mt-2 mb-3 text-foreground">{title}</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-foreground">Our Rating:</span>
            <span className="text-2xl font-bold text-foreground">{rating}/10</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{excerpt}</p>
          <div className="flex gap-3">
            <Link href={`/reviews/${slug}`} className="text-accent font-semibold hover:underline">
              Read Full Review
            </Link>
            <span className="text-border">|</span>
            <Link href={`#price`} className="text-primary font-semibold hover:underline">
              Check Current Price
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
