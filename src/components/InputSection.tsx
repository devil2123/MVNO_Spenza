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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg text-[#144C94] mb-4">Cost Structure</h3>
          
          <div className="mb-6">
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
              This cost includes one-time expenses such as License Fees, IT Setup Costs, and Initial Marketing.
            </p>
          </div>

          <div>
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
              This includes recurring monthly costs such as employee salaries, IT support, and customer service operations necessary to run the business.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg text-[#144C94] mb-4">Revenue & Subscriber Metrics</h3>
          
          <div className="mb-4">
            <label className={labelClasses}>Initial Subscriber Count</label>
            <input
              type="number"
              value={inputs.initialSubscribers || ''}
              onChange={handleChange('initialSubscribers')}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F7470F] focus:border-[#F7470F] transition-colors duration-200"
              placeholder="0"
            />
          </div>

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
            <label className={labelClasses}>Monthly Growth Rate (%)</label>
            <input
              type="number"
              value={inputs.monthlyGrowthRate * 100 || ''}
              onChange={(e) => onChange('monthlyGrowthRate', (e.target.value === '' ? 0 : parseFloat(e.target.value)) / 100)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F7470F] focus:border-[#F7470F] transition-colors duration-200"
              placeholder="0"
            />
          </div>

          <div className="mb-4">
            <label className={labelClasses}>Monthly Churn Rate (%)</label>
            <input
              type="number"
              value={inputs.churnRate * 100 || ''}
              onChange={(e) => onChange('churnRate', (e.target.value === '' ? 0 : parseFloat(e.target.value)) / 100)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F7470F] focus:border-[#F7470F] transition-colors duration-200"
              placeholder="0"
            />
          </div>

          <div>
            <label className={labelClasses}>Projection Duration (months)</label>
            <input
              type="number"
              value={inputs.projectionMonths || ''}
              onChange={handleChange('projectionMonths')}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F7470F] focus:border-[#F7470F] transition-colors duration-200"
              placeholder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
