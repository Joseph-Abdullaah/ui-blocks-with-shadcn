import { CaseStudyBlockFull } from "@/components/blocks/caseStudy-block/caseStudyFull"
import { CaseStudyBlockPreview } from "@/components/blocks/caseStudy-block/caseStudyPreview"
import { LoginBlockFull } from "@/components/blocks/login-block/loginFull"
import { LoginBlockPreview } from "@/components/blocks/login-block/loginPreview"
import type { UIBlock } from "@/types/block"

export const blocks: UIBlock[] = [
  {
    id: "login-ui",
    title: "Login UI",
    description: "Two-panel login experience with social and email sign-in.",
    category: "Authentication",
    isNew: true,
    notes: "Use this block for authentication landing and sign-in entry points.",
    PreviewComponent: LoginBlockPreview,
    FullComponent: LoginBlockFull,
  },
  {
    id: "case-study-ui",
    title: "Case Study Section",
    description: "Card-based case studies with visual hierarchy and tags.",
    category: "Case Study",
    notes: "Best suited for marketing pages and portfolio highlights.",
    PreviewComponent: CaseStudyBlockPreview,
    FullComponent: CaseStudyBlockFull,
  },
]

export function getBlockById(blockId: string) {
  return blocks.find((block) => block.id === blockId)
}
