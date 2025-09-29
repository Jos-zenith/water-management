import { useState, useEffect } from 'react';
import { Droplets, TrendingUp, Users, Target } from 'lucide-react';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '₹576', label: 'Crore Annual Loss', subtitle: '40% water lost before billing' },
    { value: '5.2M', label: 'Rural Households', subtitle: 'Target beneficiaries' },
    { value: '35%', label: 'Water Savings', subtitle: 'Potential reduction in NRW' },
    { value: '3-5', label: 'Year ROI', subtitle: 'Payback period' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-700">
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)`
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transforming
                <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  {' '}Water Management
                </span>
                <br />in Kerala
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl leading-relaxed">
                A comprehensive smart solution addressing the ₹576 crore annual water loss through 
                innovative DMA systems and community-driven conservation programs.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Droplets className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-medium">Smart Metering</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-emerald-300" />
                <span className="text-sm font-medium">Community Engagement</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Target className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">Leak Detection</span>
              </div>
            </div>

            <button className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              <span className="flex items-center space-x-2">
                <span>Explore Solution</span>
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Right Content - Animated Stats */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-white mb-8">Key Impact Metrics</h3>
                
                {/* Main Stat Display */}
                <div className="space-y-4">
                  <div className="text-6xl font-bold text-cyan-300 transition-all duration-500">
                    {stats[currentStat].value}
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-semibold text-white">
                      {stats[currentStat].label}
                    </div>
                    <div className="text-blue-200 text-lg">
                      {stats[currentStat].subtitle}
                    </div>
                  </div>
                </div>

                {/* Stat Indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {stats.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentStat ? 'bg-cyan-300' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#f8fafc" 
            d="M0,0 C240,120 480,120 720,80 C960,40 1200,40 1440,80 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;