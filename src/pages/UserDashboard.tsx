import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Heart, Settings, User, MapPin, Star, Clock, ChevronRight, LogOut } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MOCK_EXPERIENCES } from '../data/mockData';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

type Tab = 'bookings' | 'saved' | 'settings';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('bookings');

  const upcomingBookings = MOCK_EXPERIENCES.slice(0, 2);
  const savedExperiences = MOCK_EXPERIENCES.slice(2, 5);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 text-center">
              <div className="relative inline-block mb-4">
                <img 
                  src="https://picsum.photos/seed/user-main/200/200" 
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full border-2 border-white">
                  <User className="w-3 h-3" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-900">Sarah Jenkins</h2>
              <p className="text-sm text-slate-500 mb-6">Traveler since 2023</p>
              <Button variant="outline" className="w-full rounded-xl text-sm font-bold">Edit Profile</Button>
            </div>

            <nav className="bg-white rounded-3xl p-4 shadow-soft border border-slate-100 space-y-1">
              <button 
                onClick={() => setActiveTab('bookings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'bookings' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Calendar className="w-4 h-4" />
                My Bookings
              </button>
              <button 
                onClick={() => setActiveTab('saved')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'saved' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Heart className="w-4 h-4" />
                Saved Itineraries
              </button>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'settings' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <Settings className="w-4 h-4" />
                Profile Settings
              </button>
              <hr className="my-2 border-slate-100" />
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm text-rose-500 hover:bg-rose-50">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {activeTab === 'bookings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">My Bookings</h1>
                  <Button variant="ghost" className="text-primary font-bold">View past bookings</Button>
                </div>

                <div className="space-y-6">
                  {upcomingBookings.map((exp) => (
                    <div key={exp.experienceId} className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all group">
                      <div className="md:w-48 h-48 shrink-0 overflow-hidden rounded-2xl">
                        <img src={exp.photos[0]} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md">
                            Confirmed
                          </span>
                          <span className="text-xs text-slate-400">Order #LX-92831</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(exp.availability[0]), 'MMM d, yyyy')}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Clock className="w-4 h-4" />
                            {Math.floor(exp.duration / 60)}h {exp.duration % 60}m
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <MapPin className="w-4 h-4" />
                            {exp.location.city}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            {exp.rating}
                          </div>
                        </div>
                        <div className="mt-auto flex gap-3">
                          <Button className="rounded-xl px-6 font-bold" asChild>
                            <Link to={`/experience/${exp.experienceId}`}>View Details</Link>
                          </Button>
                          <Button variant="outline" className="rounded-xl px-6 font-bold">Manage Booking</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'saved' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-slate-900">Saved Itineraries</h1>
                  <Button className="rounded-xl font-bold bg-secondary hover:bg-secondary/90">Create New Itinerary</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {savedExperiences.map((exp) => (
                    <div key={exp.experienceId} className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 group">
                      <div className="relative h-48 overflow-hidden">
                        <img src={exp.photos[0]} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full text-rose-500 shadow-sm">
                          <Heart className="w-4 h-4 fill-rose-500" />
                        </button>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-slate-900 mb-2 line-clamp-1">{exp.title}</h3>
                        <p className="text-sm text-slate-500 mb-4 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location.city}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">${exp.price}</span>
                          <Link to={`/experience/${exp.experienceId}`} className="text-sm font-bold text-slate-900 flex items-center gap-1 hover:underline">
                            View <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <h1 className="text-3xl font-bold text-slate-900">Profile Settings</h1>
                <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input type="text" defaultValue="Sarah Jenkins" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input type="email" defaultValue="sarah@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-slate-700">Bio</label>
                      <textarea rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary">Adventure seeker and digital nomad. Always looking for the most authentic local experiences.</textarea>
                    </div>
                  </div>
                  <div className="flex justify-end gap-4">
                    <Button variant="outline" className="rounded-xl px-8">Discard Changes</Button>
                    <Button className="rounded-xl px-8">Save Changes</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
