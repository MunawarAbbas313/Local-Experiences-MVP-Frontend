import { motion } from "motion/react";
import { MOCK_USERS, MOCK_EXPERIENCES } from "../data/mockData";
import {
  MapPin,
  Calendar,
  Settings,
  LogOut,
  CreditCard,
  Heart,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Profile() {
  const user = MOCK_USERS[2]; // Sarah Jenkins (Traveler)
  const savedExperiences = MOCK_EXPERIENCES.slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto space-y-12"
    >
      {/* Profile Header */}
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={user.profilePic}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          referrerPolicy="no-referrer"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {user.name}
          </h1>
          <p className="text-slate-500 mb-4">{user.bio}</p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              New York, USA
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Joined 2023
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex items-center gap-2">
            <Settings className="w-4 h-4" /> Edit Profile
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </Button>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-xl bg-emerald-50 text-emerald-700 font-medium flex items-center gap-3">
            <Calendar className="w-5 h-5" /> My Bookings
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-600 font-medium flex items-center gap-3 transition-colors">
            <Heart className="w-5 h-5" /> Saved Itineraries
          </button>
          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-600 font-medium flex items-center gap-3 transition-colors">
            <CreditCard className="w-5 h-5" /> Payment Methods
          </button>
        </div>

        <div className="md:col-span-3 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Upcoming Bookings
          </h2>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex flex-col sm:flex-row">
            <div className="w-full sm:w-48 h-48 sm:h-auto">
              <img
                src={savedExperiences[0].photos[0]}
                alt={savedExperiences[0].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Confirmed
                  </span>
                  <span className="text-sm text-slate-500">Booking #12345</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {savedExperiences[0].title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Tomorrow at 10:00 AM • 2 Guests
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 pt-8 border-t border-slate-200">
            Saved Experiences
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {savedExperiences.map((exp) => (
              <Link
                key={exp.experienceId}
                to={`/experience/${exp.experienceId}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-100">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={exp.photos[0]}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-red-500 hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 line-clamp-1 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {exp.location.city}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
