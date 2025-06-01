'use client'
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import ROICalculator from '../components/ROICalculator';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const HowItWorks = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Hero Section */}
        <div className="text-center max-w-7xl mx-auto mb-8 sm:mb-16">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${poppins.className}`}>
            <span className="text-gray-600">Sales</span>{" "}
            <span className="text-black">Follow-ups are Broken AI fixes that</span>
          </h1>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-24">
          {/* Without AI */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
            <h2 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${poppins.className}`}>
              Without AI<br />Sales Automation
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✕</span>
                <p className={`text-gray-700 text-sm sm:text-base ${poppins.className}`}>Leads go cold because follow ups take too long</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✕</span>
                <p className={`text-gray-700 text-sm sm:text-base ${poppins.className}`}>Your team wastes hours chasing unresponsive leads</p>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">✕</span>
                <p className={`text-gray-700 text-sm sm:text-base ${poppins.className}`}>Leads go cold because follow ups take too long</p>
              </div>
            </div>
          </div>

          {/* With AI */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
            <h2 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${poppins.className}`}>
              With AI<br />Sales Automation
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <p className={`text-gray-700 text-sm sm:text-base ${poppins.className}`}>AI follows up instantly, never miss a lead</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <p className={`text-gray-700 text-sm sm:text-base ${poppins.className}`}>Your team focuses on closing deals, not chasing</p>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <p className={`text-gray-700 text-sm sm:text-base ${poppins.className}`}>More meetings booked, more deals closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-24">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 ${poppins.className}`}>
            4 Simple Steps to move Sales<br />Without the Work
          </h2>
          
          <div className="relative">
            {/* Steps Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6">
                  <Image
                    src="/how-it-works/1.png"
                    alt="Connect Your CRM"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${poppins.className}`}>Connect Your CRM</h3>
                <p className={`text-gray-600 text-sm ${poppins.className}`}>
                  Sync with hub spot, salesforce, Pipedrive or upload leads manually
                </p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden sm:block absolute left-[23%] top-[8%] w-12 h-12 sm:w-16 sm:h-16">
                <Image
                  src="/gifs/arrow.gif"
                  alt="Arrow"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6">
                  <Image
                    src="/how-it-works/2.png"
                    alt="AI Making it Easier"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${poppins.className}`}>AI Making it Easier</h3>
                <p className={`text-gray-600 text-sm ${poppins.className}`}>
                  AI calls, texts and emails every new lead within seconds
                </p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden sm:block absolute left-[48%] top-[8%] w-12 h-12 sm:w-16 sm:h-16">
                <Image
                  src="/gifs/arrow.gif"
                  alt="Arrow"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6">
                  <Image
                    src="/how-it-works/3.png"
                    alt="AI Follows-up till response"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${poppins.className}`}>AI Follows-up till response</h3>
                <p className={`text-gray-600 text-sm ${poppins.className}`}>
                  AI handles all follow-ups until the deal is closed
                </p>
              </div>

              {/* Arrow 3 */}
              <div className="hidden sm:block absolute left-[73%] top-[8%] w-12 h-12 sm:w-16 sm:h-16">
                <Image
                  src="/gifs/arrow.gif"
                  alt="Arrow"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6">
                  <Image
                    src="/how-it-works/4.png"
                    alt="More deals Closed"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${poppins.className}`}>More deals Closed</h3>
                <p className={`text-gray-600 text-sm ${poppins.className}`}>
                  More Meetings booked, more deals closed, without lifting a finger
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-24">
          {/* Feature 1 */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${poppins.className}`}>Connect Your CRM</h3>
            <p className={`text-gray-600 text-xs sm:text-sm ${poppins.className}`}>
              Sync with hub spot, salesforce, Pipedrive or upload leads manually
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${poppins.className}`}>AI Making it Easier</h3>
            <p className={`text-gray-600 text-xs sm:text-sm ${poppins.className}`}>
              AI calls, texts and emails every new lead within seconds, so you never miss a deal.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${poppins.className}`}>AI Follows-up till response</h3>
            <p className={`text-gray-600 text-xs sm:text-sm ${poppins.className}`}>
              AI handles all follow-ups until the deal is closed, no more waste of time.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${poppins.className}`}>More deals Closed</h3>
            <p className={`text-gray-600 text-xs sm:text-sm ${poppins.className}`}>
              More Meetings booked, more deals closed, without lifting a finger
            </p>
          </div>
        </div>

        {/* ROI Calculator Section */}
        <ROICalculator />

        {/* Final CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link 
            href="/book-demo" 
            className={`inline-flex items-center bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base ${poppins.className}`}
          >
            Book a Demo
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;