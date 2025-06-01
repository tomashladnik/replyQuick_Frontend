"use client"
import { ArrowRight } from "lucide-react";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
const CallToAction = () => {
  const router = useRouter();
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`${poppins.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6`}>
          Still Unsure? Let's Talk!
        </h2>
        <p className={`${poppins.className} text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12`}>
          Book a Demo Now and Get All Your Answers Live!
        </p>
        
        <button onClick={() => router.push('/book-demo')} className={`${poppins.className} bg-black cursor-pointer text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 md:gap-3 mx-auto`}>
          Book a Demo
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>
    </section>
  );
};

export default CallToAction; 