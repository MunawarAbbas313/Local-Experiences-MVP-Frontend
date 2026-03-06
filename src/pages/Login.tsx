import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github, Chrome as Google, Facebook } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';

export default function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 lg:px-32 bg-white relative z-10">
        <div className="max-w-md w-full mx-auto space-y-10">
          <div className="space-y-4">
            <Link to="/" className="text-3xl font-black tracking-tighter text-primary">
              LOCALX
            </Link>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Welcome back</h1>
            <p className="text-slate-500 font-medium">Log in to your account to continue your adventure.</p>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Google className="w-5 h-5 text-rose-500" /> Continue with Google
            </button>
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
                <Facebook className="w-5 h-5 text-blue-600" /> Facebook
              </button>
              <button className="flex-1 flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
                <Github className="w-5 h-5 text-slate-900" /> Github
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold text-slate-400">
              <span className="bg-white px-4">Or continue with email</span>
            </div>
          </div>

          <form className="space-y-6">
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
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-4.5 text-slate-400 w-5 h-5" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full border border-slate-200 rounded-2xl pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all" 
                />
              </div>
            </div>
            <Button className="w-full py-7 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
              Log In <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <p className="text-center text-slate-500 font-medium">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary font-bold hover:underline">Sign up for free</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block flex-1 relative overflow-hidden bg-slate-900">
        <img 
          src="https://picsum.photos/seed/login-visual/1200/1600" 
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
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <div key={i} className="w-5 h-5 text-amber-400 fill-current">★</div>)}
            </div>
            <p className="text-3xl font-bold leading-tight mb-8">
              "The best travel platform I've ever used. The local guides are incredible and the experiences are truly unique."
            </p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/seed/testimonial-user/100/100" className="w-14 h-14 rounded-full border-2 border-white/30" />
              <div>
                <p className="font-bold text-xl">Sarah Jenkins</p>
                <p className="text-white/60">Adventure Enthusiast</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
