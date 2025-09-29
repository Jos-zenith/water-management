import { useState } from 'react';
import { Users, Award, Calculator, TrendingUp, Droplets, Star } from 'lucide-react';

const JalodayamSystem = () => {
  const [familySize, setFamilySize] = useState(4);
  const [monthlyConsumption, setMonthlyConsumption] = useState(8000);
  
  // Calculation logic
  const baselineLPCD = 100; // Litres per capita per day
  const targetConsumption = familySize * baselineLPCD * 30; // Monthly target
  const waterSaved = Math.max(0, targetConsumption - monthlyConsumption);
  const creditsEarned = Math.floor(waterSaved / 100);
  
  const benefits = [
    {
      icon: Award,
      title: 'Credit Rewards',
      description: 'Earn credits for water conservation',
      value: `${creditsEarned} credits/month`
    },
    {
      icon: TrendingUp,
      title: 'Community Impact',
      description: 'Collective water savings',
      value: `${(waterSaved * 100).toLocaleString()} L saved/month`
    },
    {
      icon: Star,
      title: 'Recognition',
      description: 'Community leaderboards',
      value: 'Top 10% saver'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Jalodayam Credit System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Community-powered water conservation through gamification and rewards. 
            Turn water savings into tangible benefits for your household and community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Credit Calculator */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <Calculator className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Credit Calculator</h3>
            </div>

            <div className="space-y-6">
              {/* Family Size Input */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Family Members: <span className="text-emerald-600 font-bold">{familySize}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={familySize}
                  onChange={(e) => setFamilySize(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1</span>
                  <span>15</span>
                </div>
              </div>

              {/* Consumption Input */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Monthly Consumption: <span className="text-emerald-600 font-bold">{monthlyConsumption.toLocaleString()} L</span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="100"
                  value={monthlyConsumption}
                  onChange={(e) => setMonthlyConsumption(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1,000L</span>
                  <span>20,000L</span>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-6 text-white">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold">{creditsEarned}</div>
                  <div className="text-xl">Jalodayam Credits Earned</div>
                  <div className="text-emerald-100">
                    You could save {waterSaved.toLocaleString()} litres this month!
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600 text-center">
                Based on {baselineLPCD}L/person/day baseline consumption
              </div>
            </div>
          </div>

          {/* System Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">System Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200">
                      <div className="flex items-start space-x-4">
                        <div className="bg-emerald-100 p-3 rounded-xl">
                          <Icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-600 mb-3">{benefit.description}</p>
                          <div className="text-emerald-600 font-semibold">{benefit.value}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">How It Works</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                  <span>Smart meters track your water usage automatically</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                  <span>Save water below your personalized target</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                  <span>Earn credits redeemable for local benefits</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="font-bold">4</span>
                  </div>
                  <span>Compete with neighbors and build community</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Impact Visualization */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Community Impact Potential</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-2xl mb-4">
                  <Users className="w-12 h-12 text-blue-600 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10% Adoption</div>
                <div className="text-gray-600">520,000 households participating</div>
                <div className="text-lg font-semibold text-gray-700 mt-2">7.95 Cr L daily savings</div>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-100 p-6 rounded-2xl mb-4">
                  <Droplets className="w-12 h-12 text-emerald-600 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">25% Adoption</div>
                <div className="text-gray-600">1.3M households participating</div>
                <div className="text-lg font-semibold text-gray-700 mt-2">19.88 Cr L daily savings</div>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-6 rounded-2xl mb-4">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50% Adoption</div>
                <div className="text-gray-600">2.6M households participating</div>
                <div className="text-lg font-semibold text-gray-700 mt-2">39.75 Cr L daily savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JalodayamSystem;