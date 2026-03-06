import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Camera, MapPin, DollarSign, Clock, Tag, Calendar, CheckCircle2, Plus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

type Step = 'basic' | 'photos' | 'location' | 'pricing' | 'review';

export default function CreateExperience() {
  const [step, setStep] = useState<Step>('basic');
  const navigate = useNavigate();

  const steps: Step[] = ['basic', 'photos', 'location', 'pricing', 'review'];
  const currentStepIndex = steps.indexOf(step);

  const nextStep = () => {
    const next = steps[currentStepIndex + 1];
    if (next) setStep(next);
  };

  const prevStep = () => {
    const prev = steps[currentStepIndex - 1];
    if (prev) setStep(prev);
    else navigate(-1);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container-custom max-w-3xl">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={prevStep} className="rounded-full bg-white shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-slate-900">Create an experience</h1>
          </div>
          <div className="flex gap-1">
            {steps.map((s, i) => (
              <div 
                key={s} 
                className={`h-1.5 w-8 rounded-full transition-all ${i <= currentStepIndex ? 'bg-primary' : 'bg-slate-200'}`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-soft border border-slate-100">
          <AnimatePresence mode="wait">
            {step === 'basic' && (
              <motion.div
                key="basic"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-slate-900">The basics</h2>
                  <p className="text-slate-500">Give your experience a catchy title and category.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Experience Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Traditional Pasta Making in Rome" 
                      className="w-full border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Category</label>
                    <select className="w-full border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary text-lg appearance-none bg-white">
                      <option>Food</option>
                      <option>Outdoor</option>
                      <option>Culture</option>
                      <option>Art</option>
                      <option>Nightlife</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Description</label>
                    <textarea 
                      rows={5} 
                      placeholder="Describe what guests will do, see, and experience..." 
                      className="w-full border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary text-lg"
                    />
                  </div>
                </div>
                <Button className="w-full py-7 rounded-2xl font-bold text-lg" onClick={nextStep}>
                  Next: Add Photos
                </Button>
              </motion.div>
            )}

            {step === 'photos' && (
              <motion.div
                key="photos"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-slate-900">Add some photos</h2>
                  <p className="text-slate-500">Experiences with high-quality photos get 3x more bookings.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-primary hover:bg-blue-50 transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-white transition-all">
                      <Camera className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-slate-500 group-hover:text-primary">Upload Main Photo</p>
                  </div>
                  <div className="aspect-square border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-primary hover:bg-blue-50 transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-white transition-all">
                      <Plus className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-bold text-slate-500 group-hover:text-primary">Add More</p>
                  </div>
                </div>
                <Button className="w-full py-7 rounded-2xl font-bold text-lg" onClick={nextStep}>
                  Next: Set Location
                </Button>
              </motion.div>
            )}

            {step === 'location' && (
              <motion.div
                key="location"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-slate-900">Where is it?</h2>
                  <p className="text-slate-500">Tell guests where they'll meet you.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Meeting Point Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-6 top-5 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Enter full address" 
                        className="w-full border border-slate-200 rounded-2xl pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary text-lg"
                      />
                    </div>
                  </div>
                  <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
                    <img 
                      src="https://picsum.photos/seed/map-picker/800/600" 
                      className="w-full h-full object-cover opacity-50 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-primary" />
                        <span className="font-bold text-sm">Map Picker Placeholder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full py-7 rounded-2xl font-bold text-lg" onClick={nextStep}>
                  Next: Pricing & Duration
                </Button>
              </motion.div>
            )}

            {step === 'pricing' && (
              <motion.div
                key="pricing"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-slate-900">Pricing & Duration</h2>
                  <p className="text-slate-500">Set your price and how long the experience lasts.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Price per person</label>
                    <div className="relative">
                      <DollarSign className="absolute left-6 top-5 text-slate-400" />
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        className="w-full border border-slate-200 rounded-2xl pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary text-lg font-bold"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Duration (minutes)</label>
                    <div className="relative">
                      <Clock className="absolute left-6 top-5 text-slate-400" />
                      <input 
                        type="number" 
                        placeholder="120" 
                        className="w-full border border-slate-200 rounded-2xl pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary text-lg font-bold"
                      />
                    </div>
                  </div>
                </div>
                <Button className="w-full py-7 rounded-2xl font-bold text-lg" onClick={nextStep}>
                  Next: Review & Publish
                </Button>
              </motion.div>
            )}

            {step === 'review' && (
              <motion.div
                key="review"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-8"
              >
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-slate-900">Looks great!</h2>
                  <p className="text-slate-500">Review your details before publishing.</p>
                </div>
                
                <div className="bg-slate-50 rounded-3xl p-8 text-left space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Title</span>
                    <span className="font-bold text-slate-900">Traditional Pasta Making</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Category</span>
                    <span className="font-bold text-slate-900">Food</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Price</span>
                    <span className="font-bold text-slate-900">$85 / person</span>
                  </div>
                </div>

                <Button className="w-full py-7 rounded-2xl font-bold text-lg bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-200" onClick={() => navigate('/host')}>
                  Publish Experience
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
