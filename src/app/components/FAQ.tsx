'use client'
import { Minus, Plus } from 'lucide-react';
import { Poppins } from "next/font/google";
import { useState } from 'react';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden h-full">
    <button
      onClick={onToggle}
      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
    >
      <span className={`${poppins.className} text-base sm:text-lg font-medium`}>{question}</span>
      {isOpen ? (
        <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0 ml-2 sm:ml-4" />
      ) : (
        <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0 ml-2 sm:ml-4" />
      )}
    </button>
    {isOpen && (
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50">
        <p className={`${poppins.className} text-sm sm:text-base text-gray-600`}>{answer}</p>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How does ReplyQuick help me get more sales?",
      answer: "ReplyQuick automates lead engagement, outreach, and follow-ups so you never lose a deal due to slow response times. It sends personalized emails, LinkedIn messages, WhatsApp, and SMS. Leads are automatically qualified and engaged, and meetings are instantly booked in your calendar. No more missed prospects—just warm, engaged leads ready to talk."
    },
    {
      question: "What happens if a lead doesn't respond?",
      answer: "ReplyQuick automatically follows up with leads using a customized sequence of messages across different channels until they engage or opt-out. This ensures no lead falls through the cracks."
    },
    {
      question: "Does ReplyQuick work with LinkedIn?",
      answer: "Yes, ReplyQuick fully integrates with LinkedIn, allowing automated connection requests, messaging, and follow-ups while maintaining a natural, personalized approach."
    },
    {
      question: "How does ReplyQuick schedule meetings automatically?",
      answer: "ReplyQuick syncs with your calendar and uses AI to find optimal meeting times. When a lead is ready to meet, it automatically suggests available slots and handles all the scheduling details."
    },
    {
      question: "Is ReplyQuick's AI messaging personalized?",
      answer: "Yes, ReplyQuick's AI analyzes each lead's profile, behavior, and interaction history to create highly personalized messages that feel natural and engaging. Our AI adapts the tone, content, and timing based on the lead's preferences and response patterns."
    },
    {
      question: "How secure is my data with ReplyQuick?",
      answer: "We take data security seriously. ReplyQuick uses enterprise-grade encryption, complies with GDPR and other privacy regulations, and never shares your data with third parties. All communications are secured, and you have complete control over your data."
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12`}>
          Still Have Questions? We've Got Answers!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
            <button className={`${poppins.className} bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base`}>
            View All Questions
            <span className="text-lg sm:text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 