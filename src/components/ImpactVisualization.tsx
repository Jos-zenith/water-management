import { useState, useEffect } from 'react';
import { TrendingDown, Droplets, Users, Target, BarChart3 } from 'lucide-react';

const ImpactVisualization = () => {
  const [animateValue, setAnimateValue] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState(0);

  const metrics = [
    {
      title: 'Water Loss Reduction',
      current: 40,
      target: 15,
      unit: '%',
      color: 'bg-red-500',
      targetColor: 'bg-emerald-500',
      icon: TrendingDown,
      description: 'Non-Revenue Water reduction from implementation'
    },
    {
      title: 'Daily Water Saved',
      current: 0,
      target: 10000,
      unit: 'L',
      color: 'bg-blue-500',
      targetColor: 'bg-cyan-500',
      icon: Droplets,
      description: 'Liters saved per day per village'
    },
    {
      title: 'Households Benefited',
      current: 0,
      target: 100,
      unit: '',
      color: 'bg-gray-500',
      targetColor: 'bg-purple-500',
      icon: Users,
      description: 'Direct household beneficiaries per pilot village'
    },
    {
      title: 'Cost Reduction',
      current: 0,
      target: 35,
      unit: '%',
      color: 'bg-orange-500',
      targetColor: 'bg-green-500',
      icon: Target,
      description: 'Operational cost reduction for water authority'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimateValue(prev => prev < 100 ? prev + 1 : 0);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const stateWideImpact = {
    currentLoss: 576, // crores
    potentialSaving: 201.6, // 35% of 576
    householdsServed: 5200000, // 52 lakh households
    villagesTargeted: 1000
  };

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Projected Impact Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive visualization of expected outcomes from our water management solution, 
            from pilot implementation to statewide deployment.
          </p>
        </div>

        {/* Village Level Impact */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Village Level Impact</h3>
          
          {/* Metric Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedMetric(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200 ${
                    selectedMetric === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{metric.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Metric Visualization */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {metrics[selectedMetric].title}
              </h4>
              <p className="text-gray-600">{metrics[selectedMetric].description}</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Current State */}
              <div className="text-center">
                <div className="bg-gray-100 p-8 rounded-2xl mb-4">
                  <div className="text-4xl font-bold text-gray-500 mb-2">
                    {metrics[selectedMetric].current.toLocaleString()}{metrics[selectedMetric].unit}
                  </div>
                  <div className="text-gray-600 font-medium">Current State</div>
                </div>
                <div className="text-sm text-gray-500">Before implementation</div>
              </div>

              {/* Arrow */}
              <div className="hidden lg:block">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-300 to-emerald-300 rounded-full"></div>
                  <div className="w-4 h-4 bg-emerald-500 transform rotate-45 border-r-2 border-t-2 border-emerald-600"></div>
                </div>
              </div>

              {/* Target State */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-100 to-cyan-100 p-8 rounded-2xl mb-4 border-2 border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">
                    {metrics[selectedMetric].target.toLocaleString()}{metrics[selectedMetric].unit}
                  </div>
                  <div className="text-emerald-700 font-medium">Target Achievement</div>
                </div>
                <div className="text-sm text-emerald-600 font-medium">After implementation</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${(animateValue / 100) * 75}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Current</span>
                <span>Target: 75% improvement</span>
              </div>
            </div>
          </div>
        </div>

        {/* State Level Impact */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Statewide Potential</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <TrendingDown className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-900">Current Loss</h4>
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">₹{stateWideImpact.currentLoss}Cr</div>
              <div className="text-gray-600">Annual water revenue loss</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <Target className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="font-bold text-gray-900">Potential Savings</h4>
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">₹{stateWideImpact.potentialSaving}Cr</div>
              <div className="text-gray-600">35% loss reduction target</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900">Households Served</h4>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{(stateWideImpact.householdsServed / 100000).toFixed(1)}L</div>
              <div className="text-gray-600">Rural households benefited</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900">Implementation Scale</h4>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{stateWideImpact.villagesTargeted}</div>
              <div className="text-gray-600">Target villages for pilot</div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline Impact */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">5-Year Implementation Roadmap</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { year: 'Year 1', villages: 50, savings: 10.1, households: 5000 },
              { year: 'Year 2', villages: 150, savings: 30.2, households: 15000 },
              { year: 'Year 3', villages: 300, savings: 60.5, households: 30000 },
              { year: 'Year 4', villages: 600, savings: 121.0, households: 60000 },
              { year: 'Year 5', villages: 1000, savings: 201.6, households: 100000 }
            ].map((phase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-xl font-bold mb-2">{phase.year}</div>
                <div className="space-y-2 text-sm">
                  <div>{phase.villages} villages</div>
                  <div>₹{phase.savings}Cr saved</div>
                  <div>{phase.households.toLocaleString()} homes</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4">
              <div className="text-2xl font-bold mb-2">Total 5-Year Impact</div>
              <div className="text-lg">₹201.6 Crore annual savings • 1 Lakh households served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactVisualization;