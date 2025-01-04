import { Dumbbell, Target, Clock, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                ABOUT <span className="text-yellow-400">02</span>
              </h1>
              <p className="text-xl text-gray-400">
                We are more than just a gym. We are a community dedicated to transforming lives through fitness and wellness.
              </p>
            </div>
            <div className="flex-1">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/0a/14/08/0a14089207e0692e5a368691d833e4e3.jpg"
                  alt="Mentality"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-black/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-gray-400">Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-400">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-400">Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-12 text-center">
            OUR VALUES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 border border-yellow-400/20 rounded-lg">
                <value.icon className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    icon: Dumbbell,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from our equipment to our service."
  },
  {
    icon: Target,
    title: "Results",
    description: "We're committed to helping our members achieve their fitness goals."
  },
  {
    icon: Clock,
    title: "Dedication",
    description: "We're dedicated to providing the best possible fitness experience."
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a supportive community that motivates and inspires."
  }
]

