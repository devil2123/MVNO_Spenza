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
  monthlyGrowthRate: 0.10,
  churnRate: 0.02,
  projectionMonths: 12
};

function App() {
  const [inputs, setInputs] = useState<MVNOInputs>(initialInputs);

  const handleInputChange = (field: keyof MVNOInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const projections = calculateProjections(inputs);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          {/* Left section: Heading and Subtext */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-start md:space-x-6 mb-4 md:mb-0">
            <img
              src="https://res.cloudinary.com/dw2h36vj0/image/upload/v1744803023/ngjbeca4p4xg7urltb1v.jpg"
              alt="Spenza Logo"
              className="h-10 w-auto mt-1"
            />
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-4xl font-bold text-[#144C94]">MVNO Launch Calculator</h1>
                <Calculator className="h-7 w-7 text-[#F7470F]" />
              </div>
              <p className="mt-2 text-gray-600 text-base max-w-2xl">
                The MVNO Launch Cost Calculator breaks down the essential costs of starting your mobile business,
                enabling smart budgeting and strategic decision-making.
              </p>
            </div>
          </div>

          {/* Right section: CTA */}
          <a
            href="https://spenza.com/contact-the-telecom-expense-management-experts/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#F7470F] hover:bg-[#d63d0d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F7470F] transition-colors duration-200"
          >
            Want to Launch an MVNO? Contact Us
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Input + Results Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#144C94]">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#3A3A3A]">Input Parameters</h2>
              <p className="mt-2 text-sm text-gray-600">Please enter all monetary values in US dollars ($)</p>
            </div>
            <InputSection inputs={inputs} onChange={handleInputChange} />
          </div>

          <ResultsSection projections={projections} inputs={inputs} />
        </div>
      </div>
    </div>
  );
}

export default App;
