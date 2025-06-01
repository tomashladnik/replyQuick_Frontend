'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Poppins } from "next/font/google"
import { useRouter } from "next/navigation"
import DottedBackground from "./dotted-background"
import MobileHero from "./MobileHero"
import PhoneMockup from "./PhoneMockup"

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
  });

export default function Hero() {
  const router = useRouter()
  return (
    <div className="bg-white">
      <DottedBackground>
        {/* Mobile Hero */}
        <div className="block md:hidden">
          <MobileHero />
        </div>

        {/* Desktop Hero */}
        <section className="hidden md:block">
          <div className="container mx-auto px-4 py-10 lg:py-16 text-black">
            <div className="w-[75%] mb-8">
              <h1 className={`text-4xl lg:text-5xl font-bold leading-tight ${poppins.className}`}>
                Stop Losing Leads-Automate Sales Calls & Follow-ups with AI
              </h1>
            </div>
            <div className="grid grid-cols-5 gap-2 items-start h-[500px]">
              <div className="col-span-3 order-1">
                <div className="space-y-6">
                  <h2 className={`text-3xl lg:text-4xl font-bold text-black ${poppins.className}`}>
                    ReplyQuick.AI-Your Sales Assistant that works 24/7
                  </h2>

                  <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-3">
                      <p className={`text-lg font-medium ${poppins.className}`}>Never Miss Another Call or Message</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className={`text-lg font-medium ${poppins.className}`}>24/7 Lead Capture & Instant Responses</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className={`text-lg font-medium ${poppins.className}`}>Close More Deals Without Lifting a Finger</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button onClick={() => router.push('/book-demo')} className={`w-auto cursor-pointer ${poppins.className} bg-black font-medium hover:bg-gray-900 text-white rounded-full px-22 py-7 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 group`}>
                      <span className="text-lg font-semibold font-poppins">Book a Demo</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-span-2 order-2 relative -mt-16">
                <div className="relative w-full flex justify-center">
                  <div className="w-[340px]">
                    <PhoneMockup />
                  </div>
                  
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-10 py-3 rounded-[32px] w-[120%] max-w-[490px] shadow-xl">
                    <p className={`${poppins.className} text-xl font-semibold mb-3`}>See how ReplyQuickAI follows up like a pro.</p>
                    <div className="space-y-2">
                      <p className={`${poppins.className} text-sm text-gray-300`}>89% of consumers prefer texting over calling or emailing.</p>
                      <p className={`${poppins.className} text-sm text-gray-300`}>Most leads expect replies in 1 hour - we do it instantly.</p>
                      <p className={`${poppins.className} text-sm text-gray-300`}>74% of leads go with the first business to respond.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DottedBackground>
    </div>
  )
}
