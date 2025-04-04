import React, { useState } from 'react';
import { Calculator, Network, ExternalLink } from 'lucide-react';
import { MVNOInputs } from './types';
import { calculateProjections } from './utils/calculations';
import { InputSection } from './components/InputSection';
import { ResultsSection } from './components/ResultsSection';

const initialInputs: MVNOInputs = {
  // Upfront Costs
  licenseFees: 10000,
  itSetupCosts: 25000,
  initialMarketing: 15000,
  
  // Monthly Operating Expenses
  monthlySalaries: 5000,
  monthlyITSupport: 1500,
  customerServiceCost: 1000,
  
  // Per Subscriber Costs
  wholesaleNetworkFee: 15,
  simCardCost: 5,
  marketingPerSubscriber: 10,
  
  // Revenue & Subscriber Metrics
  arpu: 40,
  monthlyGrowthRate: 0.15,
  churnRate: 0.02,
  initialSubscribers: 1000,
  
  // Time Horizon
  projectionMonths: 36
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
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Network className="h-8 w-8 text-[#F7470F]" />
            <h1 className="text-3xl font-bold text-[#144C94]">MVNO Launch Calculator</h1>
            <span className="text-[#F7470F] font-semibold">by Spenza</span>
            <Calculator className="h-8 w-8 text-[#F7470F]" />
          </div>
          <a
            href="https://spenza.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#F7470F] hover:bg-[#d63d0d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F7470F] transition-colors duration-200"
          >
            Want to Launch an MVNO? Contact Us
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#144C94]">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#3A3A3A]">Input Parameters</h2>
              <p className="mt-2 text-sm text-gray-600">Please enter all costs in US dollars ($)</p>
            </div>
            <InputSection inputs={inputs} onChange={handleInputChange} />
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#3A3A3A]">Projections & Analysis</h2>
            <ResultsSection projections={projections} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;