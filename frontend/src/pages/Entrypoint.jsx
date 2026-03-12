import React, { useEffect, useRef, useState } from 'react';
import { 
  Crown, 
  Users, 
  CheckCircle2 
} from 'lucide-react';

const Entrypoint = ({ onLogin }) => {
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[120px] opacity-10"></div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Header Section */}
        <div ref={titleRef} className={`text-center mb-16 space-y-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#0F172A]">
            Choose Your Entrypoint
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto opacity-90">
            Access your specialized workspace based on your role in the organization.
          </p>
        </div>

        {/* Cards Container */}
        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Workspace Leader Card */}
          <div className={`bg-white rounded-[2.5rem] p-10 flex flex-col shadow-2xl shadow-slate-200 relative group transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } hover:shadow-indigo-300 hover:scale-105`}>
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 bg-[#EEF2FF] text-[#4F46E5] rounded-2xl flex items-center justify-center">
                <Crown size={32} strokeWidth={2.5} />
              </div>
              <span className="bg-[#FFEDD5] text-[#9A3412] text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                Full Control
              </span>
            </div>
            
            <h3 className="text-3xl font-black text-[#0F172A] mb-4">
              Workspace Leader
            </h3>
            <p className="text-[#64748B] text-sm leading-relaxed mb-10 flex-1">
              For managers, founders, and directors. Orchestrate projects, monitor team burnout, and generate workspace invite links.
            </p>
            
            <ul className="space-y-4 mb-12">
              {[
                'Team Analytics',
                'Capacity Planning',
                'Burnout Prevention'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-bold text-[#334155]">
                  <CheckCircle2 size={18} className="text-[#4F46E5]" />
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onLogin?.('Leader')}
              className="w-full py-5 bg-[#4F46E5] text-white rounded-2xl font-black text-lg hover:bg-[#4338CA] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-indigo-200"
            >
              Enter Leader Dashboard
            </button>
          </div>

          {/* Team Member Card */}
          <div className={`bg-white rounded-[2.5rem] p-10 flex flex-col shadow-2xl shadow-slate-200 relative group transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } hover:shadow-green-300 hover:scale-105`}>
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 bg-[#ECFDF5] text-[#10B981] rounded-2xl flex items-center justify-center">
                <Users size={32} strokeWidth={2.5} />
              </div>
              <span className="bg-[#DCFCE7] text-[#166534] text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">
                Focus First
              </span>
            </div>
            
            <h3 className="text-3xl font-black text-[#0F172A] mb-4">
              Team Member
            </h3>
            <p className="text-[#64748B] text-sm leading-relaxed mb-10 flex-1">
              For individual contributors. Sync your energy levels, accept delegated tasks, and maintain deep focus without interruptions.
            </p>
            
            <ul className="space-y-4 mb-12">
              {[
                'Mood Synchronization',
                'Focus Mode UI',
                'Personal Insights'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-bold text-[#334155]">
                  <CheckCircle2 size={18} className="text-[#10B981]" />
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onLogin?.('Member')}
              className="w-full py-5 bg-[#0F172A] text-white rounded-2xl font-black text-lg hover:bg-black hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-300"
            >
              Enter Member Portal
            </button>
          </div>

        </div>
        
        {/* Footer Link */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-slate-600 text-sm font-bold">
            Joining a team? <a href="#" className="text-[#4F46E5] underline underline-offset-4 decoration-2 hover:text-[#3B82F6] transition-colors">Redeem your invite code</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Entrypoint;