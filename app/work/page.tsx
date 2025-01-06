"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StoryModal } from "@/components/story-modal"

export default function WorkPage() {
  const [selectedStory, setSelectedStory] = useState<(typeof transformations)[0] | null>(null)

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              OUR WORK <span className="text-yellow-400">03</span>
            </h1>
            <p className="text-xl text-gray-400">
              Discover the transformations and success stories of our dedicated members.
            </p>
          </div>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedStory(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                  <Badge className="w-fit mb-2 bg-yellow-400/10 text-yellow-400 border-yellow-400/20">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <Button 
                    variant="ghost" 
                    className="w-fit text-yellow-400 hover:text-yellow-500"
                  >
                    Read More →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedStory && (
        <StoryModal
          isOpen={!!selectedStory}
          onClose={() => setSelectedStory(null)}
          story={selectedStory}
        />
      )}
    </div>
  )
}

const transformations = [
  {
    category: "Weight Loss",
    title: "David's 12-Week Journey",
    description: "Lost 30 pounds and gained confidence through dedication and hard work.",
    image: "https://i.pinimg.com/736x/e8/90/be/e890be0dc267ae821534077eae22617b.jpg",
    fullStory: "David came to us with a goal to transform his life. After struggling with weight for years, he decided to take control of his health. Through our personalized training program and nutrition guidance, David achieved remarkable results in just 12 weeks.",
    achievements: [
      "Lost 30 pounds of body fat",
      "Reduced body fat percentage by 15%",
      "Increased strength by 40%",
      "Improved cardiovascular endurance",
      "Developed sustainable healthy habits"
    ]
  },
  {
    category: "Muscle Gain",
    title: "James's Strength Journey",
    description: "Transformed his physique and doubled his strength in 6 months.",
    image: "https://i.pinimg.com/736x/e8/82/3d/e8823d8bc9074b23041a37a55da6fd1e.jpg",
    fullStory: "James started his journey as a skinny guy looking to build muscle and strength. Through dedicated training and proper nutrition, he achieved remarkable gains in both size and strength, becoming an inspiration to others.",
    achievements: [
      "Gained 20 pounds of lean muscle",
      "Doubled all major lift numbers",
      "Improved posture and flexibility",
      "Enhanced athletic performance",
      "Achieved balanced muscle development"
    ]
  },
  {
    category: "Endurance",
    title: "Michael's Marathon Prep",
    description: "From couch to marathon finish line in 16 weeks.",
    image: "https://i.pinimg.com/736x/bc/e5/85/bce585a258d5806959558360d0053bdb.jpg",
    fullStory: "Michael had never run more than a mile when he first came to us. With determination and our specialized endurance training program, he completed his first marathon in just 16 weeks of training.",
    achievements: [
      "Completed first marathon under 4 hours",
      "Improved running economy by 25%",
      "Developed proper running form",
      "Built mental toughness",
      "Lost 15 pounds during training"
    ]
  },
  {
    category: "Lifestyle Change",
    title: "Robert's Wellness Journey",
    description: "Complete lifestyle transformation through fitness and nutrition.",
    image: "https://i.pinimg.com/736x/40/ec/cc/40ecccba17e2dbdd5b9cfb6d91d62a5e.jpg",
    fullStory: "Robert's transformation wasn't just physical - it was a complete lifestyle overhaul. Through our holistic approach to fitness and wellness, he developed sustainable habits that changed his life.",
    achievements: [
      "Established consistent workout routine",
      "Improved sleep quality",
      "Reduced stress levels",
      "Developed healthy eating habits",
      "Increased energy levels"
    ]
  },
  {
    category: "Recovery",
    title: "William's Comeback Story",
    description: "Return to fitness after injury through expert guidance.",
    image: "https://i.pinimg.com/736x/09/20/0c/09200cbb4158cda5b7d23239fb4fee3f.jpg",
    fullStory: "After a serious injury, William thought his fitness journey was over. Our specialized recovery program helped him not only recover but come back stronger than ever.",
    achievements: [
      "Full recovery from injury",
      "Rebuilt strength safely",
      "Improved mobility and flexibility",
      "Developed injury prevention strategies",
      "Returned to competitive sports"
    ]
  },
  {
    category: "Competition",
    title: "Alexander's Competition Prep",
    description: "First-time competitor's journey to the stage.",
    image: "https://i.pinimg.com/736x/31/7b/79/317b79db19d0037dc344f3e82dd17784.jpg",
    fullStory: "Alexander always dreamed of competing but didn't know where to start. Our competition prep program guided him through every step, from posing to peak week strategies.",
    achievements: [
      "Achieved stage-ready condition",
      "Mastered competition poses",
      "Placed top 3 in first show",
      "Maintained muscle mass while cutting",
      "Developed mental resilience"
    ]
  }
]

