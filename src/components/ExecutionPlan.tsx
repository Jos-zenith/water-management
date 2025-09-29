import { useState } from 'react';
import { 
  Search, 
  Settings, 
  Play, 
  Users, 
  CheckCircle, 
  Calendar,
  Target,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

const ExecutionPlan = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      phase: 1,
      title: 'Baseline Survey & Design',
      duration: '3 months',
      icon: Search,
      color: 'bg-blue-500',
      activities: [
        'Hydrological study and network mapping',
        'Identify unmetered connections',
        'Finalize sensor locations and DMA boundaries',
        'Community stakeholder engagement',
        'Technical specifications finalization'
      ],
      deliverables: ['Network assessment report', 'DMA design blueprint', 'Community engagement plan'],
      budget: '₹15 lakhs'
    },
    {
      phase: 2,
      title: 'Hardware Procurement & Installation',
      duration: '4 months',
      icon: Settings,
      color: 'bg-emerald-500',
      activities: [
        'Bulk meter installation at DMA inlet',
        'Deploy pressure transmitters (2 units)',
        'Install acoustic loggers (25-30 units)',
        'Setup LoRaWAN gateway infrastructure',
        'Smart PRV installation and calibration'
      ],
      deliverables: ['Complete hardware deployment', 'System connectivity tests', 'Installation reports'],
      budget: '₹4.5 lakhs'
    },
    {
      phase: 3,
      title: 'System Commissioning & Integration',
      duration: '2 months',
      icon: Play,
      color: 'bg-purple-500',
      activities: [
        'Sensor activation and calibration',
        'LoRaWAN network optimization',
        'MATLAB Simulink model integration',
        'Real-time data transmission setup',
        'Alert system configuration'
      ],
      deliverables: ['Operational monitoring system', 'Data analytics dashboard', 'Alert mechanisms'],
      budget: '₹8 lakhs'
    },
    {
      phase: 4,
      title: 'Optimization & Community Launch',
      duration: '6 months',
      icon: Users,
      color: 'bg-orange-500',
      activities: [
        'System performance optimization',
        'Jalodayam Water Credits rollout',
        'Community training programs',
        'Local Panchayat partnership establishment',
        'Mobile app deployment and user onboarding'
      ],
      deliverables: ['Optimized system performance', 'Active community participation', 'Partnership agreements'],
      budget: '₹12 lakhs'
    }
  ];

  const totalBudget = phases.reduce((sum, phase) => {
    return sum + parseFloat(phase.budget.replace('₹', '').replace(' lakhs', ''));
  }, 0);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Execution Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic 4-phase approach to implement our water management solution, 
            designed for a 5km village pipeline serving 100 houses.
          </p>
        </div>

        {/* Project Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">15 months</div>
            <div className="text-gray-600">Total Timeline</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">₹{totalBudget} L</div>
            <div className="text-gray-600">Total Investment</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">100</div>
            <div className="text-gray-600">Households Served</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">5km</div>
            <div className="text-gray-600">Pipeline Length</div>
          </div>
        </div>

        {/* Phase Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {phases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200 ${
                activePhase === index
                  ? phase.color + ' text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <phase.icon className="w-5 h-5" />
              <span className="font-medium">Phase {phase.phase}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Details */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className={`${phases[activePhase].color} p-8 text-white`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  {(() => {
                    const Icon = phases[activePhase].icon;
                    return <Icon className="w-8 h-8" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{phases[activePhase].title}</h3>
                  <p className="text-lg opacity-90">Phase {phases[activePhase].phase}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{phases[activePhase].duration}</div>
                <div className="opacity-90">Duration</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Duration</span>
                </div>
                <div className="text-lg">{phases[activePhase].duration}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">Budget</span>
                </div>
                <div className="text-lg">{phases[activePhase].budget}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">Activities</span>
                </div>
                <div className="text-lg">{phases[activePhase].activities.length} key tasks</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Activities */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                  <span>Key Activities</span>
                </h4>
                <div className="space-y-3">
                  {phases[activePhase].activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      </div>
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Target className="w-6 h-6 text-blue-500" />
                  <span>Key Deliverables</span>
                </h4>
                <div className="space-y-3">
                  {phases[activePhase].deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <ChevronRight className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700 font-medium">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Project Timeline</h3>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4">
            {phases.map((phase, index) => (
              <div key={index} className="flex-1 max-w-xs">
                <div 
                  className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-200 ${
                    activePhase === index ? 'border-blue-300 shadow-xl' : 'border-gray-200'
                  }`}
                >
                  <div className={`w-12 h-12 ${phase.color} rounded-xl flex items-center justify-center mb-4`}>
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{phase.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{phase.duration}</p>
                  <p className="text-sm font-medium text-gray-700">{phase.budget}</p>
                  
                  {index < phases.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gray-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutionPlan;