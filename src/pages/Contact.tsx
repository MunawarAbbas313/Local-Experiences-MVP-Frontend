import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden -mt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/contact-hero/1920/1080" 
            alt="Contact us" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Get in touch</h1>
            <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto">
              Have questions about an experience or interested in hosting? Our team is here to help you 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Contact Information</h2>
              <p className="text-slate-500 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email us</p>
                  <p className="text-lg font-bold text-slate-900">hello@localxperiences.com</p>
                  <p className="text-sm text-slate-500">For general inquiries</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call us</p>
                  <p className="text-lg font-bold text-slate-900">+1 (555) 123-4567</p>
                  <p className="text-sm text-slate-500">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-orange-50 text-secondary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Visit us</p>
                  <p className="text-lg font-bold text-slate-900">123 Travel Lane, Suite 456</p>
                  <p className="text-sm text-slate-500">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <div className="flex items-center gap-4 text-slate-400">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Global Support available in 12 languages</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-soft border border-slate-100 relative overflow-hidden">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you as soon as possible.
                  </p>
                  <Button variant="outline" className="rounded-xl px-8" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">First Name</label>
                      <input required type="text" placeholder="John" className="w-full border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Last Name</label>
                      <input required type="text" placeholder="Doe" className="w-full border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-6 top-5 text-slate-400" />
                      <input required type="email" placeholder="john@example.com" className="w-full border border-slate-200 rounded-2xl pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <select className="w-full border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all appearance-none bg-white">
                      <option>General Inquiry</option>
                      <option>Hosting Question</option>
                      <option>Booking Support</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea required rows={5} placeholder="How can we help you?" className="w-full border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary transition-all" />
                  </div>
                  <Button type="submit" className="w-full py-7 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="container-custom">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Quick answers to common questions about LocalXperiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: 'How do I book an experience?', a: 'Browse our marketplace, select a date and guest count, and click "Reserve now".' },
              { q: 'Can I cancel my booking?', a: 'Yes, most experiences offer free cancellation up to 24 hours before the start time.' },
              { q: 'How do I become a host?', a: 'Click the "Become a Host" button in the navigation bar to start your application.' },
              { q: 'Is my payment secure?', a: 'Absolutely. We use industry-standard encryption and secure payment gateways.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" /> {faq.q}
                </h3>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
