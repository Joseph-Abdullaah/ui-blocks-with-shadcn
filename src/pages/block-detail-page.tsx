import { Link, useParams } from "react-router-dom"
import { CodeIcon, MoreVerticalIcon, PanelRightOpenIcon } from "lucide-react"

import { getBlockById } from "@/data/blocks"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function BlockDetailPage() {
  const { blockId } = useParams()
  const block = blockId ? getBlockById(blockId) : undefined

  if (!block) {
    return (
      <main className="flex min-h-svh items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-2xl font-semibold">Block not found</h1>
          <p className="text-muted-foreground">
            The selected block does not exist in `data/blocks.ts`.
          </p>
          <Button asChild>
            <Link to="/">Back to gallery</Link>
          </Button>
        </div>
      </main>
    )
  }

  const FullComponent = block.FullComponent

  return (
    <main className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 p-4">
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/">Back</Link>
            </Button>
            <h1 className="text-lg font-semibold md:text-xl">{block.title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <PanelRightOpenIcon data-icon="inline-start" />
                  Notes
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Block Notes</SheetTitle>
                  <SheetDescription>
                    Quick notes for this block and where to use it.
                  </SheetDescription>
                </SheetHeader>
                <p className="mt-4 text-sm text-muted-foreground">
                  {block.notes ?? "No notes added yet."}
                </p>
              </SheetContent>
            </Sheet>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon-sm" aria-label="Open block actions">
                  <MoreVerticalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <Dialog>
                    <DialogTrigger asChild>
                      <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
                        Block details
                      </DropdownMenuItem>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{block.title}</DialogTitle>
                        <DialogDescription>{block.description}</DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Separator />
      </header>

      <Tabs defaultValue="preview" className="mx-auto flex w-full max-w-7xl flex-1 flex-col p-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">
            <CodeIcon data-icon="inline-start" />
            Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-4 flex-1">
          <ScrollArea className="h-[calc(100svh-10rem)] rounded-lg border">
            <FullComponent />
          </ScrollArea>
        </TabsContent>

        <TabsContent value="code" className="mt-4">
          <div className="rounded-lg border bg-muted/20 p-4 text-sm text-muted-foreground">
            Add block code snippets here if you want to expose copy/paste source.
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
