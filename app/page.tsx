import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-black/60"
            style={{
              backgroundImage: "url('https://i.pinimg.com/736x/53/59/cc/5359cc29a70e9e1061b6c4326668df06.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          />
        </div>
        
        <div className="relative z-10 container px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              THE RESET BUTTON
            </h1>
            <h2 className="text-2xl md:text-5xl font-bold tracking-tighter text-yellow-400 mb-12">
              YOU HAVE BEEN WAITING FOR
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-2xl mx-auto">
              <Link 
                href="/nutrition"
                className="group relative w-full md:w-64 h-12 overflow-hidden rounded-full bg-yellow-400/10 px-4 py-2 text-yellow-400 transition-colors hover:bg-yellow-400/20"
              >
                <span className="relative flex items-center justify-between">
                  NUTRITION GUIDE
                  <span className="ml-2">→</span>
                </span>
              </Link>
              <Link 
                href="/reset"
                className="group relative w-full md:w-64 h-12 overflow-hidden rounded-full bg-yellow-400/10 px-4 py-2 text-yellow-400 transition-colors hover:bg-yellow-400/20"
              >
                <span className="relative flex items-center justify-between">
                  POWER RESET
                  <span className="ml-2">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://i.pinimg.com/736x/15/cc/d1/15ccd1ccb621745f6186da2a32ec6475.jpg"
                alt="Modern gym equipment"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">01 / EQUIPMENT</h3>
                  <p className="text-gray-300">State-of-the-art facilities designed for optimal performance</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://i.pinimg.com/736x/08/c6/b8/08c6b888f731b90cd63472fc2e8b8ffb.jpg"
                alt="Professional trainer"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">02 / TRAINERS</h3>
                  <p className="text-gray-300">Expert guidance from certified professional trainers</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://i.pinimg.com/736x/e7/aa/5d/e7aa5da48c4bc613c501458e049fc303.jpg"
                alt="Training session"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">03 / PROGRAMS</h3>
                  <p className="text-gray-300">Customized training programs for all fitness levels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Training Section */}
      <section className="py-24 bg-black border-t border-yellow-400/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                START YOUR JOURNEY TODAY
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Transform your body and mind with our comprehensive fitness programs and expert guidance.
              </p>
              <Link href="/contact">
                <Button 
                  className="h-12 px-6 rounded-full bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  <Play className="mr-2 h-4 w-4" /> START TRAINING
                </Button>
              </Link>
            </div>
            <div className="flex-1">
              <img
                src="https://i.pinimg.com/736x/6a/23/1a/6a231a83d7f6a673b3f239c71dc54529.jpg"
                alt="Training session"
                width={800}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

