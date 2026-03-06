import { useState } from "react";
import { motion } from "motion/react";
import { MOCK_EXPERIENCES } from "../data/mockData";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Explore() {
  const [category, setCategory] = useState<string>("All");
  const categories = [
    "All",
    "Food & Drink",
    "Arts & Culture",
    "Wellness",
    "Outdoors",
    "Nightlife",
  ];

  const filtered =
    category === "All"
      ? MOCK_EXPERIENCES
      : MOCK_EXPERIENCES.filter((e) => e.category === category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
            Explore Experiences
          </h1>
          <p className="text-slate-500 text-lg">
            Find your next local adventure.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 scrollbar-hide">
          <Button variant="outline" className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </Button>
          <div className="h-8 w-px bg-slate-200 mx-2" />
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              onClick={() => setCategory(cat)}
              className="whitespace-nowrap rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar (Desktop) */}
        <div className="hidden lg:block space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5" /> Filters
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-slate-900 mb-3">
                  Price Range
                </h4>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                  <span className="text-slate-400">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-900 mb-3">
                  Duration
                </h4>
                <div className="space-y-2">
                  {["< 2 hours", "2-4 hours", "Half day", "Full day"].map(
                    (d) => (
                      <label
                        key={d}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                        />
                        {d}
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-900 mb-3">
                  Rating
                </h4>
                <div className="space-y-2">
                  {[5, 4, 3].map((r) => (
                    <label
                      key={r}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <div className="flex items-center">
                        {Array.from({ length: r }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                        <span className="ml-1">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <Button className="w-full mt-8">Apply Filters</Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="lg:col-span-3">
          <div className="mb-4 text-sm text-slate-500">
            Showing {filtered.length} experiences
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((exp) => (
              <Link
                key={exp.experienceId}
                to={`/experience/${exp.experienceId}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={exp.photos[0]}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      {exp.rating}{" "}
                      <span className="text-slate-500 font-normal">
                        ({exp.reviewsCount})
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 mb-2 uppercase tracking-wider">
                      <span>{exp.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 mt-auto">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location.city}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {Math.floor(exp.duration / 60)}h{" "}
                        {exp.duration % 60 > 0 ? `${exp.duration % 60}m` : ""}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="font-semibold text-lg">
                        ${exp.price}{" "}
                        <span className="text-sm text-slate-500 font-normal">
                          / person
                        </span>
                      </div>
                    </div>
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
