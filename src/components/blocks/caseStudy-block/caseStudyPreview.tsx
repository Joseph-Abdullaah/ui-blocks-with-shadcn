import { Card, CardContent } from "@/components/ui/card"

export function CaseStudyBlockPreview() {
  return (
    <Card className="h-full border bg-background shadow-none">
      <CardContent className="grid h-full grid-cols-3 gap-2 p-4">
        <div className="rounded-md bg-muted" />
        <div className="rounded-md bg-muted/70" />
        <div className="rounded-md bg-muted" />
      </CardContent>
    </Card>
  )
}
