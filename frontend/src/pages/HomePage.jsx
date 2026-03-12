import React from 'react';
import { ArrowRight, Sparkles, LayoutDashboard, MousePointer2, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/bann.jpg';
import Entrypoint from './Entrypoint';




const HomePage = () => {
    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-[#FFFFFF] overflow-hidden relative font-sans antialiased flex flex-col justify-center">

            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center pt-24 pb-12">

                {/* Left Content Area */}
                <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">


                    <div className="space-y-6">

                        <h1 className="text-[80px] lg:text-[100px] font-[900] text-[#0f172a] leading-[0.9] tracking-[-0.06em]">
                            Manage <br />
                            <span className="text-[#3B82F6] relative">
                                Energy
                                <span className="absolute bottom-4 left-0 w-full h-4 bg-blue-100 -z-10 opacity-60"></span>
                            </span>, <br />
                            Not Just Time.
                        </h1>
                    </div>


                    <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
                        DOTO is the first leadership platform that synchronizes team workloads with biological energy cycles to eliminate burnout and maximize focus.
                    </p>


                    <div className="flex flex-wrap items-center gap-8 pt-4">
                        <button
                            onClick={() => navigate('/login')}
                            className="flex items-center gap-3 px-10 py-5 bg-[#3B82F6] text-white rounded-[24px] text-lg font-bold shadow-2xl shadow-blue-200 hover:bg-[#2563EB] hover:scale-105 transition-all group active:scale-95"
                        >
                            Launch Dashboard <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </button>


                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 shadow-sm overflow-hidden">
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`}
                                            alt="user"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black text-slate-900 leading-none">+2k Teams</span>
                                <span className="text-sm font-bold text-slate-400">using DOTO platform</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300 w-full h-full">
                    <div className="relative w-full max-w-6xl transition-transform duration-700 lg:scale-[1.3] lg:translate-x-12">
                        <img
                            src={bannerImg}
                            alt="DOTO Banner"
                            className="w-full h-auto mix-blend-multiply filter brightness-[1.08] contrast-[1.02]"
                        />
                    </div>
                </div>



            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(-6deg); }
                    50% { transform: translateY(-20px) rotate(-2deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                body {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }
            `}</style>
            <Entrypoint />
        </div>
    );
};

export default HomePage;
