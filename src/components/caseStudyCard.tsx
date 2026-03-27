import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

type cardProps = {
  image: string
  title: string
  description: string
  tags: string[]
}

function CaseStudyCard({ image, title, description, tags }: cardProps) {
  return (
    <Card className="border-none bg-transparent p-0 shadow-none ring-0">
      {/* Image Section */}
      <div className="group relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Arrow Button */}
        <Button
          size="icon"
          className="absolute right-3 bottom-3 rounded-full bg-white/80 p-6 backdrop-blur hover:bg-white"
        >
          <ArrowUpRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Content Section */}
      <CardContent className="px-1 pt-4">
        {/* Title */}
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Description */}
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="rounded-full text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default CaseStudyCard
