import { useState } from 'react';
import { Menu, X, Server, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SOLUTION_LINKS = [
  { label: 'Unified Communication', path: '/unified-communication' },
  { label: 'Network Infrastructure', section: 'casestudies' },
  { label: 'Cybersecurity', section: 'faq' },
  { label: 'Storage, Servers, Laptops & Desktops', section: 'faq' },
  { label: 'Surveillance', section: 'faq' },
];

const NAV_LINKS = [
  { label: 'About Us', path: '/' },
  { label: 'Services', section: '' },
  { label: 'Past Projects', section: 'casestudies' },
  { label: 'Get In Touch', section: 'faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavigation = (link: { path?: string; section?: string }) => {
    setIsOpen(false);
    setOpenDropdown(null);

    if (link.path) {
      navigate(link.path);
    } else if (typeof link.section === 'string') {
      const element = document.getElementById(link.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 left-0 right-0 h-auto z-10 transition-all duration-300 bg-surface border-b border-white/10 py-4 shadow-lg shadow-black/20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo Brand */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center space-x-3 cursor-pointer group flex-shrink-0 select-none"
          >
            <img
              src="/NEW LOGO2.png"
              alt="C3E IT logo"
              className="h-12 lg:h-16 w-auto object-contain transition-all"
            />
            <div className="flex flex-col justify-center">
              <span className="font-mono font-black text-sm lg:text-lg tracking-tight text-white uppercase leading-none">
                C3E Information Technology
              </span>
              <span className="font-mono text-[11px] lg:text-sm font-bold tracking-widest text-secondary uppercase mt-1 leading-none">
                Services
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation - Hidden on md, reveals at lg */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link)}
                className="font-sans text-xs font-bold uppercase tracking-widest text-neutral hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            {/* Solutions Dropdown Menu */}
            <div
              className="relative py-2"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => navigate('/OurSolution')}
                className="font-sans text-xs font-bold uppercase tracking-widest text-neutral hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Our Solutions</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'services' && (
                <div className="absolute right-0 top-full w-64 mt-1 bg-surface border border-white/10 shadow-2xl z-50 py-1">
                  {SOLUTION_LINKS.map((sol) => (
                    <button
                      key={sol.label}
                      onClick={() => handleNavigation(sol)}
                      className="block w-full px-4 py-2.5 text-left text-[11px] font-medium uppercase tracking-wider text-neutral hover:bg-white/5 hover:text-primary transition-colors border-b border-white/5 last:border-none"
                    >
                      {sol.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile/Tablet Menu Trigger - Visible until lg */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-200 hover:text-primary border border-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Drawer - Operates up to lg variant */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-surface border-b border-white/10 px-4 py-6 space-y-6 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link)}
                className="w-full text-left py-3 text-neutral hover:text-primary font-bold text-xs uppercase tracking-widest border-b border-white/5 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            
            {/* Solutions Mobile Group */}
            <div className="pt-2 pb-4 border-b border-white/5">
              <div className="text-secondary/60 text-[10px] uppercase tracking-widest font-black mb-2 px-1">
                Our Solutions -
              </div>
              <div className="space-y-1 pl-2">
                {SOLUTION_LINKS.map((sol) => (
                  <button
                    key={sol.label}
                    onClick={() => handleNavigation(sol)}
                    className="block w-full text-left py-2.5 text-neutral hover:text-primary font-semibold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    • {sol.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SLA Badge Container */}
          <div className="bg-white/[0.02] border border-white/5 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-primary">
              <Server className="h-4 w-4 text-secondary" />
              <span>SLA response check: <strong className="text-white font-bold">Active</strong></span>
            </div>
            <span className="text-[10px] font-mono bg-white/10 text-white px-2.5 py-1 uppercase tracking-wider">
              Guaranteed
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}