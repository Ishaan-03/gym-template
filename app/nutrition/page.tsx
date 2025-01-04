// eslint-disable-next-line react-hooks/rules-of-hooks
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Apple, Dumbbell, Coffee, Clock, Salad, ChefHat } from 'lucide-react'

export default function NutritionGuidePage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              NUTRITION <span className="text-yellow-400">GUIDE</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Fuel your transformation with our comprehensive nutrition guidance.
            </p>
            <div className="inline-block rounded-full px-4 py-1.5 text-sm bg-yellow-400/10 text-yellow-400 mb-8">
              Customized meal plans for your goals
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plans Grid */}
      <section className="py-12 bg-black/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {mealPlans.map((plan, index) => (
              <Card key={index} className="bg-black border-yellow-400/20 p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-yellow-400/10 mb-4">
                    <plan.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <ul className="space-y-2 text-left mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Essential Nutrition Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nutritionTips.map((tip, index) => (
              <div key={index} className="p-6 border border-yellow-400/20 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">{tip.title}</h3>
                <p className="text-gray-400">{tip.description}</p>
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
              Ready to Transform Your Diet?
            </h2>
            <p className="text-gray-400 mb-8">
              Get personalized nutrition guidance from our expert nutritionists.
            </p>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const mealPlans = [
  {
    icon: Dumbbell,
    title: "Muscle Gain",
    description: "High-protein meal plans designed for muscle growth and recovery",
    features: [
      "3000-3500 calories daily",
      "High protein macros",
      "Strategic carb timing",
      "Pre/post workout nutrition",
      "Supplement guidance"
    ]
  },
  {
    icon: Salad,
    title: "Fat Loss",
    description: "Balanced nutrition plans for sustainable fat loss",
    features: [
      "Calculated caloric deficit",
      "High protein retention",
      "Complex carb sources",
      "Healthy fat balance",
      "Meal timing strategy"
    ]
  },
  {
    icon: Apple,
    title: "Maintenance",
    description: "Balanced nutrition for optimal health and performance",
    features: [
      "Maintenance calories",
      "Balanced macros",
      "Flexible meal options",
      "Sustainable approach",
      "Regular adjustments"
    ]
  }
]

const nutritionTips = [
  {
    title: "Meal Timing",
    description: "Space your meals 3-4 hours apart to maintain stable energy levels and support muscle recovery throughout the day."
  },
  {
    title: "Protein Intake",
    description: "Aim for 1.6-2.2g of protein per kg of body weight to support muscle growth and recovery."
  },
  {
    title: "Hydration",
    description: "Drink at least 3-4 liters of water daily to support metabolism and workout performance."
  },
  {
    title: "Pre-Workout Nutrition",
    description: "Consume complex carbs and moderate protein 2-3 hours before training for optimal energy."
  },
  {
    title: "Post-Workout Window",
    description: "Take advantage of the anabolic window by consuming protein and fast-digesting carbs within 30 minutes post-workout."
  },
  {
    title: "Food Quality",
    description: "Focus on whole, unprocessed foods to maximize nutrient intake and support overall health."
  }
]

