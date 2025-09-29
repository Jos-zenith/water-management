import { useState } from 'react';
import { DollarSign, TrendingUp, Calculator, CheckCircle } from 'lucide-react';

const ROIAnalysis = () => {
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios = [
    {
      name: 'Conservative (20% NRW Reduction)',
      reduction: 20,
      annualSaving: 115.2, // in crores
      paybackYears: 4.3
    },
    {
      name: 'Moderate (30% NRW Reduction)',
      reduction: 30,
      annualSaving: 172.8, // in crores
      paybackYears: 2.9
    },
    {
      name: 'Optimistic (40% NRW Reduction)',
      reduction: 40,
      annualSaving: 230.4, // in crores
      paybackYears: 2.2
    }
  ];

  const costBreakdown = [
    { item: 'Bulk Meters', cost: 50, quantity: 1, total: 50 },
    { item: 'Pressure Transmitters', cost: 10, quantity: 2, total: 20 },
    { item: 'Acoustic Loggers', cost: 15, quantity: 30, total: 450 },
    { item: 'LoRaWAN Gateway', cost: 30, quantity: 1, total: 30 },
    { item: 'Smart PRV', cost: 20, quantity: 1, total: 20 }
  ];

  const totalCost = costBreakdown.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Investment & Returns Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive ROI analysis demonstrating the financial viability and 
            long-term benefits of our water management solution.
          </p>
        </div>

        {/* Key Financial Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-red-50 rounded-2xl p-6 text-center border border-red-100">
            <div className="text-3xl font-bold text-red-600 mb-2">₹576 Cr</div>
            <div className="text-gray-700 font-medium">Current Annual Loss</div>
            <div className="text-sm text-gray-600 mt-1">40% water loss before billing</div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">₹{totalCost}K</div>
            <div className="text-gray-700 font-medium">Implementation Cost</div>
            <div className="text-sm text-gray-600 mt-1">Per village (5km, 100 houses)</div>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">35%</div>
            <div className="text-gray-700 font-medium">Target NRW Reduction</div>
            <div className="text-sm text-gray-600 mt-1">From 40% to 10-15%</div>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 text-center border border-purple-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">2.2-4.3</div>
            <div className="text-gray-700 font-medium">Payback Years</div>
            <div className="text-sm text-gray-600 mt-1">Scenario dependent</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cost Breakdown */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Implementation Cost</h3>
            </div>

            <div className="space-y-4">
              {costBreakdown.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">{item.item}</span>
                    <span className="text-lg font-bold text-blue-600">₹{item.total}K</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{item.cost}K × {item.quantity} unit{item.quantity > 1 ? 's' : ''}</span>
                    <span>{((item.total / totalCost) * 100).toFixed(1)}% of total</span>
                  </div>
                </div>
              ))}
              
              <div className="bg-blue-600 rounded-xl p-4 text-white">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Investment</span>
                  <span className="text-2xl font-bold">₹{totalCost}K</span>
                </div>
                <div className="text-blue-100 text-sm mt-1">
                  For one village pilot implementation
                </div>
              </div>
            </div>
          </div>

          {/* ROI Scenarios */}
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 border border-emerald-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">ROI Scenarios</h3>
            </div>

            <div className="space-y-4 mb-6">
              {scenarios.map((scenario, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedScenario(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    selectedScenario === index
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{scenario.name}</span>
                    <CheckCircle className={`w-5 h-5 ${
                      selectedScenario === index ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                  <div className={`text-sm mt-1 ${
                    selectedScenario === index ? 'text-emerald-100' : 'text-gray-600'
                  }`}>
                    {scenario.reduction}% reduction in NRW losses
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Scenario Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {scenarios[selectedScenario].name}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    ₹{scenarios[selectedScenario].annualSaving}Cr
                  </div>
                  <div className="text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {scenarios[selectedScenario].paybackYears}
                  </div>
                  <div className="text-gray-600">Payback Years</div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">
                  <strong>Calculation:</strong> Based on ₹576 crore current annual loss, 
                  reducing NRW by {scenarios[selectedScenario].reduction}% saves 
                  ₹{scenarios[selectedScenario].annualSaving} crores annually.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Scale Analysis */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">Statewide Implementation Impact</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">1,000</div>
                <div className="text-xl font-semibold mb-2">Villages</div>
                <div className="text-blue-100">Target implementation scale</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">₹57 Cr</div>
                <div className="text-xl font-semibold mb-2">Total Investment</div>
                <div className="text-blue-100">1,000 villages × ₹5.7L each</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">₹201 Cr</div>
                <div className="text-xl font-semibold mb-2">Annual Savings</div>
                <div className="text-blue-100">35% reduction in state losses</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="text-xl font-semibold">
                  Statewide ROI: 3.5x return on investment in first year
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROIAnalysis;