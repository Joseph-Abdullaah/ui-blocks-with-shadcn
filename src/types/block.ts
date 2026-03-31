import type { ComponentType } from "react"

export type BlockCategory = "Authentication" | "Case Study"

export type UIBlock = {
  id: string
  title: string
  description: string
  category: BlockCategory
  isNew?: boolean
  notes?: string
  PreviewComponent: ComponentType
  FullComponent: ComponentType
}
