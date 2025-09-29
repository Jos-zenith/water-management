import { useState, useEffect } from 'react';
import { 
  Droplets, 
  TrendingDown, 
  Users, 
  Calculator,
  MapPin,
  Target,
  ChevronRight,
  Play,
  CheckCircle,
  AlertTriangle,
  BarChart3
} from 'lucide-react';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import ExecutionPlan from './components/ExecutionPlan';
import JalodayamSystem from './components/JalodayamSystem';
import ROIAnalysis from './components/ROIAnalysis';
import ImpactVisualization from './components/ImpactVisualization';
import Implementation from './components/Implementation';
import CallToAction from './components/CallToAction';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'execution', 'jalodayam', 'roi', 'impact', 'implementation', 'cta'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Overview', icon: Droplets },
    { id: 'problem', label: 'Challenge', icon: AlertTriangle },
    { id: 'execution', label: 'Plan', icon: Target },
    { id: 'jalodayam', label: 'Jalodayam', icon: Users },
    { id: 'roi', label: 'ROI', icon: BarChart3 },
    { id: 'impact', label: 'Impact', icon: TrendingDown },
    { id: 'implementation', label: 'Implementation', icon: CheckCircle }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Droplets className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Kerala Water Solutions
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="problem">
          <ProblemStatement />
        </section>
        
        <section id="execution">
          <ExecutionPlan />
        </section>
        
        <section id="jalodayam">
          <JalodayamSystem />
        </section>
        
        <section id="roi">
          <ROIAnalysis />
        </section>
        
        <section id="impact">
          <ImpactVisualization />
        </section>
        
        <section id="implementation">
          <Implementation />
        </section>
        
        <section id="cta">
          <CallToAction />
        </section>
      </main>

      {/* Mobile Navigation */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-2">
          <div className="flex items-center justify-around">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;