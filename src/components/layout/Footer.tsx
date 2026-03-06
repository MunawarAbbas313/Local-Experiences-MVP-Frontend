import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Globe,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { Button } from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-20 border-t border-slate-800 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="text-white text-3xl font-black tracking-tighter">
              LOCALX
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed text-lg">
              Discover, book & share unique local experiences. Curated for every
              traveler and local adventurer.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-slate-800"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Secure Payments
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <Globe className="w-4 h-4 text-blue-500" />
                Global Support
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Company
            </h4>
            <ul className="space-y-4 font-medium">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/itinerary" className="hover:text-primary transition-colors">
                  Itinerary Builder
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Explore
            </h4>
            <ul className="space-y-4 font-medium">
              <li>
                <Link to="/experiences" className="hover:text-primary transition-colors">
                  All Experiences
                </Link>
              </li>
              <li>
                <Link to="/experiences?category=Food" className="hover:text-primary transition-colors">
                  Food & Drink
                </Link>
              </li>
              <li>
                <Link to="/experiences?category=Culture" className="hover:text-primary transition-colors">
                  Arts & Culture
                </Link>
              </li>
              <li>
                <Link to="/experiences?category=Wellness" className="hover:text-primary transition-colors">
                  Wellness
                </Link>
              </li>
              <li>
                <Link to="/experiences?category=Outdoors" className="hover:text-primary transition-colors">
                  Outdoors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Newsletter
            </h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()} LocalXperiences. All rights
            reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
