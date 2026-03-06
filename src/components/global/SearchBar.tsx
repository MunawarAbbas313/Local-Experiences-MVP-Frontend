import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface SearchBarProps {
  className?: string;
  variant?: 'hero' | 'compact';
}

export default function SearchBar({ className, variant = 'hero' }: SearchBarProps) {
  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer", className)}>
        <div className="flex-1 px-4 border-r border-slate-200">
          <p className="text-xs font-bold text-slate-900">Where</p>
          <p className="text-sm text-slate-500 truncate">Search destinations</p>
        </div>
        <div className="flex-1 px-4 border-r border-slate-200">
          <p className="text-xs font-bold text-slate-900">When</p>
          <p className="text-sm text-slate-500 truncate">Add dates</p>
        </div>
        <div className="flex-1 px-4">
          <p className="text-xs font-bold text-slate-900">Who</p>
          <p className="text-sm text-slate-500 truncate">Add guests</p>
        </div>
        <div className="bg-primary p-2 rounded-full text-white">
          <Search className="w-4 h-4" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-4xl bg-white rounded-2xl md:rounded-full shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-center gap-2", className)}>
      <div className="flex-1 w-full flex items-center px-4 py-2 md:py-0 border-b md:border-b-0 md:border-r border-slate-100">
        <MapPin className="w-5 h-5 text-primary mr-3 shrink-0" />
        <div className="flex-1">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Location</label>
          <input 
            type="text" 
            placeholder="Where are you going?" 
            className="w-full bg-transparent border-none p-0 text-slate-900 placeholder:text-slate-400 focus:ring-0 text-sm font-medium"
          />
        </div>
      </div>

      <div className="flex-1 w-full flex items-center px-4 py-2 md:py-0 border-b md:border-b-0 md:border-r border-slate-100">
        <Calendar className="w-5 h-5 text-primary mr-3 shrink-0" />
        <div className="flex-1">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Date</label>
          <input 
            type="text" 
            placeholder="Add dates" 
            className="w-full bg-transparent border-none p-0 text-slate-900 placeholder:text-slate-400 focus:ring-0 text-sm font-medium"
          />
        </div>
      </div>

      <div className="flex-1 w-full flex items-center px-4 py-2 md:py-0">
        <Users className="w-5 h-5 text-primary mr-3 shrink-0" />
        <div className="flex-1">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Guests</label>
          <input 
            type="text" 
            placeholder="Add guests" 
            className="w-full bg-transparent border-none p-0 text-slate-900 placeholder:text-slate-400 focus:ring-0 text-sm font-medium"
          />
        </div>
      </div>

      <Button className="w-full md:w-auto md:rounded-full px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20">
        <Search className="w-5 h-5 mr-2" /> Search
      </Button>
    </div>
  );
}
