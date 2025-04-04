import React from "react";
import { MVNOInputs } from "../types";

interface InputSectionProps {
  inputs: MVNOInputs;
  onChange: (field: keyof MVNOInputs, value: number) => void;
}

export function InputSection({ inputs, onChange }: InputSectionProps) {
  const handleChange =
    (field: keyof MVNOInputs) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;

      // If input is empty, set it as an empty string
      if (rawValue === "") {
        onChange(field, "" as unknown as number); // Trick TypeScript
        return;
      }

      // Otherwise, parse the number normally
      const value = parseFloat(rawValue);
      onChange(field, value);
    };

  const inputClasses =
    "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F7470F] focus:border-[#F7470F] transition-colors duration-200";
  const labelClasses = "block text-sm font-medium text-[#3A3A3A]";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-[#144C94]">Upfront Costs</h3>
        <div>
          <label className={labelClasses}>License Fees (in dollars)</label>
          <input
            type="number"
            value={inputs.licenseFees}
            onChange={handleChange("licenseFees")}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>IT Setup Costs (in dollars)</label>
          <input
            type="number"
            value={inputs.itSetupCosts}
            onChange={handleChange("itSetupCosts")}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Initial Marketing (in dollars)</label>
          <input
            type="number"
            value={inputs.initialMarketing}
            onChange={handleChange("initialMarketing")}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-[#144C94]">
          Monthly Operating Expenses
        </h3>
        <div>
          <label className={labelClasses}>Monthly Salaries (in dollars)</label>
          <input
            type="number"
            value={inputs.monthlySalaries}
            onChange={handleChange("monthlySalaries")}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Monthly IT Support (in dollars)</label>
          <input
            type="number"
            value={inputs.monthlyITSupport}
            onChange={handleChange("monthlyITSupport")}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Customer Service Cost (in dollars)</label>
          <input
            type="number"
            value={inputs.customerServiceCost}
            onChange={handleChange("customerServiceCost")}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg text-[#144C94]">
          Revenue & Subscriber Metrics
        </h3>
        <div>
          <label className={labelClasses}>Initial Subscriber Count</label>
          <input
            type="number"
            value={inputs.initialSubscribers}
            onChange={handleChange("initialSubscribers")}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>ARPU (in dollars)</label>
          <input
            type="number"
            value={inputs.arpu}
            onChange={handleChange("arpu")}
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Monthly Growth Rate (%)</label>
          <input
            type="number"
            value={inputs.monthlyGrowthRate * 100}
            onChange={(e) =>
              onChange("monthlyGrowthRate", parseFloat(e.target.value) / 100)
            }
            className={inputClasses}
          />
        </div>
        <div>
          <label className={labelClasses}>Monthly Churn Rate (%)</label>
          <input
            type="number"
            value={inputs.churnRate * 100}
            onChange={(e) =>
              onChange("churnRate", parseFloat(e.target.value) / 100)
            }
            className={inputClasses}
          />
        </div>
      </div>
    </div>
  );
}
