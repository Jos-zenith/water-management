import { ArrowRight, Download, Users, Target, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const nextSteps = [
    {
      step: '01',
      title: 'Pilot Selection',
      description: 'Identify 50 villages for initial implementation based on water loss severity and community readiness',
      timeline: 'Next 3 months'
    },
    {
      step: '02',
      title: 'Stakeholder Alignment',
      description: 'Secure government approvals, funding commitments, and community partnerships',
      timeline: 'Month 4-6'
    },
    {
      step: '03',
      title: 'System Deployment',
      description: 'Install smart infrastructure and launch Jalodayam credit system in pilot villages',
      timeline: 'Month 7-12'
    },
    {
      step: '04',
      title: 'Scale & Replicate',
      description: 'Expand successful model to 1000+ villages across Kerala based on pilot learnings',
      timeline: 'Year 2-5'
    }
  ];

  const keyBeneficiaries = [
    {
      group: 'Kerala Water Authority',
      benefits: ['Reduced NRW losses', 'Operational cost savings', 'Improved service delivery']
    },
    {
      group: 'Rural Communities',
      benefits: ['Water security', 'Economic incentives', 'Improved quality of life']
    },
    {
      group: 'Environment',
      benefits: ['Resource conservation', 'Reduced wastage', 'Sustainable practices']
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Transform
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              {' '}Kerala's Water Future?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Join us in implementing this comprehensive solution to save ₹576 crores annually 
            while building sustainable water management practices across Kerala's rural communities.
          </p>
        </div>

        {/* Key Statistics Reminder */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-cyan-300 mb-2">₹576 Cr</div>
            <div className="text-blue-200">Annual Loss to Address</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-emerald-300 mb-2">35%</div>
            <div className="text-blue-200">NRW Reduction Target</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-yellow-300 mb-2">52L</div>
            <div className="text-blue-200">Rural Households</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-purple-300 mb-2">2.2-4.3</div>
            <div className="text-blue-200">Years ROI</div>
          </div>
        </div>

        {/* Next Steps Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Implementation Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nextSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full">
                  <div className="text-4xl font-bold text-cyan-300 mb-4">{step.step}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-blue-200 mb-4 text-sm leading-relaxed">{step.description}</p>
                  <div className="inline-block bg-emerald-500/20 px-3 py-1 rounded-full text-sm font-medium text-emerald-300">
                    {step.timeline}
                  </div>
                </div>
                {index < nextSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Beneficiaries */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Stakeholder Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyBeneficiaries.map((beneficiary, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-emerald-500/20 p-3 rounded-xl">
                    <Users className="w-8 h-8 text-emerald-300" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{beneficiary.group}</h4>
                </div>
                <div className="space-y-3">
                  {beneficiary.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-blue-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-3">
              <span>Start Pilot Implementation</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-500 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-3">
              <Download className="w-6 h-6" />
              <span>Download Full Proposal</span>
            </button>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-blue-200 leading-relaxed">
              This Smart India Hackathon proposal presents a comprehensive, data-driven solution 
              to Kerala's water crisis. With proven technology, community engagement strategies, 
              and clear financial benefits, we're ready to transform water management across the state.
            </p>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-blue-300 text-sm">
              SIH 2024 • Kerala Water Management Solution • Team Innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;