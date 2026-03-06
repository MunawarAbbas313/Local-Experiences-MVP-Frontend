import { useState } from 'react';
import { motion, Reorder } from 'motion/react';
import { MapPin, Calendar, Clock, Share2, Plus, GripVertical, Trash2, Save } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MOCK_EXPERIENCES } from '../data/mockData';
import { Link } from 'react-router-dom';

export default function ItineraryBuilder() {
  const [items, setItems] = useState(MOCK_EXPERIENCES.slice(0, 3));

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Itinerary Builder</h1>
            <p className="text-slate-500">Plan your perfect trip by organizing your favorite experiences.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-xl px-6 font-bold flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Share
            </Button>
            <Button className="rounded-xl px-6 font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
              <Save className="w-4 h-4" /> Save Plan
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Builder Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 text-primary p-2 rounded-xl">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Day 1: Rome Exploration</h2>
                </div>
                <span className="text-sm font-bold text-slate-400">3 Items</span>
              </div>

              <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-4">
                {items.map((item) => (
                  <Reorder.Item 
                    key={item.experienceId} 
                    value={item}
                    className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 group cursor-grab active:cursor-grabbing border border-transparent hover:border-slate-200 transition-all"
                  >
                    <div className="text-slate-300 group-hover:text-slate-400">
                      <GripVertical className="w-5 h-5" />
                    </div>
                    <img src={item.photos[0]} className="w-16 h-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-sm line-clamp-1">{item.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.category}</span>
                        <div className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {Math.floor(item.duration / 60)}h
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setItems(items.filter(i => i.experienceId !== item.experienceId))}
                      className="p-2 text-slate-300 hover:text-rose-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </Reorder.Item>
                ))}
              </Reorder.Group>

              <button className="w-full mt-6 py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-sm flex items-center justify-center gap-2 hover:border-primary hover:text-primary hover:bg-blue-50 transition-all">
                <Plus className="w-4 h-4" /> Add Experience to Day 1
              </button>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Notes</h3>
              <textarea 
                rows={4} 
                placeholder="Add some notes for your trip..." 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 outline-none focus:ring-2 focus:ring-primary text-slate-600"
              />
            </div>
          </div>

          {/* Recommendations Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-soft border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Suggestions</h3>
              <div className="space-y-6">
                {MOCK_EXPERIENCES.slice(5, 9).map(exp => (
                  <div key={exp.experienceId} className="flex gap-4 group">
                    <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                      <img src={exp.photos[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-sm line-clamp-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                      <p className="text-xs text-slate-500 mb-2">${exp.price} / person</p>
                      <button 
                        onClick={() => setItems([...items, exp])}
                        className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1 hover:underline"
                      >
                        <Plus className="w-3 h-3" /> Add to plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-8 text-primary font-bold" asChild>
                <Link to="/explore">Explore more</Link>
              </Button>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Map View</h3>
              <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/itinerary-map/600/600" 
                  className="w-full h-full object-cover opacity-40 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 text-center">Interactive map showing your daily route.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
