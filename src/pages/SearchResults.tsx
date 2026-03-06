import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Map as MapIcon, List, ChevronDown, SlidersHorizontal, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import ExperienceCard from '../components/global/ExperienceCard';
import { MOCK_EXPERIENCES } from '../data/mockData';
import CategoryChips from '../components/global/CategoryChips';

export default function SearchResults() {
  const [view, setView] = useState<'list' | 'map'>('list');
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] overflow-hidden">
      {/* Top Filter Bar */}
      <div className="bg-white border-b border-slate-200 py-4 px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4 overflow-hidden">
          <Button variant="outline" className="rounded-full flex items-center gap-2 shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </Button>
          <div className="h-6 w-px bg-slate-200 shrink-0" />
          <CategoryChips activeCategory={activeCategory} onSelect={setActiveCategory} className="pb-0" />
        </div>
        
        <div className="flex items-center gap-2 shrink-0 ml-4">
          <div className="bg-slate-100 p-1 rounded-xl flex">
            <button 
              onClick={() => setView('list')}
              className={`p-2 rounded-lg transition-all ${view === 'list' ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <List className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setView('map')}
              className={`p-2 rounded-lg transition-all ${view === 'map' ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <MapIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Filters (Desktop) */}
        <aside className="hidden lg:block w-80 border-r border-slate-200 bg-white overflow-y-auto p-6 space-y-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Price range</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="text-xs text-slate-500 mb-1 block">Min price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400">$</span>
                    <input type="number" className="w-full border border-slate-200 rounded-lg pl-7 pr-3 py-2 text-sm" placeholder="0" />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-xs text-slate-500 mb-1 block">Max price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400">$</span>
                    <input type="number" className="w-full border border-slate-200 rounded-lg pl-7 pr-3 py-2 text-sm" placeholder="500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Duration</h3>
            <div className="space-y-3">
              {['Up to 2 hours', '2 to 4 hours', '4 to 8 hours', 'Full day'].map(d => (
                <label key={d} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900">{d}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Rating</h3>
            <div className="space-y-3">
              {[5, 4, 3].map(r => (
                <label key={r} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900 flex items-center gap-1">
                    {r}+ Stars
                  </span>
                </label>
              ))}
            </div>
          </div>

          <Button className="w-full rounded-xl">Apply Filters</Button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* List View */}
          <div className={`flex-1 overflow-y-auto p-6 ${view === 'map' ? 'hidden md:block md:max-w-2xl' : ''}`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">12 experiences found</h2>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                Sort by: 
                <button className="font-bold text-slate-900 flex items-center gap-1">
                  Recommended <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {MOCK_EXPERIENCES.map(exp => (
                <ExperienceCard key={exp.experienceId} experience={exp} />
              ))}
            </div>
          </div>

          {/* Map View */}
          <div className={`flex-1 bg-slate-100 relative ${view === 'list' ? 'hidden lg:block' : 'block'}`}>
            <img 
              src="https://picsum.photos/seed/search-map/1200/1200" 
              alt="Map" 
              className="w-full h-full object-cover opacity-60 grayscale"
              referrerPolicy="no-referrer"
            />
            
            {/* Mock Pins */}
            {MOCK_EXPERIENCES.slice(0, 8).map((exp, i) => (
              <div 
                key={exp.experienceId}
                className="absolute"
                style={{ 
                  top: `${20 + Math.random() * 60}%`, 
                  left: `${20 + Math.random() * 60}%` 
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  className="bg-white px-3 py-1.5 rounded-full shadow-xl border border-slate-200 flex items-center gap-2 cursor-pointer group"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-bold text-sm text-slate-900">${exp.price}</span>
                  
                  {/* Hover Preview Card */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <img src={exp.photos[0]} className="w-full h-24 object-cover" />
                    <div className="p-3">
                      <p className="text-xs font-bold text-slate-900 line-clamp-1">{exp.title}</p>
                      <p className="text-[10px] text-slate-500">${exp.price} / person</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <Button className="rounded-full shadow-2xl bg-slate-900 text-white px-6">
                Search as I move the map
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
