import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Target, Flame, Trophy, ArrowRight, Zap } from 'lucide-react'

export default function PowerResetPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              POWER <span className="text-yellow-400">RESET</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Reset your mind and body with our transformative program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Start Your Reset
              </Button>
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-12 bg-black/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-black border-yellow-400/20 p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-yellow-400/10 mb-4">
                    <feature.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Program Phases
          </h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <div className="inline-block rounded-full px-3 py-1 text-sm bg-yellow-400/10 text-yellow-400">
                    Phase {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  <p className="text-gray-400">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <ArrowRight className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  {phase.title === "Foundation Reset" && (
                    <div className="rounded-lg overflow-hidden bg-black/50 h-[600px]">
                      <img
                        src="https://i.pinimg.com/736x/3a/1b/ae/3a1bae73239b47aa0d13696b2ed65566.jpg"
                        alt="Foundation Reset"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {phase.title === "Power Development" && (
                    <div className="rounded-lg overflow-hidden bg-black/50 h-[600px] flex items-center justify-center">
                      <img
                        src="https://i.pinimg.com/736x/d9/80/4b/d9804b8a28328c46f8e423663377d429.jpg"
                        alt="Power Development"
                        className="w-full h-auto max-h-full object-contain"
                      />
                    </div>
                  )}
                  {phase.title === "Life Integration" && (
                    <div className="rounded-lg overflow-hidden bg-black/50 h-[600px]">
                      <img
                        src="https://i.pinimg.com/736x/56/3a/fe/563afe51321ba0d111f526d4bd5574ab.jpg"
                        alt="Life Integration"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Reset Your Life?
            </h2>
            <p className="text-gray-400 mb-8">
              Join our Power Reset program and transform your mind and body.
            </p>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Begin Your Journey <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: Brain,
    title: "Mental Reset",
    description: "Develop mental toughness and resilience through specialized mindset training."
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Learn to set and achieve meaningful fitness and life goals."
  },
  {
    icon: Flame,
    title: "Physical Reset",
    description: "Transform your body with our proven training methodologies."
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Track your progress and celebrate milestones along your journey."
  }
]

const phases = [
  {
    title: "Foundation Reset",
    description: "Build the fundamental habits and mindset needed for lasting change.",
    points: [
      "Mental preparation and goal setting",
      "Basic movement patterns and mobility work",
      "Nutrition fundamentals and habit formation",
      "Sleep optimization and recovery protocols"
    ]
  },
  {
    title: "Power Development",
    description: "Increase intensity and challenge yourself to new heights.",
    points: [
      "Progressive overload training",
      "Advanced movement patterns",
      "Nutrition optimization",
      "Mental toughness development"
    ]
  },
  {
    title: "Life Integration",
    description: "Integrate your new habits and mindset into daily life.",
    points: [
      "Lifestyle optimization strategies",
      "Long-term goal setting",
      "Maintenance protocols",
      "Community integration"
    ]
  }
]

