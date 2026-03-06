import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MOCK_EXPERIENCES, MOCK_USERS, MOCK_REVIEWS, MOCK_COMMENTS } from '../data/mockData';
import { MapPin, Clock, Star, Share, Heart, Calendar, Users, CheckCircle2, ChevronRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { format } from 'date-fns';
import { cn } from '../lib/utils';

export default function ExperienceDetail() {
  const { id } = useParams();
  const experience = MOCK_EXPERIENCES.find(e => e.experienceId === id);
  const host = MOCK_USERS.find(u => u.userId === experience?.hostId);
  const reviews = MOCK_REVIEWS.filter(r => r.experienceId === id);
  const comments = MOCK_COMMENTS.filter(c => c.experienceId === id);

  if (!experience || !host) {
    return <div className="p-24 text-center text-slate-500">Experience not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-12 pb-24"
    >
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{experience.title}</h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-slate-900">{experience.rating}</span>
              <span className="text-slate-500 underline cursor-pointer">{experience.reviewsCount} reviews</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500">
              <MapPin className="w-4 h-4" />
              <span className="underline cursor-pointer">{experience.location.city}{experience.location.country ? `, ${experience.location.country}` : ''}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 underline">
              <Share className="w-4 h-4" /> Share
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 underline">
              <Heart className="w-4 h-4" /> Save
            </Button>
          </div>
        </div>
      </div>

      {/* Gallery - Airbnb Style */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[500px] rounded-3xl overflow-hidden shadow-soft">
        <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
          <img 
            src={experience.photos[0]} 
            alt="Main" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>
        <div className="relative group cursor-pointer hidden md:block">
          <img 
            src={experience.photos[1] || 'https://picsum.photos/seed/placeholder1/800/600'} 
            alt="Gallery 1" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>
        <div className="relative group cursor-pointer hidden md:block">
          <img 
            src={experience.photos[2] || 'https://picsum.photos/seed/placeholder2/800/600'} 
            alt="Gallery 2" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>
        <div className="relative group cursor-pointer hidden md:block">
          <img 
            src="https://picsum.photos/seed/gallery3/800/600" 
            alt="Gallery 3" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>
        <div className="relative group cursor-pointer hidden md:block">
          <img 
            src="https://picsum.photos/seed/gallery4/800/600" 
            alt="Gallery 4" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          <Button variant="outline" className="absolute bottom-6 right-6 bg-white/90 backdrop-blur border-slate-900 text-slate-900 font-bold">
            Show all photos
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Host Info */}
          <section className="flex items-center justify-between pb-8 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Hosted by {host.name}</h2>
              <p className="text-slate-500">Host since {host.joinedDate ? format(new Date(host.joinedDate), 'MMMM yyyy') : 'Recently joined'}</p>
            </div>
            <Link to={`/profile/${host.userId}`}>
              <img 
                src={host.profilePic} 
                alt={host.name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                referrerPolicy="no-referrer"
              />
            </Link>
          </section>

          {/* Highlights */}
          <section className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <MessageSquare className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Great communication</h3>
                <p className="text-slate-500">100% of recent guests rated {host.name} 5-star in communication.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Secure booking</h3>
                <p className="text-slate-500">Every booking is protected by LocalXperiences Guarantee.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 mt-1">
                <Calendar className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Free cancellation</h3>
                <p className="text-slate-500">Cancel up to 24 hours before the experience for a full refund.</p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Description */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">About this experience</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {experience.description}
            </p>
            <Button variant="ghost" className="p-0 text-slate-900 font-bold underline flex items-center gap-1">
              Show more <ChevronRight className="w-4 h-4" />
            </Button>
          </section>

          {/* Tags */}
          <section className="flex flex-wrap gap-2">
            {experience.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </section>

          <hr className="border-slate-100" />

          {/* Reviews */}
          <section className="space-y-8">
            <div className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              {experience.rating} · {experience.reviewsCount} reviews
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map(review => (
                <div key={review.reviewId} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img src={`https://picsum.photos/seed/${review.userId}/100/100`} className="w-12 h-12 rounded-full" />
                    <div>
                      <p className="font-bold text-slate-900">Guest User</p>
                      <p className="text-xs text-slate-500">{review.date ? format(new Date(review.date), 'MMMM yyyy') : 'Recently'}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed line-clamp-3">{review.comment}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="rounded-xl px-8 py-6 border-slate-900 text-slate-900 font-bold">
              Show all {experience.reviewsCount} reviews
            </Button>
          </section>

          <hr className="border-slate-100" />

          {/* Q&A / Comments */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Questions & Answers</h2>
            <div className="space-y-6">
              {comments.map(comment => (
                <div key={comment.commentId} className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <p className="font-bold text-slate-900 mb-2">Question</p>
                    <p className="text-slate-600">{comment.text}</p>
                  </div>
                  {comment.replies?.map(reply => (
                    <div key={reply.commentId} className="ml-8 bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                      <p className="font-bold text-emerald-900 mb-2">Host Answer</p>
                      <p className="text-emerald-700">{reply.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Ask the host a question..." 
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              />
              <Button className="rounded-xl px-6">Ask</Button>
            </div>
          </section>
        </div>

        {/* Right Column: Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white border border-slate-200 rounded-3xl p-8 shadow-soft space-y-6">
            <div className="flex items-end justify-between">
              <div className="text-slate-900">
                <span className="text-2xl font-bold">${experience.price}</span>
                <span className="text-slate-500 font-medium"> / person</span>
              </div>
              <div className="flex items-center gap-1 text-sm font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {experience.rating}
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-slate-200 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Date</label>
                  <p className="text-sm font-medium text-slate-900">{format(new Date(experience.availability[0]), 'MMM d, yyyy')}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
              <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Guests</label>
                  <p className="text-sm font-medium text-slate-900">2 guests</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            <Button size="lg" className="w-full py-7 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20" asChild>
              <Link to={`/booking/${experience.experienceId}`}>Reserve now</Link>
            </Button>
            
            <p className="text-center text-sm text-slate-500">You won't be charged yet</p>

            <div className="space-y-4 pt-4">
              <div className="flex justify-between text-slate-600">
                <span className="underline">${experience.price} x 2 guests</span>
                <span>${experience.price * 2}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="underline">Service fee</span>
                <span>$15</span>
              </div>
              <hr className="border-slate-100" />
              <div className="flex justify-between font-bold text-slate-900 text-lg">
                <span>Total</span>
                <span>${experience.price * 2 + 15}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
