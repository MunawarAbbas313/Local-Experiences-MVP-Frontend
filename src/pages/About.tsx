import { motion } from 'motion/react';
import { Shield, Users, Heart, Star, Globe, Zap, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden -mt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/about-hero/1920/1080" 
            alt="About us" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Our Mission</h1>
            <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed">
              We believe that the best way to experience a city is through the eyes of the people who call it home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 text-primary text-sm font-bold">
              <Award className="w-4 h-4" />
              <span>Founded in 2023</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Connecting the world through local passion.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              LocalXperiences started with a simple idea: travel should be more than just visiting landmarks. It should be about meaningful connections, shared stories, and authentic moments.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we are a global community of thousands of hosts and travelers who believe in the power of human connection. Whether it's a secret cooking class in Rome or a neon photography tour in Tokyo, we're here to help you discover the soul of every destination.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-4xl font-bold text-primary mb-1">50k+</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Happy Travelers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-1">2k+</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Expert Hosts</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/about1/600/800" className="rounded-3xl shadow-xl mt-12" />
              <img src="https://picsum.photos/seed/about2/600/800" className="rounded-3xl shadow-xl" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">100% Vetted</p>
                  <p className="text-sm text-slate-500">Quality guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-500">These principles guide everything we do, from how we vet our hosts to how we build our platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Authenticity', desc: 'We prioritize real, unscripted experiences over tourist traps.', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50' },
              { title: 'Community', desc: 'We build bridges between cultures and foster global friendships.', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Trust', desc: 'Safety and reliability are at the heart of every booking.', icon: Shield, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { title: 'Passion', desc: 'We empower experts to share what they love with the world.', icon: Star, color: 'text-amber-600', bg: 'bg-amber-50' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-soft border border-slate-100 hover:shadow-xl transition-all group">
                <div className={`${value.bg} ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Global Presence */}
      <section className="container-custom">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
             <Globe className="w-[800px] h-[800px] text-primary absolute -right-40 -bottom-40" />
          </div>
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">A global team for a global community.</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Our team is spread across 12 countries, bringing diverse perspectives to help you explore the world better.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Engineering', 'Design', 'Curation', 'Support', 'Safety'].map(tag => (
                <span key={tag} className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-bold text-sm backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-3 gap-4 relative z-10">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img src={`https://picsum.photos/seed/team-${i}/300/300`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
