import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Tractor, 
  MessageCircle, 
  Settings, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import type { BusinessInfo } from '../types';
import { formatWhatsAppNumber } from '../data/businessInfo';

interface HeaderProps {
  businessInfo: BusinessInfo;
  onOpenOwnerConfig: () => void;
  onOpenEnquiryModal: (prefilledService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  businessInfo,
  onOpenOwnerConfig,
  onOpenEnquiryModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#activities' },
    { name: 'Agricultural Machinery', href: '#machinery' },
    { name: 'Poultry Farming', href: '#poultry' },
    { name: 'Fish Farming', href: '#fish-farming' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const cleanWhatsAppNumber = formatWhatsAppNumber(businessInfo.whatsappNumber);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#0a2919] text-white text-xs py-2 px-4 border-b border-emerald-900/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-emerald-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              CAC Reg: <strong className="text-white ml-1 font-semibold">{businessInfo.regNumber}</strong>
            </span>
            <span className="flex items-center text-emerald-100/90">
              <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              Gombe, Gombe State, Nigeria
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a 
              href={`tel:${businessInfo.phone}`} 
              className="flex items-center text-emerald-100 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              <span>{businessInfo.phone}</span>
            </a>
            <span className="text-emerald-700">|</span>
            <a 
              href={`mailto:${businessInfo.email}`} 
              className="flex items-center text-emerald-100 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              <span>{businessInfo.email}</span>
            </a>
            <span className="text-emerald-700">|</span>
            <button
              onClick={onOpenOwnerConfig}
              className="flex items-center text-amber-300 hover:text-amber-200 transition-colors text-xs font-semibold px-2 py-0.5 rounded bg-emerald-900/80 border border-emerald-700/60"
              title="Click to configure owner contact details"
            >
              <Settings className="w-3 h-3 mr-1" />
              Owner Config
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80' 
            : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center space-x-3 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0f3d24] via-[#14532d] to-[#15803d] flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
                <Tractor className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-[#0f3d24] leading-tight font-display">
                  NAALLAH
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-emerald-800 uppercase leading-none">
                  Generators &amp; Agric Machineries
                </span>
                <span className="text-[9px] text-slate-500 font-medium tracking-wide">
                  RC: {businessInfo.regNumber} • Nigeria
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-2.5 py-1.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0f3d24] hover:bg-emerald-50 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {cleanWhatsAppNumber && cleanWhatsAppNumber.length > 5 && (
                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
                    'Hello NAALLAH GENERATORS AND AGRIC MACHINERIES, I am inquiring from your website.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-[#0f3d24] border border-emerald-200 transition-colors"
                  title="Chat with us on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                </a>
              )}

              <button
                onClick={() => onOpenEnquiryModal()}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#0f3d24] text-white font-semibold text-sm hover:bg-[#14532d] shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span>Request Quote</span>
                <ChevronRight className="w-4 h-4 ml-1.5 text-amber-400" />
              </button>
            </div>

            {/* Mobile Menu & Settings Button */}
            <div className="flex items-center space-x-2 xl:hidden">
              <button
                onClick={onOpenOwnerConfig}
                className="p-2 text-slate-600 hover:text-[#0f3d24] md:hidden"
                title="Configure Contact"
              >
                <Settings className="w-5 h-5 text-amber-600" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#0f3d24] hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1 divide-y divide-slate-100">
              <div className="py-2 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-emerald-900">RC: {businessInfo.regNumber}</span>
                <span>Gombe State, Nigeria</span>
              </div>

              <div className="py-2 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:text-[#0f3d24] hover:bg-emerald-50 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-4 flex flex-col space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiryModal();
                  }}
                  className="w-full py-3 rounded-xl bg-[#0f3d24] text-white font-semibold text-center text-sm shadow-md hover:bg-[#14532d] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Contact Our Business</span>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </button>

                {cleanWhatsAppNumber && cleanWhatsAppNumber.length > 5 && (
                  <a
                    href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
                      'Hello NAALLAH GENERATORS AND AGRIC MACHINERIES, I am inquiring from your website.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-emerald-50 text-emerald-800 font-semibold text-center text-sm border border-emerald-300 hover:bg-emerald-100 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
