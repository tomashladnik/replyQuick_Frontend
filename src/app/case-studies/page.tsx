"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { Poppins } from "next/font/google"
import Image from "next/image"
import { useRouter } from "next/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

// Moving banner component
const MovingBanner = () => {
  const content = (
    <>
      <span className="mx-4 md:mx-8 text-lg md:text-3xl">MORE FOLLOW-UPS = MORE SALES</span>
      <span className="mx-4 md:mx-8 text-lg md:text-3xl">•</span>
      <span className="mx-4 md:mx-8 text-lg md:text-3xl">LESS WORK = MORE TIME</span>
      <span className="mx-4 md:mx-8 text-lg md:text-3xl">•</span>
      <span className="mx-4 md:mx-8 text-lg md:text-3xl">AI SELLS FOR YOU</span>
      <span className="mx-4 md:mx-8 text-lg md:text-3xl">•</span>
    </>
  );

  return (
    <div className="overflow-hidden bg-black text-white py-12">
      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap text-3xl font-semibold">
          {content}
          {content}
          {content}
        </div>
        <div className="animate-marquee2 whitespace-nowrap absolute top-0 text-3xl font-semibold">
          {content}
          {content}
          {content}
        </div>
      </div>
    </div>
  );
};

interface CaseStudy {
  id: number;
  // Card Content
  title: string;
  subtitle: string;
  image: string;
  
  // Popup Content
  popupContent: {
    title: string;
    subtitle: string;
    image: string;
    challenges: string;
    solution: string;
    results: string[];
    summary: string;
  }
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    // Card Content
    title: "Realtor",
    subtitle: "2X More Closings with AI Follow-up",
    image: "/cards/1.png",
    // Popup Content
    popupContent: {
      image: "/case-studies/1.png",
      title: "Realtor",
      subtitle: "2X More Closings with AI Follow-up",
      challenges: "Leads were slipping through due to slow follow-ups and inconsistent outreach.",
      solution: "ReplyQuick Automated Lead Nurturing, Ensuring Instant Responses And Strategic Follow-ups Via Email, LinkedIn, SMS, And WhatsApp.",
      results: [
        "2X More Closings In 3 Months",
        "50% Increase In Appointment Show-Up Rates",
        "Realtor Spent 80% Less Time Chasing Leads"
      ],
      summary: "ReplyQuick Turned Cold Leads Into Deals! No More Losing Buyers Due To Slow Responses."
    }
  },
  {
    id: 2,
    title: "HVAC",
    subtitle: "50% More Service Bookings Without Extra Staff",
    image: "/cards/2.png",
    popupContent: {
      title: "HVAC",
      subtitle: "50% More Service Bookings Without Extra Staff",
      image: "/case-studies/2.png",
      challenges: "Missed Calls And Slow Response Mount Lost Revenue.",
      solution: "ReplyQuick Handled Incoming Service Inquiries, Scheduled Appointments, And Sent Reminders Via SMS & WhatsApp.",
      results: [
        "50% Increase In Service Bookings",
        "30% Fewer Missed Appointments",
        "No Need To Hire Extra Admin Staff"
      ],
      summary: "We Doubled Our Bookings Without Hiring! AI Handles Everything."
    }
  },
  {
    id: 3,
    title: "Contractor",
    subtitle: "3X More Jobs Without Hiring More Staff",
    image: "/cards/3.png",
    popupContent: {
      title: "Contractor",
      subtitle: "3X More Jobs Without Hiring More Staff",
      image: "/case-studies/3.png",
      challenges: "Lead Follow-Ups Were Slow, And Estimates Weren't Being Scheduled Fast Enough.",
      solution: "ReplyQuick Followed Up On Every Estimate Request Instantly, Booked Appointments, And Sent Automated Reminders.",
      results: [
        "3X More Jobs Booked",
        "50% Fewer No-Shows For Estimates",
        "Contractors Spent Zero Time Chasing Leads"
      ],
      summary: "We Booked More Jobs Than Ever—Without Lifting A Finger!"
    }
  },
  {
    id: 4,
    title: "Medical Office",
    subtitle: "60% More Appointments with AI Scheduling",
    image: "/cards/4.png",
    popupContent: {
      title: "Medical Office",
      subtitle: "60% More Appointments with AI Scheduling",
      image: "/case-studies/4.png",
      challenges: "Patients Weren't Showing Up For Scheduled Visits, And Front Desk Staff Was Overwhelmed.",
      solution: "ReplyQuick Automated Patient Follow-Ups, Reminders, And Rescheduling Via SMS & Email.",
      results: [
        "60% Increase In Appointments Confirmations",
        "35% Reduction In No Shows",
        "50% Less Front Desk Staff Work"
      ],
      summary: "AI Scheduling Changed Everything—Our Calendar Is Fully Booked Without Stress!"
    }
  },
  {
    id: 5,
    title: "Law Firm",
    subtitle: "4X More Client Consultations with AI Outreach",
    image: "/cards/5.png",
    popupContent: {
      title: "Law Firm",
      subtitle: "4X More Client Consultations with AI Outreach",
      image: "/case-studies/5.png",
      challenges: "Potential Clients Weren't Booking Consultations, And Those Who Did Often Missed Appointments.",
      solution: "ReplyQuick Automated Follow-Ups, Sent Reminders, And Scheduled Consultations Via LinkedIn, Email, And SMS, Ensuring High Engagement.",
      results: [
        "4X Increase In Booked Consultations",
        "60% Faster Client Onboarding",
        "80% Less Time On Administrative Work"
      ],
      summary: "ReplyQuick Fills Our Schedule With Qualified Leads While We Focus On Winning Cases— Our Consultations Have Skyrocketed!"
    }
  },
  {
    id: 6,
    title: "Roofing Company",
    subtitle: "3X More Jobs with AI Follow-Ups",
    image: "/cards/6.png",
    popupContent: {
      title: "Roofing Company",
      subtitle: "3X More Jobs with AI Follow-Ups",
      image: "/case-studies/6.png",
      challenges: "They Received Many Inbound Leads But Were Slow To Follow Up, Leading To Low Booking Rates And Missed Jobs.",
      solution: "ReplyQuick Automated Lead Follow-ups, Booked Roof Inspections, And Sent SMS Reminders, Ensuring Every Prospect Was Engaged.",
      results: [
        "3X More Booked Jobs",
        "45% Reduction In No-Show Appointments",
        "No Need To Hire Extra Office Staff"
      ],
      summary: "Our Schedule Is Packed—AI Follows Up Instantly, And We Never Lose A Lead!"
    }
  },
  {
    id: 7,
    title: "Home Remodeling Company",
    subtitle: "70% More Booked Estimates with AI Outreach",
    image: "/cards/7.png",
    popupContent: {
      title: "Home Remodeling Company",
      subtitle: "70% More Booked Estimates with AI Outreach",
      image: "/case-studies/7.png",
      challenges: "Homeowners Were Interested But Weren't Scheduling Consultations Fast Enough, Leading To Lost Opportunities.",
      solution: "ReplyQuick Sent AI-Personalized Follow-ups, SMS Reminders, And Automated Estimate Scheduling.",
      results: [
        "70% Increase In Booked Consultations",
        "55% Faster Missed Or Rescheduled Estimates",
        "90% Reduction In Time Spent Instead Of Chasing Leads"
      ],
      summary: "Now Our Calendar Is Always Full, And Our Sales Team Only Talks To Serious Homeowners."
    }
  },
  {
    id: 8,
    title: "Chiropractic Clinic",
    subtitle: "60% More Appointments with AI",
    image: "/cards/8.png",
    popupContent: {
      title: "Chiropractic Clinic",
      subtitle: "60% More Appointments with AI",
      image: "/case-studies/8.png",
      challenges: "Patients Would Request Information But Never Book Due To Delays In Manual Follow-ups.",
      solution: "ReplyQuick Automated Follow-Ups, Sent SMS Confirmations, And Handled Rescheduling To Keep The Appointment Calendar Full.",
      results: [
        "60% Increase In Confirmed Appointments",
        "75% Reduction In Missed Visits",
        "Front Desk Now Sees 2X More Patients Per Week"
      ],
      summary: "AI Handles Our Scheduling, And Now We Don't Lose Patients Due To Slow Responses."
    }
  }
]

export default function CaseStudies() {
  const router = useRouter();
  return (
    <div className="min-h-screen text-black">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 ${poppins.className}`}>
            How Businesses are closing more deals with AI-on Autopilot!
          </h1>
          <p className={`text-xl md:text-2xl lg:text-3xl text-gray-400 mb-4 md:mb-8 ${poppins.className}`}>
            Real Results. Real Businesses. More Sales.
          </p>
          <p className={`text-lg md:text-xl text-gray-500 mb-8 md:mb-12 ${poppins.className}`}>
            Your Competitors are already using AI. Are You?
          </p>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 py-6 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {caseStudies.map((study) => (
            <Dialog key={study.id}>
              <DialogTrigger asChild>
                <div className="bg-black rounded-xl overflow-hidden shadow-md group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="p-3 md:p-4">
                    <h3 className="text-base md:text-lg font-semibold text-white">{study.title}</h3>
                  </div>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 md:p-4 flex justify-end">
                    <Button variant="outline" size="sm" className="w-6 h-6 md:w-8 md:h-8 rounded-full p-0">
                      <Plus className="h-8 w-8 md:h-10 md:w-10 text-white cursor-pointer" />
                    </Button>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px] bg-white p-4 md:p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Left side - Image */}
                  <div className="w-full md:w-1/3 relative">
                    <Image 
                      src={study.popupContent.image} 
                      alt={study.popupContent.title} 
                      width={300}
                      height={400}
                      className="object-contain w-full"
                    />
                  </div>
                  
                  {/* Right side - Content */}
                  <div className="w-full md:w-2/3">
                    <DialogHeader>
                      <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">{study.popupContent.title}</DialogTitle>
                      <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">— {study.popupContent.subtitle}</p>
                    </DialogHeader>

                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Challenges:</h4>
                        <p className="text-gray-700 text-sm md:text-base">{study.popupContent.challenges}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-700 text-sm md:text-base">{study.popupContent.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Results:</h4>
                        <ul className="space-y-2">
                          {study.popupContent.results.map((result, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 text-sm md:text-base">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 italic">
                      {study.popupContent.summary}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      {/* How Image Section */}
      <section className="w-full relative">
      <MovingBanner />
      </section>

      {/* Bottom CTA Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 text-center">
        <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${poppins.className}`}>
          Your Business can be next-AI can increase<br className="hidden md:block" />Sales on Autopilot!
        </h2>
        <p className={`text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 ${poppins.className}`}>
          Stop Wasting Leads. AI follows up & books them for you.
        </p>
        <Button 
          variant="default" 
          size="lg"
          onClick={() => router.push("/book-demo")}
          className="bg-black text-white hover:bg-gray-800 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full mb-6 md:mb-8"
        >
          Book A Demo
        </Button>
        <p className={`text-lg md:text-xl text-gray-600 ${poppins.className}`}>
          And Start Closing More Deals!
        </p>
      </section>

      {/* Top Banner */}

    </div>
  )
} 