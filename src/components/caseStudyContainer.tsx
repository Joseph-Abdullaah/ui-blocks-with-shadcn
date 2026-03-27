import CaseStudyCard from "@/components/caseStudyCard"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

const data = [
  {
    title: "Trust & Co.",
    description:
      "Fill out the form and the algorithm will offer the right team of experts",
    image: "/images/product1.png",
    tags: ["Branding", "Packaging"],
  },
  {
    title: "Urban Outfiter",
    description:
      "Fill out the form and the algorithm will offer the right team of experts",
    image: "/images/product2.png",
    tags: ["Branding", "Marketing"],
  },
  {
    title: "Tonic",
    description:
      "Fill out the form and the algorithm will offer the right team of experts",
    image: "/images/product3.png",
    tags: ["Branding", "Packaging", "Marketing"],
  },
]

function CaseStudyContainer() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-8 p-4 md:p-12">
      <div className="mb-8 w-full max-w-6xl">
        <h1 className="max-w-120 text-left text-3xl md:text-5xl">
          Leading companies have trusted us
        </h1>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <CaseStudyCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            tags={item.tags.map((tag) => tag)}
          />
        ))}
      </div>
      <Button className="self-center rounded-full px-8 py-6">
        View all cases <MoveRight />
      </Button>
    </div>
  )
}

export default CaseStudyContainer
