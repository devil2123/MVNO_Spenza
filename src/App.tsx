import React, { useState } from 'react';
import { Calculator, ExternalLink } from 'lucide-react';
import { MVNOInputs } from './types';
import { calculateProjections } from './utils/calculations';
import { InputSection } from './components/InputSection';
import { ResultsSection } from './components/ResultsSection';

const initialInputs: MVNOInputs = {
  upfrontCosts: 50000,
  monthlyOperatingExpenses: 7500,
  initialSubscribers: 1000,
  arpu: 40,
  acpu: 30,
  monthlyGrowthRate: 0.1,
  churnRate: 0.02,
  projectionMonths: 12
};

function App() {
  const [inputs, setInputs] = useState<MVNOInputs>(initialInputs);

  const handleInputChange = (field: keyof MVNOInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const projections = calculateProjections(inputs);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
          {/* Left: Title with Icon */}
          <div className="flex items-center space-x-4">
            <img
              src="https://res.cloudinary.com/dw2h36vj0/image/upload/v1744803023/ngjbeca4p4xg7urltb1v.jpg"
              alt="Spenza Logo"
              className="h-10 w-auto"
            />
            <div className="inline-flex items-center space-x-3">
              <h1 className="text-3xl md:text-4xl font-bold text-[#144C94]">
                MVNO Launch Calculator
              </h1>
              {/* Adjusted icon size to match heading */}
              <Calculator className="h-8 w-8 md:h-9 md:w-9 text-[#F7470F]" />
            </div>
          </div>

          {/* Right: CTA Button */}
          <a
            href="https://spenza.com/contact-the-telecom-expense-management-experts/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 lg:mt-0 inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-[#F7470F] hover:bg-[#d63d0d] transition duration-200"
          >
            Want to Launch an MVNO? Contact Us
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>

               {/* Subheading - centered with 80% width */}
        <div className="mb-10">
          <div className="mx-auto w-[90%]">
            <p className="text-gray-800 text-sm md:text-base leading-relaxed line-clamp-3 overflow-hidden">
              This tool helps you estimate the costs of starting your MVNO, covering everything from setup
              and licensing to ongoing operations. It simplifies budgeting and planning, giving you a clear
              financial roadmap for a successful launch. Ideal for startups and established operators alike, 
              it ensures you're prepared for the financial aspects of entering the MVNO market.
            </p>
          </div>
        </div>


        {/* Calculator Sections */}
        <div className="space-y-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow p-6 border-t-4 border-[#144C94]">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#3A3A3A]">Input Parameters</h2>
              <p className="mt-1 text-sm text-gray-600">
                Please enter all monetary values in US dollars ($)
              </p>
            </div>
            <InputSection inputs={inputs} onChange={handleInputChange} />
          </div>

          {/* Results Section */}
          <ResultsSection projections={projections} inputs={inputs} />
        </div>
      </div>
    </div>
  );
}

export default App;
