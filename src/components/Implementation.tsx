import { useState } from 'react';
import { 
  MapPin, 
  Users, 
  Smartphone, 
  Shield, 
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Target,
  TrendingUp
} from 'lucide-react';

const Implementation = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 'challenges', label: 'Challenges & Solutions', icon: AlertTriangle },
    { id: 'adoption', label: 'User Adoption Strategy', icon: Users },
    { id: 'technology', label: 'Technology Integration', icon: Smartphone },
    { id: 'sustainability', label: 'Long-term Sustainability', icon: Target }
  ];

  const challenges = [
    {
      title: 'Equity & Accessibility Concerns',
      problem: 'Fixed savings targets could be unfair to households already using water efficiently or with limited financial capacity.',
      solution: 'Implement tiered credit systems based on percentage reduction from historical usage rather than absolute targets. Provide sliding scale rewards based on household size and economic status.',
      implementation: 'Develop personalized baselines using 6-month usage history and demographic data.'
    },
    {
      title: 'Technology Adoption Barriers',
      problem: 'Rural communities may face digital literacy challenges and resistance to new monitoring systems.',
      solution: 'Comprehensive community outreach with local language support, hands-on training workshops, and peer-to-peer learning programs.',
      implementation: 'Partner with local schools and community leaders. Create visual guides and provide 24/7 multilingual support.'
    },
    {
      title: 'High Initial Investment',
      problem: 'Smart meter infrastructure and system development require significant upfront capital.',
      solution: 'Phased rollout with government funding, public-private partnerships, and demonstrated ROI from pilot projects.',
      implementation: 'Start with 50-village pilot, secure state government backing, and showcase measurable results for scaling.'
    },
    {
      title: 'Credit System Value Perception',
      problem: 'Users may not see tangible value in digital credits without real-world redemption options.',
      solution: 'Partner with local businesses, cooperatives, and government services to create meaningful reward ecosystems.',
      implementation: 'Establish partnerships with grocery stores, fuel stations, and utility providers for credit redemption.'
    }
  ];

  const adoptionStrategies = [
    {
      title: 'Community Champions Program',
      description: 'Identify and train local influencers to become water conservation ambassadors',
      metrics: 'Target: 2-3 champions per 100 households'
    },
    {
      title: 'School Integration',
      description: 'Engage children as change agents through educational programs and family challenges',
      metrics: 'Target: 80% school participation rate'
    },
    {
      title: 'Panchayat Partnerships',
      description: 'Work with local government bodies for official endorsement and integration',
      metrics: 'Target: 100% Panchayat adoption'
    },
    {
      title: 'Progressive Incentives',
      description: 'Start with small rewards and gradually increase benefits as adoption grows',
      metrics: 'Target: 70% household participation in Year 1'
    }
  ];

  const technologyFeatures = [
    {
      title: 'Smart Water Meters',
      description: 'IoT-enabled meters with real-time data transmission',
      benefits: ['Automatic usage tracking', 'Leak detection alerts', 'Consumption analytics']
    },
    {
      title: 'Mobile Application',
      description: 'User-friendly app for monitoring and engagement',
      benefits: ['Usage visualization', 'Credit tracking', 'Community leaderboards']
    },
    {
      title: 'Data Analytics Platform',
      description: 'Advanced analytics for system optimization',
      benefits: ['Predictive maintenance', 'Usage pattern analysis', 'ROI monitoring']
    },
    {
      title: 'LoRaWAN Network',
      description: 'Long-range, low-power communication infrastructure',
      benefits: ['Wide coverage area', 'Low maintenance', 'Cost-effective scaling']
    }
  ];

  const sustainabilityPillars = [
    {
      title: 'Financial Sustainability',
      icon: TrendingUp,
      strategies: [
        'User fees for premium features',
        'Government operational grants',
        'Private sector partnerships',
        'Carbon credit monetization'
      ]
    },
    {
      title: 'Technical Maintenance',
      icon: Shield,
      strategies: [
        'Local technician training programs',
        'Preventive maintenance schedules',
        'Equipment standardization',
        'Remote monitoring capabilities'
      ]
    },
    {
      title: 'Community Ownership',
      icon: Users,
      strategies: [
        'User committee formation',
        'Transparent governance structures',
        'Regular community meetings',
        'Feedback integration mechanisms'
      ]
    },
    {
      title: 'Continuous Improvement',
      icon: BookOpen,
      strategies: [
        'Regular system updates',
        'Feature enhancement based on feedback',
        'Technology upgrade pathways',
        'Knowledge sharing networks'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Implementation Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive approach to address challenges, ensure user adoption, 
            and maintain long-term sustainability of the water management system.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium hidden sm:inline">{tab.label}</span>
                <span className="font-medium sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 0 && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Challenges & Solutions</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-red-50 p-6 border-b border-red-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h4>
                    <p className="text-gray-700">{challenge.problem}</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h5 className="font-semibold text-emerald-700 mb-2">Solution Approach:</h5>
                      <p className="text-gray-700">{challenge.solution}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Implementation:</h5>
                      <p className="text-gray-700">{challenge.implementation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">User Adoption Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {adoptionStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{strategy.title}</h4>
                      <p className="text-gray-700 mb-3">{strategy.description}</p>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <span className="text-sm font-medium text-blue-700">{strategy.metrics}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 text-white mt-12">
              <h4 className="text-2xl font-bold text-center mb-6">Adoption Timeline</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-2">Month 1-3</div>
                  <div className="text-sm">Community Outreach</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-2">Month 4-6</div>
                  <div className="text-sm">System Deployment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-2">Month 7-12</div>
                  <div className="text-sm">User Onboarding</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-2">Year 2+</div>
                  <div className="text-sm">Full Adoption</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Technology Integration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologyFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-emerald-500 p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-blue-100">{feature.description}</p>
                  </div>
                  <div className="p-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Benefits:</h5>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Long-term Sustainability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sustainabilityPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-gray-50 p-6 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="bg-emerald-100 p-3 rounded-xl">
                          <Icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">{pillar.title}</h4>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-3">
                        {pillar.strategies.map((strategy, strategyIndex) => (
                          <div key={strategyIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                            <span className="text-gray-700">{strategy}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-200">
              <h4 className="text-2xl font-bold text-center text-gray-900 mb-6">Sustainability Metrics</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                  <div className="text-gray-700 font-medium">System Uptime Target</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">₹50L</div>
                  <div className="text-gray-700 font-medium">Annual O&M Budget</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">10 Years</div>
                  <div className="text-gray-700 font-medium">System Lifecycle</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Implementation;