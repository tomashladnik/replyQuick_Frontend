import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function PhoneMockup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const formattedNumber = "+1" + phoneNumber;
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: formattedNumber }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to send SMS");
      }
      setPhoneNumber("");
      alert("Message sent successfully!");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative bg-white rounded-[40px] shadow-2xl border border-black w-[340px] h-[500px] flex flex-col items-center pt-8 pb-6 px-4"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)", borderWidth: 5, borderColor: "black" }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black/80 rounded-b-2xl z-10" />
        {/* Status bar */}
        <div className="flex justify-between items-center w-full px-2 mt-2 mb-4">
          <span className="text-xs font-semibold text-black">9:41</span>
          <div className="flex gap-1 items-center">
            <span className="w-3 h-3 bg-gray-300 rounded-full inline-block" />
            <span className="w-3 h-3 bg-gray-300 rounded-full inline-block" />
            <span className="w-3 h-3 bg-gray-300 rounded-full inline-block" />
          </div>
        </div>
        {/* Card */}
        <div className="bg-[#f7f7f7] rounded-2xl shadow p-5 w-full max-w-[300px] space-y-4 border border-gray-100 mt-4">
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
          <p className="text-sm text-gray-800 font-medium">Experience 24/7 AI follow-Ups.</p>
          {/* Input */}
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white placeholder:text-gray-400"
            onChange={handlePhoneChange}
            value={phoneNumber}
            disabled={isLoading}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {/* CTA */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Text Me"}
          </button>
        </div>
      </div>
    </div>
  );
} 