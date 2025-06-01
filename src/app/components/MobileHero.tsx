'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Poppins } from "next/font/google"
import { useRouter } from "next/navigation"
import { useState } from "react"
import DottedBackground from "./dotted-background"
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

export default function MobileHero() {
    const router = useRouter()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Only allow digits and limit to 10 digits
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 10) {
            setPhoneNumber(value);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            // Add +1 prefix when sending to API
            const formattedNumber = '+1' + phoneNumber;

            const response = await fetch('/api/send-sms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber: formattedNumber }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send SMS');
            }

            // Clear the input after successful send
            setPhoneNumber('');
            alert('Message sent successfully!');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send message');
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <DottedBackground>
            <div className="px-4 py-8 md:hidden min-h-screen">
                {/* 1. Heading */}
                <div className="mb-8">
                    <h1 className={`text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 ${poppins.className}`}>
                        Stop Losing Leads — Automate Sales Calls & Follow-ups with AI
                    </h1>
                </div>

                {/* 2. AI Card */}
                <div className="mb-10 flex justify-center">
                    <div className="bg-white rounded-3xl shadow-xl p-5 w-[340px] space-y-4 border border-gray-200">
                        {/* Top Bar */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="bg-[#f4f4f4] rounded-lg px-3 py-1 flex items-center gap-1 shadow-sm">
                                    <span className="text-xs font-bold text-black">RQₐᵢ</span>
                                </div>
                                <span className="text-sm font-semibold text-black">ReplyQuick's AI</span>
                            </div>
                            <span className="text-xs text-gray-500">9:41 AM</span>
                        </div>

                        {/* Subheading */}
                        <p className="text-sm text-gray-800 font-medium">
                            Experience 24/7 AI follow-ups.
                        </p>

                        {/* Input */}
                        <input
                            type="tel"
                            placeholder="(123) 456-7890"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white placeholder:text-gray-400"
                            onChange={handlePhoneChange}
                            value={phoneNumber}
                            disabled={isLoading}
                        />

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        {/* CTA */}
                        <button 
                            onClick={handleSubmit} 
                            disabled={isLoading}
                            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Sending...' : 'Text Me'}
                        </button>
                    </div>
                </div>

                {/* 3. Subheading */}
                <div className="mb-6">
                    <h2 className={`text-xl sm:text-2xl font-bold text-black ${poppins.className}`}>
                        ReplyQuick.AI – Your Sales Assistant that Works 24/7
                    </h2>
                </div>

                {/* 4. Features List */}
                <div className="space-y-3 text-black">
                    <Feature text=" Never Miss Another Call or Message" />
                    <Feature text=" 24/7 Lead Capture & Instant Responses" />
                    <Feature text=" Close More Deals Without Lifting a Finger" />
                </div>

                {/* 5. Book Demo CTA */}
                <div className="mt-10">
                    <Button 
                        onClick={() => router.push('/book-demo')} 
                        className={`w-full cursor-pointer ${poppins.className} bg-black font-medium hover:bg-gray-900 text-white rounded-full px-6 py-5 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 group`}
                    >
                        <span className="text-base font-semibold">Book a Demo</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                </div>
            </div>
        </DottedBackground>
    )
}

// Reusable Feature Row
const Feature = ({ text }: { text: string }) => (
    <div className="flex items-center gap-2">
        <p className={`text-base font-medium`}>{text}</p>
    </div>
)