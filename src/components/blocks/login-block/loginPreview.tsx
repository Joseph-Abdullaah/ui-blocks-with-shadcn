import { Card, CardContent } from "@/components/ui/card"

export function LoginBlockPreview() {
  return (
    <Card className="h-full border bg-background shadow-none">
      <CardContent className="flex h-full flex-col justify-center gap-3 p-4">
        <div className="h-2 w-20 rounded-full bg-muted" />
        <div className="h-8 rounded-md border bg-muted/40" />
        <div className="h-8 rounded-md border bg-muted/40" />
        <div className="mt-2 h-8 rounded-md bg-primary/80" />
      </CardContent>
    </Card>
  )
}
