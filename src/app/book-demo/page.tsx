'use client';
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import DottedBackground from "../components/dotted-background";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const BookDemo = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    slot: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted successfully');
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      slot: ''
    }); 
    router.push('/');
  };
  
  return (
    <div className="bg-white min-h-screen px-4 py-8 overflow-y-auto">
      <DottedBackground>
        <main className="max-w-5xl mx-auto w-full py-8 flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <h1 className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center md:text-left`}>
              Book a Demo!
            </h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 bg-white py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black text-base"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 bg-white py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black text-base"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black text-base"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black text-base"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <select
                className="w-full bg-white px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black text-base"
                value={formData.slot}
                onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
              >
                <option value="">Choose Slot</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                <option value="evening">Evening (6 PM - 9 PM)</option>
              </select>
              <div className="flex items-start gap-2 p-1">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 h-4 w-4 min-w-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <label htmlFor="consent" className="text-xs text-gray-600 leading-tight">
                I agree to receive SMS messages from ReplyQuick LLC about services and updates. Message and data rates may apply. Reply STOP to unsubscribe at any time. View our Privacy Policy View our <Link href="/privacy-policy" className="text-blue-500">Privacy Policy</Link>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Schedule
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="  hidden md:block w-full md:w-1/2 flex justify-center items-center relative">
            <div className="relative w-[180px] flex sm:w-[200px] md:w-[300px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <Image
                src="/images/main.png"
                alt="AI Chat Interface"
                width={300}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Info Box */}
            <div className="hidden md:block absolute -bottom-30 sm:-bottom-35 w-[90%] max-w-[430px] bg-black text-white px-5 py-4 rounded-2xl shadow-lg">
              <p className="text-base sm:text-lg font-semibold mb-2">See how ReplyQuickAI follows up like a pro.</p>
              <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                <li>89% of consumers prefer texting over calling or emailing.</li>
                <li>Most leads expect replies in 1 hour - we do it instantly.</li>
                <li>74% of leads go with the first business to respond.</li>
              </ul>
            </div>
          </div>
        </main>
      </DottedBackground>
    </div>
  );
};

export default BookDemo;
