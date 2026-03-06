import { cn } from '../../lib/utils';
import { Utensils, Mountain, Landmark, Palette, Music, Heart, Users, Compass } from 'lucide-react';

const CATEGORIES = [
  { name: 'Food', icon: Utensils, color: 'bg-orange-100 text-orange-600' },
  { name: 'Outdoor', icon: Mountain, color: 'bg-emerald-100 text-emerald-600' },
  { name: 'Culture', icon: Landmark, color: 'bg-blue-100 text-blue-600' },
  { name: 'Workshops', icon: Palette, color: 'bg-purple-100 text-purple-600' },
  { name: 'Nightlife', icon: Music, color: 'bg-rose-100 text-rose-600' },
  { name: 'Art', icon: Palette, color: 'bg-indigo-100 text-indigo-600' },
  { name: 'Family', icon: Users, color: 'bg-cyan-100 text-cyan-600' },
  { name: 'Adventure', icon: Compass, color: 'bg-amber-100 text-amber-600' },
];

interface CategoryChipsProps {
  activeCategory?: string;
  onSelect?: (category: string) => void;
  className?: string;
}

export default function CategoryChips({ activeCategory, onSelect, className }: CategoryChipsProps) {
  return (
    <div className={cn("flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide", className)}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onSelect?.(cat.name)}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all shrink-0 font-medium text-sm",
            activeCategory === cat.name
              ? "bg-slate-900 border-slate-900 text-white shadow-lg"
              : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
          )}
        >
          <cat.icon className={cn("w-4 h-4", activeCategory === cat.name ? "text-white" : "text-slate-400")} />
          {cat.name}
        </button>
      ))}
    </div>
  );
}
