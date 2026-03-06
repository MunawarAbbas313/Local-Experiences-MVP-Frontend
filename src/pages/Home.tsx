import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, Shield, Globe, Users, Heart, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import SearchBar from '../components/global/SearchBar';
import CategoryChips from '../components/global/CategoryChips';
import ExperienceCard from '../components/global/ExperienceCard';
import { MOCK_EXPERIENCES } from '../data/mockData';

export default function Home() {
  const recommended = MOCK_EXPERIENCES.slice(0, 4);
  const trending = MOCK_EXPERIENCES.slice(4, 8);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden -mt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hero-travel/1920/1080" 
            alt="Hero background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-8 backdrop-blur-md">
              <Zap className="w-4 h-4 text-secondary fill-secondary" />
              <span>New: Virtual workshops starting next week</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
              Discover the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                soul of a city.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Book unique local experiences hosted by passionate experts. From hidden kitchens to secret rooftops.
            </p>
            
            <SearchBar className="mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Category Explorer */}
      <section className="container-custom">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Explore by category</h2>
            <p className="text-slate-500">Find the perfect experience for your interests.</p>
          </div>
        </div>
        <CategoryChips />
      </section>

      {/* Recommended Experiences */}
      <section className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Recommended for you</h2>
            <p className="text-slate-500">Based on your interests and recent searches.</p>
          </div>
          <Link to="/explore" className="text-primary font-bold flex items-center gap-2 hover:underline">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommended.map((exp) => (
            <ExperienceCard key={exp.experienceId} experience={exp} />
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="bg-slate-900 py-24">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Trending this week</h2>
              <p className="text-slate-400">The most booked experiences right now.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full border-slate-700 text-white hover:bg-slate-800">
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-slate-700 text-white hover:bg-slate-800">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trending.map((exp) => (
              <ExperienceCard key={exp.experienceId} experience={exp} className="bg-slate-800 border-slate-700 text-white" />
            ))}
          </div>
        </div>
      </section>

      {/* Map Preview Placeholder */}
      <section className="container-custom">
        <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-soft flex flex-col lg:flex-row">
          <div className="p-12 lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Explore experiences near you</h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Use our interactive map to find hidden gems right in your neighborhood or your next destination.
            </p>
            <Button size="lg" className="w-fit rounded-full px-8">
              Open Interactive Map
            </Button>
          </div>
          <div className="lg:w-2/3 h-[400px] lg:h-auto relative bg-slate-100">
            <img 
              src="https://picsum.photos/seed/map-placeholder/1200/800" 
              alt="Map placeholder" 
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border border-white/50 text-center max-w-xs">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="font-bold text-slate-900 mb-2">Map Preview</p>
                <p className="text-sm text-slate-500">Interactive Mapbox integration placeholder. Pins for 12+ experiences nearby.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Features */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Verified Hosts</h3>
            <p className="text-slate-500 leading-relaxed">Every host is personally vetted by our team to ensure safety and quality.</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Global Community</h3>
            <p className="text-slate-500 leading-relaxed">Connect with passionate locals in over 50 countries and 200 cities.</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-orange-50 text-secondary rounded-2xl flex items-center justify-center">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Small Groups</h3>
            <p className="text-slate-500 leading-relaxed">Intimate experiences with small group sizes for better interaction.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom">
        <div className="bg-primary rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 C30,50 70,50 100,0 L100,100 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to host your own experience?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Share your passion with the world and earn money doing what you love.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 px-12 py-7 rounded-full text-lg font-bold shadow-2xl">
              Become a Host
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
