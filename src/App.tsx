/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ArrowRight,
  Bell,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Globe,
  Home,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Twitter,
  UserPlus,
  Users,
  Youtube,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  Award,
} from 'lucide-react';
import React from 'react';

// --- Shared Assets & Data ---
const LOGO_URL =
  'https://rdnrbgocszptdiljdcvw.supabase.co/storage/v1/object/public/shared-files/7173b553-2c48-4f0a-9338-6c5ee1e3814d/7e5223a9-9e5e-4295-81eb-9e2c4260a7b0.png';
const HERO_BG_URL =
  'https://rdnrbgocszptdiljdcvw.supabase.co/storage/v1/object/public/shared-files/3e5eaba7-455d-406e-bf60-27bc04db77d8/f72f5756-89d5-4e9c-b150-9d326938e5ea.png';

const ANNOUNCEMENTS = [
  {
    id: 1,
    type: 'new',
    title: 'Annual General Body Meeting 2024',
    time: '2h ago',
    desc: 'AGM scheduled on 15th Dec 2024 at 10:00 AM at TGPALA Head Office.',
    icon: Bell,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
  },
  {
    id: 2,
    type: 'standard',
    title: 'Membership Drive Extended',
    time: '1d ago',
    desc: 'Last date for membership registration extended to 31st Dec 2024.',
    icon: UserPlus,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-50',
  },
  {
    id: 3,
    type: 'standard',
    title: 'Professional Development Workshop',
    time: '2d ago',
    desc: "Workshop on 'Emerging Technologies in Education' on 20th Dec 2024.",
    icon: Users,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
  },
];

const OFFICE_BEARERS = [
  {
    name: 'GALI UMASHANKAR',
    role: 'President',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    icon: Award,
    iconColor: 'text-amber-500',
  },
  {
    name: 'ASMATULLAH KHAN',
    role: 'General Secretary',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    icon: Award,
    iconColor: 'text-amber-500',
  },
  {
    name: 'P. ARUN EMMANUEL',
    role: 'Working President',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    icon: Shield,
    iconColor: 'text-emerald-500',
  },
  {
    name: 'GOUTHAM REDDY MAHAKALA',
    role: 'Treasurer',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    icon: Award,
    iconColor: 'text-amber-500',
  },
];

const EVENTS = [
  {
    date: '15',
    month: 'DEC',
    title: 'Annual General Body Meeting',
    time: '15 Dec 2024, 10:00 AM',
    location: 'TGPALA Head Office',
    color: 'bg-blue-800',
  },
  {
    date: '20',
    month: 'DEC',
    title: 'Professional Development Workshop',
    time: '20 Dec 2024, 10:00 AM',
    location: 'TGPALA Conference Hall',
    color: 'bg-blue-800',
  },
  {
    date: '31',
    month: 'DEC',
    title: 'Membership Registration Deadline',
    time: '31 Dec 2024, 11:59 PM',
    location: 'Online Registration Portal',
    color: 'bg-emerald-600',
  },
];

// --- Components ---

const Navbar = () => (
  <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm shrink-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div className="flex items-center justify-between h-20">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex-shrink-0">
            <img
              src={LOGO_URL}
              alt="TGPALA Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-[15px] font-bold text-slate-900 leading-tight tracking-tight max-w-[280px]">
              Telangana Gazetted Polytechnic All Lecturers Association
            </h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 h-full">
          <a
            href="#"
            className="flex items-center gap-2 text-slate-900 font-semibold text-sm border-b-2 border-slate-900 pb-1 mt-1"
          >
            <Home className="w-4 h-4" />
            Home
          </a>
          <a
            href="#"
            className="text-slate-500 font-medium text-sm hover:text-slate-900 transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-slate-500 font-medium text-sm hover:text-slate-900 transition-colors"
          >
            Constitution
          </a>
          <a
            href="#"
            className="text-slate-500 font-medium text-sm hover:text-slate-900 transition-colors"
          >
            Gallery
          </a>
          <a
            href="#"
            className="text-slate-500 font-medium text-sm hover:text-slate-900 transition-colors"
          >
            Contact Us
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium border border-slate-200 rounded-lg px-3 py-2 transition-colors text-sm">
            <Globe className="w-4 h-4" />
            English
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-colors text-sm">
            <Lock className="w-4 h-4" />
            Login
          </button>
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg shrink-0">
    <img
      src={HERO_BG_URL}
      alt="Polytechnic Building"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end min-h-[50%]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            Empowering Educators,<br />
            Strengthening Polytechnic Education
          </h2>
          <p className="text-slate-200 text-sm max-w-lg mb-5">
            Uniting gazetted lecturers across Telangana to promote excellence in
            technical education and professional growth.
          </p>
          <div className="flex items-center gap-3">
            <button className="bg-white text-slate-900 text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
              Explore Association
            </button>
            <button className="bg-slate-900/40 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-slate-800/40 transition-colors shadow-sm">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
        </div>
      </div>
    </div>
  </div>
);

const Announcements = () => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Bell className="w-5 h-5 text-slate-900" />
        <h2 className="text-lg font-bold text-slate-900">Announcements</h2>
      </div>
      <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">
        View All &rarr;
      </a>
    </div>

    <div className="flex-1 flex flex-col gap-4">
      {ANNOUNCEMENTS.map((item) => (
        <div key={item.id} className="flex gap-3 items-start p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm text-slate-600">
            <item.icon className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h4 className="text-sm font-bold text-slate-900 truncate">
                {item.title}
              </h4>
              <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                {item.time}
              </span>
            </div>
            <p className="text-xs text-slate-500 line-clamp-2">
              {item.desc}
            </p>
            {item.type === 'new' && (
              <span className="mt-2 inline-block bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                NEW
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OfficeBearers = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-lg font-bold text-slate-900">Principal Office Bearers</h2>
      <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">
        View All Members &rarr;
      </a>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {OFFICE_BEARERS.map((member, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 mb-3 relative">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-sm font-bold text-slate-900 truncate w-full">
            {member.name}
          </h4>
          <p className="text-xs text-slate-500 mb-4">
            {member.role}
          </p>
          <div className="flex items-center justify-center gap-2 w-full mt-auto">
            <button className="p-1.5 bg-slate-50 text-slate-600 rounded-md hover:bg-slate-100 border border-slate-200 transition-colors">
              <Mail className="w-3.5 h-3.5" />
            </button>
            <button className="p-1.5 bg-slate-50 text-slate-600 rounded-md hover:bg-slate-100 border border-slate-200 transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const UpcomingEvents = () => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-slate-900" />
        <h2 className="text-lg font-bold text-slate-900">Upcoming Events</h2>
      </div>
      <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">
        View Calendar &rarr;
      </a>
    </div>

    <div className="flex-1 flex flex-col gap-4">
      {EVENTS.map((event, idx) => (
        <div key={idx} className="flex gap-3 items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex flex-col items-center justify-center flex-shrink-0">
            <span className="text-[10px] font-bold uppercase opacity-80">{event.month}</span>
            <span className="text-lg font-bold leading-none">{event.date}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-slate-900 truncate mb-1">
              {event.title}
            </h4>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Clock className="w-3 h-3" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
              <MapPin className="w-3 h-3" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 mt-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={LOGO_URL} alt="Logo" className="w-10 h-10 object-contain bg-white rounded p-1" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">TGPALA</h2>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Dedicated to the welfare and professional growth of gazetted
            lecturers in polytechnic institutions across Telangana.
          </p>
          <div className="flex items-center gap-2">
            {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Links */}
        <div>
          <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Quick Links</h3>
          <ul className="space-y-2 text-xs">
            {['About Us', 'Constitution', 'Membership', 'Gallery', 'Contact Us'].map(item => (
              <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        
        {/* Important Links */}
        <div>
          <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Important Links</h3>
          <ul className="space-y-2 text-xs">
            {['TGPALA Bylaws', 'Membership Form', 'Event Calendar', 'Downloads', 'FAQs'].map(item => (
              <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Contact Info</h3>
          <ul className="space-y-3 text-xs">
            <li className="flex gap-2"><MapPin className="w-4 h-4 shrink-0 text-slate-500" /> TGPALA Head Office, Hyderabad</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 shrink-0 text-slate-500" /> +91 93912 34567</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 shrink-0 text-slate-500" /> info@tgpala.org</li>
          </ul>
        </div>
      </div>
      <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 gap-4">
        <p>© 2024 TGPALA. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col gap-8">
        {/* Top Row: Hero & Announcements */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Hero />
          </div>
          <div className="lg:col-span-1">
            <Announcements />
          </div>
        </section>

        {/* Bottom Row: Office Bearers & Events */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <OfficeBearers />
          </div>
          <div className="lg:col-span-1">
            <UpcomingEvents />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


