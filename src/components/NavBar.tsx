import { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 left-0 right-0 h-auto z-10 transition-all duration-300 bg-surface border-b border-white/10 py-4 shadow-lg shadow-black/20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo Brand */}
          <div 
            onClick={() => navigate('/')} 
            
            className="flex items-center space-x-3 cursor-pointer group flex-shrink-0"
          >
            <img
              src="/NEW LOGO2.png"
              alt="C3E IT logo"
              className="h-20 w-auto object-contain"
            />
            <div>
              <span className="font-mono font-black text-xl tracking-tight text-white block">
                C3E Information Technology<span className="text-secondary"></span>
              </span>
              <span className="font-mono text-[20 px] text-secondary tracking-widest block -mt-1 font-bold uppercase">
                Services
              </span>
            </div>
          </div>
          
          {/* Navigation Wrapper - Right Side */}
          <div className="flex items-center gap-5">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5">
            <button
              onClick={() => navigate('/')}
              className="font-sans text-xs font-bold uppercase tracking-widest text-neutral hover:text-primary transition-colors cursor-pointer"
            >
              About Us
            </button>
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={(e) => {
                const next = e.relatedTarget as Node | null;
                if (!e.currentTarget.contains(next)) {
                  setOpenDropdown(null);
                }
              }}
            >
              <button
                id="dropdown-trigger"
                type="button"
                onClick={() => navigate('/OurSolution')}
                className="font-sans text-xs font-bold uppercase tracking-widest text-neutral hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Our Solutions</span>
                <span className="text-[10px]">▾</span>
              </button>

              {openDropdown === 'services' && (
                <div
                  className="absolute left-0 top-full w-56 rounded-none border border-white/10 bg-surface py-2 shadow-2xl z-50"
                  onMouseEnter={() => setOpenDropdown('services')}
                  onMouseLeave={(e) => {
                    const next = e.relatedTarget as Node | null;
                    if (!e.currentTarget.parentElement?.contains(next)) {
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <button
                    onClick={() => { setOpenDropdown(null); navigate('/unified-communication'); }}
                    className="block w-full px-4 py-2 text-left text-xs uppercase tracking-widest text-neutral hover:bg-white/5 hover:text-primary wrap-normal"
                  >
                    Unified Communication
                  </button>
                  <button
                    onClick={() => { setOpenDropdown(null); scrollToSection('casestudies'); }}
                    className="block w-full px-4 py-2 text-left text-xs uppercase tracking-widest text-neutral hover:bg-white/5 hover:text-primary"
                  >
                    Network Infrastructure
                  </button>
                  <button
                    onClick={() => { setOpenDropdown(null); scrollToSection('faq'); }}
                    className="block w-full px-4 py-2 text-left text-xs uppercase tracking-widest text-neutral hover:bg-white/5 hover:text-primary"
                  >
                    Cybersecurity
                  </button>
                  <button
                    onClick={() => { setOpenDropdown(null); scrollToSection('faq'); }}
                    className="block w-full px-4 py-2 text-left text-xs uppercase tracking-widest text-neutral hover:bg-white/5 hover:text-primary"
                  >
                    Storage, Servers, Laptops And Desktops
                  </button>
                  <button
                    onClick={() => { setOpenDropdown(null); scrollToSection('faq'); }}
                    className="block w-full px-4 py-2 text-left text-xs uppercase tracking-widest text-neutral hover:bg-white/5 hover:text-primary"
                  >
                    Surveillance
                  </button>
                </div>
              )}
            </div>

            
            <button
              onClick={() => scrollToSection('')}
              className="font-sans text-xs font-bold uppercase tracking-widest text-neutral hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
            >
              
                Services
                
            </button>
            <button
              onClick={() => scrollToSection('casestudies')}
              className="font-sans text-xs font-bold uppercase tracking-widest text-neutral hover:text-primary transition-colors cursor-pointer"
            >
              Success Logs
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="font-sans text-xs font-bold uppercase tracking-widest text-neutral hover:text-primary transition-colors cursor-pointer"
            >
              Disclosures
            </button>
            <div className="h-4 w-px bg-dark" />
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-primary p-2 border border-white/10 rounded-none cursor-pointer transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-white/10 px-4 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-4 text-left">
            <button
              onClick={() => navigate('/')}
              className="py-2 text-neutral hover:text-primary font-bold text-xs uppercase tracking-widest border-b border-dark cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="py-2 text-neutral hover:text-primary font-bold text-xs uppercase tracking-widest border-b border-dark flex justify-between items-center cursor-pointer"
            >
              <span>SLA Calculator</span>
              <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-none font-mono tracking-normal">KPI</span>
            </button>
            <button
              onClick={() => scrollToSection('casestudies')}
              className="py-2 text-neutral hover:text-primary font-bold text-xs uppercase tracking-widest border-b border-dark cursor-pointer"
            >
              Success Logs
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="py-2 text-neutral hover:text-primary font-bold text-xs uppercase tracking-widest border-b border-dark cursor-pointer"
            >
              Disclosures
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="py-2 text-secondary hover:text-accent font-bold text-xs uppercase tracking-widest cursor-pointer"
            >
              Consultation
            </button>
          </div>

          <div className="bg-surface border border-white/10 p-4 rounded-none flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-primary">
              <Server className="h-4 w-4 text-secondary" />
              <span>SLA response check: <strong className="text-white">Active</strong></span>
            </div>
            <span className="text-[10px] font-mono bg-accent/10 text-accent px-2.5 py-1 rounded-none">
              Guaranteed
            </span>
          </div>
        </div>
      )}
    </nav>
  );
} 
