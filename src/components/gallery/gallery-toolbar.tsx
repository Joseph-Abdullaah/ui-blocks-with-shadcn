import { SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { BlockCategory } from "@/types/block"

type GalleryToolbarProps = {
  query: string
  selectedCategory: "All" | BlockCategory
  categories: BlockCategory[]
  onQueryChange: (value: string) => void
  onCategoryChange: (category: "All" | BlockCategory) => void
}

export function GalleryToolbar({
  query,
  selectedCategory,
  categories,
  onQueryChange,
  onCategoryChange,
}: GalleryToolbarProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <SearchIcon className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search blocks..."
          className="pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === "All" ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange("All")}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
        <Badge variant="secondary" className="ml-auto">
          {selectedCategory === "All" ? "All categories" : selectedCategory}
        </Badge>
      </div>
    </div>
  )
}
