import { AlertTriangle, Droplets, TrendingDown, DollarSign } from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: '40% Water Loss',
      description: 'Significant Non-Revenue Water (NRW) loss before billing reaches consumers',
      impact: 'Massive resource wastage',
      color: 'text-red-500'
    },
    {
      icon: DollarSign,
      title: '₹576 Crore Annual Loss',
      description: 'Direct financial impact on Kerala Water Authority as of 2022',
      impact: 'Unsustainable economics',
      color: 'text-orange-500'
    },
    {
      icon: Droplets,
      title: 'Inefficient Distribution',
      description: 'Lack of real-time monitoring and pressure management systems',
      impact: 'Poor service quality',
      color: 'text-blue-500'
    },
    {
      icon: AlertTriangle,
      title: 'Limited Leak Detection',
      description: 'Delayed identification and repair of pipeline issues',
      impact: 'Prolonged losses',
      color: 'text-yellow-500'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            The Water Crisis Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kerala faces a critical water management challenge despite being a water-rich state. 
            The primary issue lies in distribution inefficiencies and infrastructure gaps.
          </p>
        </div>

        {/* Key Statistic Highlight */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 mb-16 border border-red-100">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-4 rounded-2xl">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Critical Impact</h3>
                <p className="text-gray-600">State-wide water management challenge</p>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-5xl font-bold text-red-600 mb-2">₹576 Crore</div>
              <p className="text-lg text-gray-700">Annual financial loss due to 40% water wastage</p>
              <p className="text-sm text-gray-500 mt-1">Source: Kerala Water Authority, 2022</p>
            </div>
          </div>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-white p-3 rounded-xl shadow-md ${problem.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                    <div className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                      {problem.impact}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Preview */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Our Comprehensive Solution</h3>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Implementing District Metered Areas (DMA) with smart monitoring, community engagement 
              through Jalodayam credits, and data-driven optimization to reduce losses by 35%.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Smart Infrastructure</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Community Incentives</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="font-semibold">Real-time Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;