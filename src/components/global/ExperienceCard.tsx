import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Heart } from 'lucide-react';
import { Experience } from '../../types';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
  key?: string;
}

export default function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={cn("group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col h-full", className)}
    >
      <Link to={`/experience/${experience.experienceId}`} className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={experience.photos[0]} 
          alt={experience.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          {experience.rating}
        </div>
        <button 
          className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur rounded-full text-slate-400 hover:text-rose-500 transition-colors shadow-sm"
          onClick={(e) => {
            e.preventDefault();
            // Handle save
          }}
        >
          <Heart className="w-4 h-4" />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className="bg-primary/90 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md">
            {experience.category}
          </span>
        </div>
      </Link>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
          <MapPin className="w-3 h-3" />
          {experience.location.city}{experience.location.country ? `, ${experience.location.country}` : ''}
        </div>
        
        <Link to={`/experience/${experience.experienceId}`}>
          <h3 className="font-bold text-slate-900 line-clamp-2 mb-3 group-hover:text-primary transition-colors leading-snug">
            {experience.title}
          </h3>
        </Link>

        <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 mt-auto">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {Math.floor(experience.duration / 60)}h {experience.duration % 60 > 0 ? `${experience.duration % 60}m` : ''}
          </div>
          <div className="w-1 h-1 bg-slate-300 rounded-full" />
          <div>{experience.reviewsCount} reviews</div>
        </div>

        <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
          <div className="text-slate-900">
            <span className="text-lg font-bold">${experience.price}</span>
            <span className="text-xs text-slate-500 font-medium"> / person</span>
          </div>
          <Link 
            to={`/experience/${experience.experienceId}`}
            className="text-xs font-bold text-primary hover:underline"
          >
            View details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
