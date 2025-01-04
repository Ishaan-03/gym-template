import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              MEMBERSHIP PLANS
            </h1>
            <p className="text-xl text-gray-400">
              Choose the perfect plan to achieve your fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-lg border ${
                  pkg.featured 
                    ? 'border-yellow-400 bg-yellow-400/5' 
                    : 'border-yellow-400/20'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-yellow-400 text-black text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-4">
                    ${pkg.price}
                    <span className="text-base font-normal text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400">{pkg.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Check className="h-5 w-5 text-yellow-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    pkg.featured 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500' 
                      : 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20'
                  }`}
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Plans Include</h2>
            <p className="text-gray-400">Every membership comes with these premium features</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const packages = [
  {
    name: "Basic",
    price: "49",
    description: "Perfect for beginners",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "2 group classes per week",
      "Locker room access",
      "Fitness assessment"
    ],
    featured: false
  },
  {
    name: "Pro",
    price: "89",
    description: "Most popular choice",
    features: [
      "All Basic features",
      "Unlimited group classes",
      "1 personal training session/month",
      "Nutrition consultation",
      "Access to premium areas"
    ],
    featured: true
  },
  {
    name: "Elite",
    price: "149",
    description: "For serious athletes",
    features: [
      "All Pro features",
      "4 personal training sessions/month",
      "Monthly body composition",
      "Recovery zone access",
      "Priority booking"
    ],
    featured: false
  }
]

import { Dumbbell, Users, Clock } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: "Latest Equipment",
    description: "Access to state-of-the-art fitness equipment and facilities"
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Guidance from certified professional trainers"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Open 24/7 for your convenience"
  }
]

