import React from 'react';
import { MVNOInputs } from '../types';

interface InputSectionProps {
  inputs: MVNOInputs;
  onChange: (field: keyof MVNOInputs, value: number) => void;
}

export function InputSection({ inputs, onChange }: InputSectionProps) {
  const handleChange = (field: keyof MVNOInputs) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? 0 : parseFloat(e.target.value);
    onChange(field, value);
  };

  const inputClasses = "pl-7 mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F7470F] focus:border-[#F7470F] transition-colors duration-200";
  const labelClasses = "block text-sm font-medium text-[#3A3A3A]";
  const descriptionClasses = "mt-1 text-sm text-gray-500";
  const sectionClasses = "bg-white rounded-lg p-6 shadow-sm border border-gray-100";
  const inputGroupClasses = "mb-6 last:mb-0";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className={sectionClasses}>
        <h3 className="font-semibold text-lg text-[#144C94] mb-6 pb-3 border-b border-gray-100">Cost Structure</h3>
        
        <div className={inputGroupClasses}>
          <label className={labelClasses}>Upfront Costs</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
            <input
              type="number"
              value={inputs.upfrontCosts || ''}
              onChange={handleChange('upfrontCosts')}
              className={inputClasses}
              placeholder="0"
            />
          </div>
          <p className={descriptionClasses}>
            One-time expenses for licenses, IT setup, and initial marketing.
          </p>
        </div>

        <div className={inputGroupClasses}>
          <label className={labelClasses}>Monthly Operating Expenses</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
            <input
              type="number"
              value={inputs.monthlyOperatingExpenses || ''}
              onChange={handleChange('monthlyOperatingExpenses')}
              className={inputClasses}
              placeholder="0"
            />
          </div>
          <p className={descriptionClasses}>
            Ongoing costs for salaries, IT support, and customer service.
          </p>
        </div>

        <div className={inputGroupClasses}>
          <label className={labelClasses}>ACPU - Average Cost Per User</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
            <input
              type="number"
              value={inputs.acpu || ''}
              onChange={handleChange('acpu')}
              className={inputClasses}
              placeholder="0"
            />
          </div>
          <p className={descriptionClasses}>
            What you pay the operator per subscriber
          </p>
        </div>

        <div className={inputGroupClasses}>
          <label className={labelClasses}>Projection Duration</label>
          <input
            type="number"
            value={inputs.projectionMonths || ''}
            onChange={handleChange('projectionMonths')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F7470F] focus:border-[#F7470F] transition-colors duration-200"
            placeholder="0"
          />
          <p className={descriptionClasses}>Number of months to project financials</p>
        </div>
      </div>

      <div className={sectionClasses}>
        <h3 className="font-semibold text-lg text-[#144C94] mb-6 pb-3 border-b border-gray-100">Revenue & Subscriber Metrics</h3>
        
        <div className={inputGroupClasses}>
          <label className={labelClasses}>Initial Subscriber Count</label>
          <input
            type="number"
            value={inputs.initialSubscribers || ''}
            onChange={handleChange('initialSubscribers')}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F7470F] focus:border-[#F7470F] transition-colors duration-200"
            placeholder="0"
          />
          <p className={descriptionClasses}>Number of subscribers at launch</p>
        </div>

        <div className={inputGroupClasses}>
          <label className={labelClasses}>Monthly Growth Rate</label>
          <div className="relative">
            <input
              type="number"
              value={inputs.monthlyGrowthRate * 100 || ''}
              onChange={(e) => onChange('monthlyGrowthRate', (e.target.value === '' ? 0 : parseFloat(e.target.value)) / 100)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 pr-8 text-black focus:outline-none focus:ring-2 focus:ring-[#F7470F] focus:border-[#F7470F] transition-colors duration-200"
              placeholder="0"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">%</span>
          </div>
          <p className={descriptionClasses}>Expected monthly subscriber growth</p>
        </div>

        <div className={inputGroupClasses}>
          <label className={labelClasses}>ARPU - Average Revenue Per User</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
            <input
              type="number"
              value={inputs.arpu || ''}
              onChange={handleChange('arpu')}
              className={inputClasses}
              placeholder="0"
            />
          </div>
          <p className={descriptionClasses}>
            Enter the cost of the plan being offered to users
          </p>
        </div>


        <div className={inputGroupClasses}>
          <label className={labelClasses}>Monthly Churn Rate</label>
          <div className="relative">
            <input
              type="number"
              value={inputs.churnRate * 100 || ''}
              onChange={(e) => onChange('churnRate', (e.target.value === '' ? 0 : parseFloat(e.target.value)) / 100)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 pr-8 text-black focus:outline-none focus:ring-2 focus:ring-[#F7470F] focus:border-[#F7470F] transition-colors duration-200"
              placeholder="0"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">%</span>
          </div>
          <p className={descriptionClasses}>Expected monthly subscriber loss</p>
        </div>
      </div>
    </div>
  );
}
