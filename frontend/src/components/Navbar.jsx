import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard, Users, BarChart3, User, Menu, X
} from 'lucide-react';
import signLogo from '../assets/sign.jpg';


// Note: In a real app, you'd use 'react-router-dom'. 
// For this standalone version, we'll mock the Link and useLocation.
const Link = ({ to, children, className, onClick, style }) => (
    <a href={to} className={className} onClick={onClick} style={style}>{children}</a>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Mocking location. In real app: const location = useLocation();
    const [currentPath, setCurrentPath] = useState('/dashboard');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/dashboard', icon: <LayoutDashboard size={18} />, active: 'text-blue-600 bg-blue-50', hover: 'hover:text-blue-600 hover:bg-blue-50', accent: 'bg-blue-500' },
        { name: 'Team', href: '/leader', icon: <Users size={18} />, active: 'text-amber-600 bg-amber-50', hover: 'hover:text-amber-600 hover:bg-amber-50', accent: 'bg-amber-500' },
        { name: 'Insights', href: '/progress', icon: <BarChart3 size={18} />, active: 'text-emerald-600 bg-emerald-50', hover: 'hover:text-emerald-600 hover:bg-emerald-50', accent: 'bg-emerald-500' },
        { name: 'Profile', href: '/profile', icon: <User size={18} />, active: 'text-red-600 bg-red-50', hover: 'hover:text-red-600 hover:bg-red-50', accent: 'bg-red-500' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300 pointer-events-none">
            <nav
                className={`flex items-center justify-between w-[95%] max-w-7xl px-4 lg:px-8 bg-white rounded-full shadow-2xl border border-white/60 backdrop-blur-md transition-all duration-500 pointer-events-auto
                ${isScrolled ? 'h-14 mt-4 shadow-blue-500/10 scale-[0.98]' : 'h-18 mt-6'}`}
            >
                {/* Logo Section */}
                <div className="flex items-center gap-6">
                    <Link to="/" className="flex items-center gap-2.5 group isolate">
                        <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden transition-all duration-500 group-hover:scale-110">
                            <img src={signLogo} alt="DOTO" className="w-full h-full object-contain rounded-lg" />
                        </div>

                        <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">DOTO</span>
                    </Link>
                    <div className="hidden xl:block h-6 w-[1.5px] bg-slate-200/60 ml-2"></div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full">
                    {navLinks.map((link, idx) => {
                        const isActive = currentPath === link.href;
                        return (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={(e) => { e.preventDefault(); setCurrentPath(link.href); }}
                                style={{ animationDelay: `${idx * 100}ms` }}
                                className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative group/link
                                ${isActive
                                        ? `${link.active} scale-105`
                                        : `text-slate-500 ${link.hover} hover:scale-110 active:scale-95`
                                    }`}
                            >
                                <span className={`transition-transform duration-300 group-hover/link:-translate-y-0.5 ${isActive ? 'scale-110' : ''}`}>
                                    {link.icon}
                                </span>
                                <span>{link.name}</span>
                                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 
                                    ${isActive ? `w-1/2 ${link.accent}` : 'w-0 group-hover/link:w-1/2'} ${link.accent}`}></span>
                            </Link>
                        );
                    })}
                </div>

                {/* Simplified Action Zone - Only Mobile Menu Toggle remains */}
                <div className="flex items-center lg:hidden">
                    <button
                        className="p-3 text-slate-600 hover:bg-slate-50 rounded-2xl transition-all active:scale-90"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Expansion */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-24 z-[-1] lg:hidden px-4 pointer-events-auto">
                    <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-3xl border border-white/60 p-6 animate-in fade-in slide-in-from-top-8 duration-500 ease-out">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setCurrentPath(link.href);
                                    }}
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                    className={`flex items-center gap-4 px-5 py-4 rounded-3xl font-bold active:scale-98 transition-all animate-in slide-in-from-left-4 duration-300 fill-mode-both
                                        ${currentPath === link.href ? `${link.active}` : `text-slate-700 ${link.hover}`}`}
                                >
                                    <div className={`p-3 rounded-2xl transition-colors ${link.active.split(' ')[1] || link.active}`}>{link.icon}</div>
                                    <span className="text-lg">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="fixed inset-0 -z-10 bg-slate-950/20 backdrop-blur-md transition-opacity duration-500" onClick={() => setIsMenuOpen(false)}></div>
                </div>
            )}
        </div>
    );
};

export default Navbar;