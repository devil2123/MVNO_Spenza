import React from 'react';
import { MonthlyProjection } from '../types';
import { formatCurrency, formatNumber } from '../utils/calculations';

interface ResultsSectionProps {
  projections: MonthlyProjection[];
}

export function ResultsSection({ projections }: ResultsSectionProps) {
  const lastMonth = projections[projections.length - 1];
  const breakEvenMonth = projections.findIndex(p => p.cumulativeProfit > 0) + 1;

  const getProfitColor = (amount: number) => {
    return amount < 0 ? 'text-red-600' : 'text-green-600';
  };

  return (
    <div className="space-y-6">
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
              <th className="px-6 py-3 text-left text-xs font-medium text-[#3A3A3A] uppercase tracking-wider">Cumulative Profit</th>
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
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${getProfitColor(projection.cumulativeProfit)}`}>
                  {formatCurrency(projection.cumulativeProfit)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}