"use client";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BenefitItem = ({
  mainText,
  subText,
  color = "text-gray-400",
}: {
  mainText: string;
  subText?: string;
  color?: string;
}) => (
  <div className={`group ${poppins.className} p-4 sm:p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300 transform hover:scale-105 shadow-sm`}>
    <p className={`text-lg sm:text-xl font-semibold mb-1 ${color}`}>
      {mainText}
    </p>
    {subText && (
      <p className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors duration-300">
        {subText}
      </p>
    )}
  </div>
);

const Benefits = () => {
  const router = useRouter();

  return (
    <section className="py-10 sm:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black border border-gray-700 rounded-3xl p-6 sm:p-12 md:p-20 shadow-2xl text-center">
          {/* Heading */}
          <div className="mb-14">
            <h2
              className={`${poppins.className} text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4`}
            >
              You're Leaving Money on the Table
            </h2>
            <p
              className={`${poppins.className} text-base sm:text-lg text-gray-400 max-w-2xl mx-auto`}
            >
              Leads go cold fast. If you're not following up, your competitors
              are!
            </p>
          </div>

          {/* Two Column Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-16 text-left">
            <div className="space-y-6">
              <BenefitItem
                mainText="Most businesses give up after 1-2 follow-ups"
                subText="But 80% of deals need 5+ touches to close"
                color="text-red-400"
              />
              <BenefitItem
                mainText="90% of sales happen after the 5th follow-up"
                subText="AI handles it for you — consistently and instantly"
                color="text-red-400"
              />
              <BenefitItem
                mainText="AI follows up instantly → More Replies → More Deals"
                subText="88% of leads expect replies within 1 hour — we reply in seconds."
                color="text-red-400"
              />
            </div>
            <div className="space-y-6">
              <BenefitItem
                mainText="No More Closing Leads"
                subText="74% of buyers choose the fastest responder. Let AI do it."
                color="text-green-400"
              />
              <BenefitItem
                mainText="No More Missed Sales"
                subText="89% of consumers prefer texting over calls or emails."
                color="text-green-400"
              />
              <BenefitItem
                mainText="No More Wasted Time"
                subText="Save 20+ hours a week with automated follow-ups."
                color="text-green-400"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={() => router.push("/book-demo")}
              className={`${poppins.className} bg-white text-black font-semibold px-10 py-4 rounded-full text-xl hover:bg-gray-100 transition duration-300 shadow-md`}
            >
              Book a Demo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
