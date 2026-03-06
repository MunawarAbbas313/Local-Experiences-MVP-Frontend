import { motion } from 'motion/react';
import { Camera, Heart, Share2, MapPin, Instagram } from 'lucide-react';

export default function Gallery() {
  const images = [
    { id: 1, url: 'https://picsum.photos/seed/gal1/800/1000', title: 'Sunset Kayaking', location: 'Lake Como, Italy', size: 'large' },
    { id: 2, url: 'https://picsum.photos/seed/gal2/800/600', title: 'Street Food Tour', location: 'Bangkok, Thailand', size: 'small' },
    { id: 3, url: 'https://picsum.photos/seed/gal3/800/800', title: 'Neon Photography', location: 'Tokyo, Japan', size: 'medium' },
    { id: 4, url: 'https://picsum.photos/seed/gal4/800/1200', title: 'Mountain Hiking', location: 'Swiss Alps', size: 'large' },
    { id: 5, url: 'https://picsum.photos/seed/gal5/800/600', title: 'Pasta Workshop', location: 'Rome, Italy', size: 'small' },
    { id: 6, url: 'https://picsum.photos/seed/gal6/800/800', title: 'Desert Safari', location: 'Dubai, UAE', size: 'medium' },
    { id: 7, url: 'https://picsum.photos/seed/gal7/800/1000', title: 'Hot Air Balloon', location: 'Cappadocia, Turkey', size: 'large' },
    { id: 8, url: 'https://picsum.photos/seed/gal8/800/600', title: 'Wine Tasting', location: 'Bordeaux, France', size: 'small' },
    { id: 9, url: 'https://picsum.photos/seed/gal9/800/800', title: 'Traditional Tea', location: 'Kyoto, Japan', size: 'medium' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-24 -mt-24">
        <div className="container-custom pt-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Camera className="w-4 h-4" />
              <span>Community Moments</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Captured by you.</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Explore the world through the lens of our community. Share your experiences with #LocalXperiences for a chance to be featured.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10">
              <button className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">
                <Instagram className="w-5 h-5" /> Follow us
              </button>
              <button className="flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all">
                <Share2 className="w-5 h-5" /> Share yours
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="container-custom mt-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-[2rem] overflow-hidden break-inside-avoid shadow-soft border border-slate-100"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{img.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                      <MapPin className="w-4 h-4" />
                      {img.location}
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="p-2 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/40 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/40 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-600 font-bold hover:bg-slate-100 transition-all">
            Load more moments
          </button>
        </div>
      </section>
    </div>
  );
}
