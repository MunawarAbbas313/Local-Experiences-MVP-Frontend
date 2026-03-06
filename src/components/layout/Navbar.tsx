import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search, Heart, Bell, Compass, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', href: '/experiences', icon: Compass },
    { name: 'Itinerary', href: '/itinerary', icon: Calendar },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled || !isHome
          ? 'bg-white/80 backdrop-blur-lg shadow-soft py-3'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={cn(
            'text-2xl font-black tracking-tighter transition-colors',
            isScrolled || !isHome ? 'text-primary' : 'text-white'
          )}
        >
          LOCALX
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-bold transition-colors hover:text-primary flex items-center gap-1.5',
                isScrolled || !isHome ? 'text-slate-600' : 'text-white/90'
              )}
            >
              {link.icon && <link.icon className="w-4 h-4" />}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className={cn(
            "p-2 rounded-full transition-colors",
            isScrolled || !isHome ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
          )}>
            <Search className="w-5 h-5" />
          </button>
          <Link to="/dashboard" className={cn(
            "p-2 rounded-full transition-colors",
            isScrolled || !isHome ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
          )}>
            <Heart className="w-5 h-5" />
          </Link>
          <div className="h-6 w-px bg-slate-200 mx-2" />
          <Link to="/host" className={cn(
            "text-sm font-bold px-4 py-2 rounded-full border transition-all",
            isScrolled || !isHome 
              ? "border-slate-200 text-slate-900 hover:bg-slate-50" 
              : "border-white/30 text-white hover:bg-white/10"
          )}>
            Become a Host
          </Link>
          <Link to="/profile">
            <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm overflow-hidden">
              <img src="https://picsum.photos/seed/user-nav/100/100" className="w-full h-full object-cover" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            'md:hidden p-2 rounded-xl transition-colors',
            isScrolled || !isHome ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 md:hidden transition-transform duration-500 pt-24 px-8',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-3xl font-bold text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-slate-100" />
          <Link
            to="/host"
            className="text-2xl font-bold text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Become a Host
          </Link>
          <div className="flex gap-4 mt-8">
            <Button className="flex-1 py-6 rounded-2xl font-bold" asChild>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </Button>
            <Button variant="outline" className="flex-1 py-6 rounded-2xl font-bold" asChild>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
