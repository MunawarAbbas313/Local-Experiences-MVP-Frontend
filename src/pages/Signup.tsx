import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Github, Chrome as Google, Facebook } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';

export default function Signup() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Visual */}
      <div className="hidden lg:block flex-1 relative overflow-hidden bg-slate-900">
        <img 
          src="https://picsum.photos/seed/signup-visual/1200/1600" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-slate-900/80" />
        <div className="absolute bottom-20 left-20 right-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-5xl font-bold leading-tight mb-8 tracking-tight">
              Join a global community of local explorers.
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold mb-1">2,000+</p>
                <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Vetted Experiences</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">50k+</p>
                <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Happy Travelers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 lg:px-32 bg-white relative z-10">
        <div className="max-w-md w-full mx-auto space-y-10">
          <div className="space-y-4">
            <Link to="/" className="text-3xl font-black tracking-tighter text-primary">
              LOCALX
            </Link>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Create your account</h1>
            <p className="text-slate-500 font-medium">Start your journey with us today. It's free and always will be.</p>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Google className="w-5 h-5 text-rose-500" /> Sign up with Google
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold text-slate-400">
              <span className="bg-white px-4">Or sign up with email</span>
            </div>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-5 top-4.5 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full border border-slate-200 rounded-2xl pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-4.5 text-slate-400 w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full border border-slate-200 rounded-2xl pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-4.5 text-slate-400 w-5 h-5" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full border border-slate-200 rounded-2xl pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all" 
                />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
              <p className="text-xs text-slate-500 leading-relaxed">
                I agree to the <a href="#" className="text-primary font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>.
              </p>
            </div>
            <Button className="w-full py-7 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
              Create Account <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <p className="text-center text-slate-500 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
