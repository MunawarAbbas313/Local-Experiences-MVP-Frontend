import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  Star, 
  Plus, 
  MoreHorizontal, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  LayoutDashboard,
  Package,
  MessageSquare,
  Settings
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Button } from '../components/ui/Button';
import { MOCK_EXPERIENCES, MOCK_REVIEWS } from '../data/mockData';
import { Link } from 'react-router-dom';

const DATA = [
  { name: 'Mon', earnings: 400, bookings: 4 },
  { name: 'Tue', earnings: 300, bookings: 3 },
  { name: 'Wed', earnings: 600, bookings: 6 },
  { name: 'Thu', earnings: 800, bookings: 8 },
  { name: 'Fri', earnings: 500, bookings: 5 },
  { name: 'Sat', earnings: 1200, bookings: 12 },
  { name: 'Sun', earnings: 900, bookings: 9 },
];

type Tab = 'overview' | 'experiences' | 'bookings' | 'reviews';

export default function HostDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const myExperiences = MOCK_EXPERIENCES.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-slate-200 flex-col sticky top-0 h-screen">
        <div className="p-8">
          <Link to="/" className="text-2xl font-black text-primary tracking-tighter">LX HOST</Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'overview' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <LayoutDashboard className="w-4 h-4" />
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('experiences')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'experiences' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Package className="w-4 h-4" />
            My Experiences
          </button>
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'bookings' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Calendar className="w-4 h-4" />
            Bookings
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'reviews' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <MessageSquare className="w-4 h-4" />
            Reviews
          </button>
        </nav>

        <div className="p-6 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm text-slate-600 hover:bg-slate-50">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 space-y-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back, Elena</h1>
            <p className="text-slate-500">Here's what's happening with your experiences today.</p>
          </div>
          <Button className="rounded-xl px-6 py-6 font-bold flex items-center gap-2 shadow-xl shadow-primary/20" asChild>
            <Link to="/host/create">
              <Plus className="w-5 h-5" /> Create New Experience
            </Link>
          </Button>
        </header>

        {activeTab === 'overview' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Earnings', value: '$12,450', icon: DollarSign, trend: '+12.5%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Active Bookings', value: '48', icon: Calendar, trend: '+5.2%', color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Avg. Rating', value: '4.9', icon: Star, trend: '0.0%', color: 'text-amber-600', bg: 'bg-amber-50' },
                { label: 'Total Views', value: '2,840', icon: Users, trend: '+18.4%', color: 'text-purple-600', bg: 'bg-purple-50' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> {stat.trend}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-slate-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-slate-900">Earnings Overview</h3>
                  <select className="bg-slate-50 border-none rounded-xl px-4 py-2 text-sm font-bold outline-none">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                  </select>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={DATA}>
                      <defs>
                        <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563EB" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                      />
                      <Area type="monotone" dataKey="earnings" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorEarnings)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-slate-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-slate-900">Weekly Bookings</h3>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-xs font-medium text-slate-500">Bookings</span>
                    </div>
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={DATA}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                      <Tooltip 
                        cursor={{fill: '#F8FAFC'}}
                        contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                      />
                      <Bar dataKey="bookings" fill="#2563EB" radius={[6, 6, 0, 0]} barSize={32} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent Experiences Table */}
            <div className="bg-white rounded-[2.5rem] shadow-soft border border-slate-100 overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">My Experiences</h3>
                <Button variant="ghost" className="text-primary font-bold">View All</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Experience</th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Earnings</th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Rating</th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {myExperiences.map((exp) => (
                      <tr key={exp.experienceId} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <img src={exp.photos[0]} className="w-12 h-12 rounded-xl object-cover" />
                            <div>
                              <p className="font-bold text-slate-900">{exp.title}</p>
                              <p className="text-xs text-slate-500">{exp.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md">
                            Active
                          </span>
                        </td>
                        <td className="px-8 py-6 font-bold text-slate-900">${exp.price * 12}</td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-1 font-bold text-slate-900">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            {exp.rating}
                          </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="p-2 text-slate-400 hover:text-slate-900">
                            <MoreHorizontal className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'experiences' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-slate-900">Manage Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MOCK_EXPERIENCES.slice(0, 6).map(exp => (
                <div key={exp.experienceId} className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 flex gap-6">
                  <img src={exp.photos[0]} className="w-32 h-32 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-2">{exp.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">${exp.price} / person</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-lg">Edit</Button>
                      <Button variant="outline" size="sm" className="rounded-lg text-rose-500 hover:bg-rose-50">Pause</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
