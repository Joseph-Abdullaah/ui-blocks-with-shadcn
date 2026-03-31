import { Link } from "react-router-dom"

import type { UIBlock } from "@/types/block"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type BlockGalleryCardProps = {
  block: UIBlock
}

export function BlockGalleryCard({ block }: BlockGalleryCardProps) {
  const PreviewComponent = block.PreviewComponent

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary">{block.category}</Badge>
          {block.isNew ? <Badge>New</Badge> : null}
        </div>
        <CardTitle>{block.title}</CardTitle>
        <CardDescription>{block.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-lg border bg-muted/30 p-2">
          <PreviewComponent />
        </AspectRatio>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/blocks/${block.id}`}>Open</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
