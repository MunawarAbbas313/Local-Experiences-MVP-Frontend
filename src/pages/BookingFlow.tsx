import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Calendar, Users, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MOCK_EXPERIENCES } from '../data/mockData';
import { format } from 'date-fns';

type Step = 'select_slot' | 'guest_count' | 'payment' | 'confirmation';

export default function BookingFlow() {
  const { experienceId } = useParams();
  const navigate = useNavigate();
  const experience = MOCK_EXPERIENCES.find(e => e.experienceId === experienceId);
  
  const [step, setStep] = useState<Step>('select_slot');
  const [guests, setGuests] = useState(1);
  const [selectedDate, setSelectedDate] = useState(experience?.availability[0] || '');

  if (!experience) return <div>Experience not found</div>;

  const steps: Step[] = ['select_slot', 'guest_count', 'payment', 'confirmation'];
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

  const totalPrice = (experience.price * guests) + 15;

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" onClick={prevStep} className="rounded-full bg-white shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-slate-900">Confirm and pay</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Main Flow */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100">
              <AnimatePresence mode="wait">
                {step === 'select_slot' && (
                  <motion.div
                    key="select_slot"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">Select a date</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {experience.availability.map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`p-4 rounded-2xl border-2 text-left transition-all ${
                            selectedDate === date 
                              ? 'border-primary bg-blue-50/50' 
                              : 'border-slate-100 hover:border-slate-200'
                          }`}
                        >
                          <p className="font-bold text-slate-900">{format(new Date(date), 'EEEE, MMMM d')}</p>
                          <p className="text-sm text-slate-500">{format(new Date(date), 'h:mm a')}</p>
                        </button>
                      ))}
                    </div>
                    <Button className="w-full py-6 rounded-xl font-bold text-lg" onClick={nextStep}>
                      Continue
                    </Button>
                  </motion.div>
                )}

                {step === 'guest_count' && (
                  <motion.div
                    key="guest_count"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                        <Users className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">How many guests?</h2>
                    </div>
                    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                      <div>
                        <p className="font-bold text-slate-900">Adults</p>
                        <p className="text-sm text-slate-500">Ages 13 or above</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-slate-900"
                        >
                          -
                        </button>
                        <span className="font-bold text-lg w-4 text-center">{guests}</span>
                        <button 
                          onClick={() => setGuests(guests + 1)}
                          className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:border-slate-900"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <Button className="w-full py-6 rounded-xl font-bold text-lg" onClick={nextStep}>
                      Continue to payment
                    </Button>
                  </motion.div>
                )}

                {step === 'payment' && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">Payment details</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 border border-slate-200 rounded-xl flex items-center gap-4">
                        <CreditCard className="w-6 h-6 text-slate-400" />
                        <input type="text" placeholder="Card number" className="flex-1 outline-none text-sm" />
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1 p-4 border border-slate-200 rounded-xl">
                          <input type="text" placeholder="MM / YY" className="w-full outline-none text-sm" />
                        </div>
                        <div className="flex-1 p-4 border border-slate-200 rounded-xl">
                          <input type="text" placeholder="CVV" className="w-full outline-none text-sm" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-4">
                      <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                      <p className="text-sm text-emerald-800">
                        Your payment is secure. We use industry-standard encryption to protect your data.
                      </p>
                    </div>

                    <Button className="w-full py-6 rounded-xl font-bold text-lg bg-emerald-600 hover:bg-emerald-700" onClick={nextStep}>
                      Pay ${totalPrice}
                    </Button>
                  </motion.div>
                )}

                {step === 'confirmation' && (
                  <motion.div
                    key="confirmation"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Booking confirmed!</h2>
                    <p className="text-slate-500 max-w-sm mx-auto">
                      You're all set! We've sent a confirmation email to your inbox with all the details.
                    </p>
                    <div className="pt-8 flex flex-col gap-3">
                      <Button className="w-full py-4 rounded-xl font-bold" asChild>
                        <Link to="/dashboard">View my bookings</Link>
                      </Button>
                      <Button variant="ghost" className="w-full py-4 rounded-xl font-bold" asChild>
                        <Link to="/">Back to home</Link>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 sticky top-28 space-y-6">
              <div className="flex gap-4 pb-6 border-b border-slate-100">
                <img src={experience.photos[0]} className="w-24 h-24 rounded-2xl object-cover" />
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{experience.category}</p>
                  <h3 className="font-bold text-slate-900 line-clamp-2 leading-tight">{experience.title}</h3>
                  <div className="flex items-center gap-1 mt-2 text-sm font-bold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    {experience.rating}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900">Price details</h4>
                <div className="flex justify-between text-slate-600">
                  <span>${experience.price} x {guests} guests</span>
                  <span>${experience.price * guests}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="underline">Service fee</span>
                  <span>$15</span>
                </div>
                <hr className="border-slate-100" />
                <div className="flex justify-between font-bold text-slate-900 text-xl">
                  <span>Total (USD)</span>
                  <span>${totalPrice}</span>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>{format(new Date(selectedDate), 'MMM d, yyyy')}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Users className="w-4 h-4" />
                  <span>{guests} {guests === 1 ? 'guest' : 'guests'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
