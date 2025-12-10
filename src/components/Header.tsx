import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'about', label: '關於我們' },
    { id: 'projects', label: '合作專案' },
    { id: 'contact', label: '聯絡我們' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B6F47] to-[#B8674E] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">織</span>
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-[#3A3A3A]' : 'text-white'
              } group-hover:text-[#8B6F47]`}
            >
              織某行銷工作室
            </span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors relative ${
                  currentPage === item.id
                    ? isScrolled
                      ? 'text-[#8B6F47]'
                      : 'text-white'
                    : isScrolled
                    ? 'text-[#3A3A3A] hover:text-[#8B6F47]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8B6F47]" />
                )}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-[#3A3A3A]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#F5F3EF] text-[#8B6F47] font-medium'
                    : 'text-[#3A3A3A] hover:bg-[#F5F3EF]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
