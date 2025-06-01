"use client"
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const ROICalculator = () => {
  const [clientValue, setClientValue] = useState<string>("");
  const [missedCalls, setMissedCalls] = useState<string>("");
  const [closeRate, setCloseRate] = useState<string>("");
  const [result, setResult] = useState<{
    weekly: number;
    monthly: number;
    yearly: number;
  } | null>(null);

  const calculateROI = () => {
    const avgClientValue = parseFloat(clientValue) || 0;
    const weeklyMissedCalls = parseFloat(missedCalls) || 0;
    const avgCloseRate = parseFloat(closeRate) || 0;

    // Calculate potential clients lost
    const weeklyLostClients = weeklyMissedCalls * (avgCloseRate / 100);
    const monthlyLostClients = weeklyLostClients * 4;
    const yearlyLostClients = monthlyLostClients * 12;

    // Calculate revenue loss
    const weeklyLoss = weeklyLostClients * avgClientValue;
    const monthlyLoss = monthlyLostClients * avgClientValue;
    const yearlyLoss = yearlyLostClients * avgClientValue;

    setResult({
      weekly: weeklyLoss,
      monthly: monthlyLoss,
      yearly: yearlyLoss,
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 mb-24">
      <h2 className={`text-3xl font-bold text-center mb-12 ${poppins.className}`}>
        ROI Calculator
      </h2>
      
      <div className="bg-[#1C1C1C] p-8 rounded-3xl space-y-8">
        {/* Average Client Value Input */}
        <div className="space-y-2">
          <label className={`block text-white text-xl font-semibold mb-1 ${poppins.className}`}>
            Average Client Value:
          </label>
          <input 
            type="number"
            value={clientValue}
            onChange={(e) => setClientValue(e.target.value)}
            placeholder="Enter amount"
            className="w-full bg-transparent border-b border-gray-600 text-white px-1 py-2 focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Missed Calls Input */}
        <div className="space-y-2">
          <label className={`block text-white text-xl font-semibold mb-1 ${poppins.className}`}>
            Missed Calls per Week:
          </label>
          <input 
            type="number"
            value={missedCalls}
            onChange={(e) => setMissedCalls(e.target.value)}
            placeholder="Enter number"
            className="w-full bg-transparent border-b border-gray-600 text-white px-1 py-2 focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Close Rate Input */}
        <div className="space-y-2">
          <label className={`block text-white text-xl font-semibold mb-1 ${poppins.className}`}>
            Average Close Rate (%):
          </label>
          <input 
            type="number"
            value={closeRate}
            onChange={(e) => setCloseRate(e.target.value)}
            placeholder="Enter percentage"
            className="w-full bg-transparent border-b border-gray-600 text-white px-1 py-2 focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Calculate Button */}
        <div className="text-center pt-4">
          <button 
            onClick={calculateROI}
            className={`bg-transparent text-white border border-white rounded-full px-12 py-3 hover:bg-white hover:text-black transition-colors ${poppins.className}`}
          >
            Calculate ROI
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-8 space-y-4 text-white">
            <h3 className={`text-xl font-semibold ${poppins.className}`}>Potential Revenue Loss:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">Weekly</p>
                <p className={`text-2xl font-bold ${poppins.className}`}>${result.weekly.toFixed(2)}</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">Monthly</p>
                <p className={`text-2xl font-bold ${poppins.className}`}>${result.monthly.toFixed(2)}</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">Yearly</p>
                <p className={`text-2xl font-bold ${poppins.className}`}>${result.yearly.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ROICalculator; 