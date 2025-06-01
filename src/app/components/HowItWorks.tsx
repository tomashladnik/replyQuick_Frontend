"use client"
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
const StepCard = ({ number, icon, title }: { number: string; icon: string; title: string }) => (
  <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
    <div className="text-sm text-gray-500 mb-4">{number}</div>
    <div className="mb-4 w-24 h-24 relative">
      <Image
        src={icon}
        alt={title}
        fill
        className="object-contain"
      />
    </div>
    <h3 className={`${poppins.className} text-lg font-medium text-gray-900`}>{title}</h3>
  </div>
);

const HowItWorks = () => {
  const router = useRouter();
  return (
    <section className="py-20 px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        <h2 className={`${poppins.className} text-4xl md:text-5xl font-bold text-center mb-16`}>
          How it works?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepCard
            number="1"
            icon="/gifs/pin.gif"
            title="Connect Your CRM"
          />
          <StepCard
            number="2"
            icon="/gifs/text.gif"
            title="AI Contacts Leads"
          />
          <StepCard
            number="3"
            icon="/gifs/msg.gif"
            title="AI Follows-Up"
          />
          <StepCard
            number="4"
            icon="/gifs/progress.gif"
            title="You Close Deals"
          />
        </div>

        <div className="text-center mt-16">
          <h3 className={`${poppins.className} text-2xl md:text-3xl font-bold mb-8`}>
            No Setup Hassle. No Missed Leads. Just More Sales.
          </h3>
          <button onClick={() => router.push('/book-demo')} className={`${poppins.className} bg-black cursor-pointer text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 mx-auto`}>
            Book a Demo
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 