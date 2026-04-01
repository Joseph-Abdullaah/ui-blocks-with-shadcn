import { useMemo, useState } from "react"

import { blocks } from "@/data/blocks"
import { BlockGalleryCard } from "@/components/gallery/block-gallery-card"
import { GalleryToolbar } from "@/components/gallery/gallery-toolbar"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { BlockCategory } from "@/types/block"

export default function HomePage() {
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<"All" | BlockCategory>("All")

  const categories = useMemo(
    () => [...new Set(blocks.map((block) => block.category))],
    []
  )

  const filteredBlocks = useMemo(() => {
    return blocks.filter((block) => {
      const queryMatch =
        block.title.toLowerCase().includes(query.toLowerCase()) ||
        block.description.toLowerCase().includes(query.toLowerCase())

      const categoryMatch =
        selectedCategory === "All" ? true : block.category === selectedCategory

      return queryMatch && categoryMatch
    })
  }, [query, selectedCategory])

  return (
    <main className="min-h-svh bg-muted/20 p-4 md:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-2xl border bg-background p-5 md:p-8">
        <header className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-semibold md:text-4xl">UI Blocks</h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Browse your reusable blocks and open any one in full-screen mode.
          </p>
        </header>

        <GalleryToolbar
          query={query}
          selectedCategory={selectedCategory}
          categories={categories}
          onQueryChange={setQuery}
          onCategoryChange={setSelectedCategory}
        />

        <ScrollArea className="max-h-[70svh] rounded-lg border p-1">
          <section className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlocks.map((block) => (
              <BlockGalleryCard key={block.id} block={block} />
            ))}
          </section>
        </ScrollArea>
      </div>
    </main>
  )
}
