import React, { useState } from 'react';
import { MonthlyProjection, MVNOInputs } from '../types';
import { formatCurrency, formatNumber } from '../utils/calculations';
import { EmailModal } from './EmailModal';
import { Mail } from 'lucide-react';

interface ResultsSectionProps {
  projections: MonthlyProjection[];
  inputs: MVNOInputs;
}

export function ResultsSection({ projections, inputs }: ResultsSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  if (!projections || projections.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg">
        <p className="text-lg text-gray-600">No projection data available yet.</p>
      </div>
    );
  }

  const lastMonth = projections[projections.length - 1];
  const breakEvenMonth = projections.findIndex(p => p.cumulativeProfit > 0) + 1;

  const getProfitColor = (amount: number) => {
    return amount < 0 ? 'text-red-600' : 'text-green-600';
  };

  const handleEmailSubmit = (email: string) => {
    // Here you would typically integrate with your email service
    console.log('Sending analysis to:', email);
    setSuccessMessage(`Analysis sent to ${email}`);
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-[#3A3A3A]">Projections & Analysis</h2>
          <p className="text-sm text-gray-600">
            Financial projections for the next {inputs.projectionMonths} months
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-[#144C94] text-white rounded-md hover:bg-[#0f3a70] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#144C94] transition-colors duration-200"
        >
          <Mail className="w-4 h-4 mr-2" />
          Mail the Analysis
        </button>
      </div>

      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-4">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#144C94]">
          <h3 className="text-lg font-medium text-[#3A3A3A]">Final Subscriber Count</h3>
          <p className="mt-2 text-3xl font-semibold text-[#144C94]">
            {formatNumber(lastMonth.subscribers)}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#F7470F]">
          <h3 className="text-lg font-medium text-[#3A3A3A]">Monthly Revenue</h3>
          <p className="mt-2 text-3xl font-semibold text-[#F7470F]">
            {formatCurrency(lastMonth.revenue)}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#144C94]">
          <h3 className="text-lg font-medium text-[#3A3A3A]">Break-even Month</h3>
          <p className="mt-2 text-3xl font-semibold text-[#144C94]">
            {breakEvenMonth === 0 ? 'N/A' : `Month ${breakEvenMonth}`}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#F7470F]">
          <h3 className="text-lg font-medium text-[#3A3A3A]">Cumulative Profit</h3>
          <p className={`mt-2 text-3xl font-semibold ${getProfitColor(lastMonth.cumulativeProfit)}`}>
            {formatCurrency(lastMonth.cumulativeProfit)}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#3A3A3A] uppercase tracking-wider">Month</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#3A3A3A] uppercase tracking-wider">Subscribers</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#3A3A3A] uppercase tracking-wider">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#3A3A3A] uppercase tracking-wider">Costs</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#3A3A3A] uppercase tracking-wider">Monthly Profit</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projections.map((projection) => (
              <tr key={projection.month} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#3A3A3A]">{projection.month}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#3A3A3A]">{formatNumber(projection.subscribers)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#3A3A3A]">{formatCurrency(projection.revenue)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#3A3A3A]">{formatCurrency(projection.costs)}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${getProfitColor(projection.profit)}`}>
                  {formatCurrency(projection.profit)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EmailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleEmailSubmit}
      />
    </div>
  );
}
