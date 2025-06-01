'use client'
import { Minus, Plus } from 'lucide-react'
import { Poppins } from "next/font/google"
import { useState } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden mb-3 sm:mb-4">
    <button
      onClick={onToggle}
      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
    >
      <span className={`${poppins.className} text-base sm:text-lg font-medium`}>{question}</span>
      {isOpen ? (
        <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0 ml-3 sm:ml-4" />
      ) : (
        <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0 ml-3 sm:ml-4" />
      )}
    </button>
    {isOpen && (
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50">
        <div className={`${poppins.className} text-gray-600 text-sm sm:text-base`}>{answer}</div>
      </div>
    )}
  </div>
);

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How does ReplyQuick help me get more sales?",
      answer: (
        <div>
          <p>ReplyQuick automates lead engagement, outreach, and follow-ups so you never lose a deal due to slow response times. It:</p>
          <ul className="list-none mt-2 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              Finds & prioritizes high-value leads
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              Sends AI-personalized emails, LinkedIn messages, WhatsApp, and SMS
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              Follows up automatically until they respond
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              Books meetings instantly in your calendar
            </li>
          </ul>
          <p className="mt-2">No more manual prospecting—just warm, engaged leads ready to talk.</p>
        </div>
      )
    },
    {
      question: "Can ReplyQuick find new leads for me?",
      answer: "Yes, ReplyQuick can help identify and source new potential leads through various channels including LinkedIn, company databases, and industry-specific platforms. Our AI analyzes potential leads based on your ideal customer profile to find the most promising prospects."
    },
    {
      question: "What happens if a lead doesn't respond?",
      answer: "ReplyQuick automatically implements a smart follow-up sequence across multiple channels. The system uses AI to determine the best timing and channel for follow-ups, ensuring persistent but non-intrusive engagement until you get a response or reach a defined follow-up limit."
    },
    {
      question: "Does ReplyQuick work with LinkedIn?",
      answer: "Yes, ReplyQuick fully integrates with LinkedIn. You can automate connection requests, send personalized messages, and manage follow-ups while maintaining a natural, professional approach that complies with LinkedIn's guidelines."
    },
    {
      question: "How does ReplyQuick schedule meetings automatically?",
      answer: "ReplyQuick integrates with your calendar to identify available time slots and automatically suggests these to leads. When a lead shows interest, the system can instantly schedule a meeting, send calendar invites, and even include custom meeting details or Zoom links."
    },
    {
      question: "Can ReplyQuick make phone calls?",
      answer: "While ReplyQuick doesn't make direct phone calls, it can schedule calls, send SMS reminders, and integrate with your existing phone system or VoIP solution to help manage and track phone-based interactions with leads."
    },
    {
      question: "How does ReplyQuick personalize outreach?",
      answer: "ReplyQuick uses advanced AI to analyze lead profiles, company information, and engagement history to create highly personalized messages that resonate with each recipient. This ensures your outreach feels authentic and relevant to each prospect."
    },
    {
      question: "What kind of businesses can use ReplyQuick?",
      answer: "ReplyQuick is designed to help businesses of all sizes and industries that need to engage with leads and prospects effectively. It's particularly valuable for sales teams, recruiters, marketing agencies, and B2B companies."
    },
    {
      question: "Can ReplyQuick send SMS & WhatsApp follow-ups?",
      answer: "Yes, ReplyQuick can seamlessly integrate with SMS and WhatsApp channels to send follow-up messages. This multi-channel approach ensures higher engagement rates and faster responses from your leads."
    },
    {
      question: "How does ReplyQuick track results & optimize sales?",
      answer: "ReplyQuick provides comprehensive analytics and tracking features that monitor engagement rates, response times, conversion rates, and other key metrics. This data helps optimize your outreach strategy and improve sales performance."
    },
    {
      question: "Can ReplyQuick integrate with my CRM?",
      answer: "Yes, ReplyQuick offers integration capabilities with popular CRM systems to ensure seamless data flow and maintain up-to-date records of all lead interactions and engagement history."
    },
    {
      question: "How does ReplyQuick connect with my business?",
      answer: "ReplyQuick integrates with your existing business tools and workflows through secure API connections and native integrations, making it easy to incorporate into your current sales and marketing processes."
    },
    {
      question: "Will my leads know they're talking to an AI?",
      answer: "No, ReplyQuick maintains a natural, human-like communication style while automating your outreach. All messages can be customized to match your brand voice and communication preferences."
    },
    {
      question: "Does ReplyQuick work internationally?",
      answer: "Yes, ReplyQuick supports international business operations with multi-language capabilities and can adapt to different time zones and regional communication preferences."
    },
    {
      question: "Can I try it before committing?",
      answer: "Yes, we offer a trial period so you can experience ReplyQuick's capabilities firsthand and see how it can benefit your business before making a commitment."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12`}>
            Still Have Questions? We've Got Answers!
          </h1>
          
          <div className="space-y-3 sm:space-y-4">
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
            <p className={`${poppins.className} text-gray-600 mb-4 text-sm sm:text-base`}>
              Can't find what you're looking for?
            </p>
            <button className={`${poppins.className} bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base`}>
              Contact Support
              <span className="text-lg sm:text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
} 