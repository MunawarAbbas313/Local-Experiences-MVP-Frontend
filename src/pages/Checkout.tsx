import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { MOCK_EXPERIENCES } from "../data/mockData";
import {
  ChevronLeft,
  CreditCard,
  Lock,
  Calendar,
  Users,
  MapPin,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { format } from "date-fns";

export default function Checkout() {
  const { id } = useParams();
  const experience = MOCK_EXPERIENCES.find((e) => e.experienceId === id);

  if (!experience) {
    return (
      <div className="p-8 text-center text-slate-500">Experience not found</div>
    );
  }

  const guests = 2;
  const slot = experience.availability[0];
  const subtotal = experience.price * guests;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto space-y-8"
    >
      <div className="flex items-center gap-4 mb-8">
        <Link
          to={`/experience/${id}`}
          className="p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-slate-600" />
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">Confirm and pay</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Form */}
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Your trip</h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Dates</h3>
                <p className="text-slate-600">
                  {format(new Date(slot), "MMM d, yyyy")}
                </p>
                <p className="text-slate-500 text-sm">
                  {format(new Date(slot), "h:mm a")}
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-emerald-600 font-semibold underline"
              >
                Edit
              </Button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Guests</h3>
                <p className="text-slate-600">{guests} guests</p>
              </div>
              <Button
                variant="ghost"
                className="text-emerald-600 font-semibold underline"
              >
                Edit
              </Button>
            </div>
          </section>

          <hr className="border-slate-200" />

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-between">
              Pay with
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">
                  VISA
                </div>
                <div className="w-10 h-6 bg-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">
                  MC
                </div>
              </div>
            </h2>

            <div className="space-y-4">
              <div className="border border-slate-300 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-300">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="font-medium text-slate-900 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-slate-400" /> Credit
                      or debit card
                    </span>
                  </label>
                </div>
                <div className="p-4 bg-slate-50 space-y-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Expiration"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="ZIP code"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-200" />

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Cancellation policy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-900">
                Free cancellation for 48 hours.
              </span>{" "}
              Cancel before {format(new Date(slot), "MMM d")} for a partial
              refund.
            </p>
          </section>

          <hr className="border-slate-200" />

          <div className="space-y-6">
            <p className="text-xs text-slate-500 leading-relaxed">
              By selecting the button below, I agree to the Host's House Rules,
              Ground rules for guests, LocalXperiences's Rebooking and Refund
              Policy, and that LocalXperiences can charge my payment method if
              I'm responsible for damage.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg px-12 py-6 rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
            >
              <Lock className="w-5 h-5" /> Confirm and pay
            </Button>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white border border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/50">
            <div className="flex gap-4 mb-6 pb-6 border-b border-slate-200">
              <img
                src={experience.photos[0]}
                alt={experience.title}
                className="w-28 h-28 rounded-xl object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1 block">
                    {experience.category}
                  </span>
                  <h3 className="font-bold text-slate-900 line-clamp-2">
                    {experience.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-sm text-slate-600">
                  <MapPin className="w-3 h-3" /> {experience.location.city}
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Price details
            </h3>

            <div className="space-y-4 mb-6 pb-6 border-b border-slate-200">
              <div className="flex justify-between text-slate-600">
                <span>
                  ${experience.price} x {guests} guests
                </span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span className="underline cursor-pointer">Service fee</span>
                <span>${serviceFee}</span>
              </div>
            </div>

            <div className="flex justify-between font-bold text-xl text-slate-900">
              <span>Total (USD)</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
