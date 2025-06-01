"use client"
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const StatItem = ({ number, text }: { number: string; text: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2`}>{number}</div>
    <div className={`${poppins.className} text-gray-600 text-base sm:text-lg`}>{text}</div>
  </div>
);

const TestimonialCard = ({ 
  image, 
  name, 
  role, 
  company, 
  isBlurred = false,
  onHover,
  onLeave,
  index
}: { 
  image: string; 
  name: string; 
  role: string;
  company: string;
  isBlurred?: boolean;
  onHover: () => void;
  onLeave: () => void;
  index: number;
}) => (
  <div 
    className="flex flex-col items-center cursor-pointer transition-all duration-300"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    onClick={onHover}
  >
    <div className="w-14 h-14 sm:w-16 sm:h-16 relative rounded-full overflow-hidden mb-2 sm:mb-3">
      <Image
        src={image}
        alt={name}
        fill
        className={`object-cover transition-all duration-300 ${isBlurred ? 'blur-[1px] opacity-80' : 'opacity-100'}`}
      />
    </div>
    <h4 className={`${poppins.className} font-medium text-base sm:text-lg`}>{name}</h4>
    <p className={`${poppins.className} text-gray-500 text-xs sm:text-sm`}>{role}</p>
    <p className={`${poppins.className} text-gray-500 text-xs sm:text-sm`}>at {company}</p>
  </div>
);

const Results = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleLeave = () => {
    setActiveIndex(1);
  };

  const testimonials = [
    {
      text: "I had the pleasure of working with Ivan on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Ivan for anyone looking for a talented and professional designer.",
      image: "/people/2.png",
      name: "Richard Jonas",
      role: "CEO",
      company: "Teamwork"
    },
    {
      text: "Working with this team has transformed our business operations. The efficiency gains and cost savings have been remarkable. We've seen a significant improvement in our bottom line.",
      image: "/people/1.png",
      name: "Toby Brossman",
      role: "Founder",
      company: "Doge"
    },
    {
      text: "The automation solutions provided have saved us countless hours of manual work. Our team can now focus on strategic initiatives rather than repetitive tasks. It's been a game-changer for our company.",
      image: "/people/3.png",
      name: "Toby Brossman",
      role: "Founder",
      company: "Pipify"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16`}>
          Real Businesses, Real Results
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          <StatItem number="3X" text="Increase in qualified leads" />
          <StatItem number="80%" text="Reduction in costs" />
          <StatItem number="55%" text="Improvements in win rates" />
          <StatItem number="20H/week" text="Time saved on manual tasks" />
        </div>

        {/* Testimonial Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className={`${poppins.className} text-lg sm:text-xl text-gray-700 italic mb-8 sm:mb-12 px-4`}>
            "{testimonials[activeIndex].text}"
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                isBlurred={activeIndex !== index}
                onHover={() => handleHover(index)}
                onLeave={handleLeave}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results; 