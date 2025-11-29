
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';

interface SignupProps {
  onNavigate: (page: string) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const Signup = ({ onNavigate }: SignupProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onNavigate('home');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden p-4 font-sans selection:bg-accent selection:text-black">
      {/* Dynamic Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 pointer-events-none" />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -50, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-md bg-[#0a0a0a]/60 border border-white/10 rounded-3xl p-8 md:p-10 relative z-10 shadow-2xl backdrop-blur-xl overflow-hidden group"
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none rounded-3xl" />
        <div className="absolute -inset-[1px] bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl -z-10 opacity-70" />

        <motion.button
          variants={itemVariants}
          onClick={() => onNavigate('home')}
          className="absolute top-6 left-6 text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider group z-20"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </motion.button>

        <motion.div variants={itemVariants} className="text-center mt-8 mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)] transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500">
              <div className="w-4 h-4 bg-black rounded-full" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Create Account</h2>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">Join thousands of teams scaling with Pixatlas.</p>
        </motion.div>

        <form onSubmit={handleSignup} className="space-y-4 relative z-10">
          <motion.div variants={itemVariants} className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors z-10" size={18} />
              <input
                type="text"
                className="w-full bg-[#111]/80 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-accent/50 focus:bg-[#151515] transition-all placeholder:text-gray-700 relative z-10"
                placeholder="John Doe"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors z-10" size={18} />
              <input
                type="email"
                className="w-full bg-[#111]/80 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-accent/50 focus:bg-[#151515] transition-all placeholder:text-gray-700 relative z-10"
                placeholder="name@company.com"
                required
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent transition-colors z-10" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full bg-[#111]/80 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-white focus:outline-none focus:border-accent/50 focus:bg-[#151515] transition-all placeholder:text-gray-700 relative z-10"
                placeholder="Create a password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors focus:outline-none z-20"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-start gap-2 text-xs text-gray-400 pt-2 relative z-10">
            <div className="relative mt-0.5">
              <input type="checkbox" required className="peer sr-only" />
              <div className="w-4 h-4 border border-gray-600 rounded bg-[#111] peer-checked:bg-accent peer-checked:border-accent transition-all" />
              <div className="absolute inset-0 flex items-center justify-center text-black opacity-0 peer-checked:opacity-100 pointer-events-none">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
            <span>I agree to the <a href="#" className="text-white hover:text-accent underline transition-colors">Terms of Service</a> and <a href="#" className="text-white hover:text-accent underline transition-colors">Privacy Policy</a>.</span>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-black font-bold py-3.5 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative z-10 overflow-hidden group/btn"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              {loading ? (
                <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>Create Account <ArrowRight size={18} /></>
              )}
            </span>
          </motion.button>
        </form>

        <motion.div variants={itemVariants} className="mt-8 relative z-10">
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <span className="relative bg-[#0a0a0a] px-4 text-[10px] uppercase text-gray-500 font-bold tracking-widest">Or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl py-2.5 transition-all text-sm font-medium text-gray-300 hover:text-white group/social">
              <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" /></svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl py-2.5 transition-all text-sm font-medium text-gray-300 hover:text-white group/social">
              <svg className="w-5 h-5 group-hover/social:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.54-.26-1.07-.26-1.6 0-1.03.48-2.1.55-3.09-.4-1.93-1.87-2.65-4.82-1.12-7.5 1.15-2 3.16-2.22 4.2-1.3 1.05.95 2.58.95 3.63 0 1.05-.92 2.76-.84 3.7.4 1.58 2.1 1.12 5.2-.6 7.7-.42.6-1 1.34-1.8 1.93l-.24-.23zM12.03 7.25c-.14-2.53 2.05-4.66 4.54-4.72.3 2.57-2.25 4.88-4.54 4.72z" /></svg>
              Apple
            </button>
          </div>
          <p className="text-center text-gray-500 text-xs mt-6">
            Already have an account? <button onClick={() => onNavigate('login')} className="text-accent hover:underline font-bold transition-colors">Log In</button>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
