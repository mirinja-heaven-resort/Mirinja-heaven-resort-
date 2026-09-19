import React, { useState } from 'react';
import { initializeApp } from "firebase/app";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Yh7wffWmRMyBTXc2PRlBfE7n8uvgMBQ",
  authDomain: "mirinja-heaven-resort.firebaseapp.com",
  projectId: "mirinja-heaven-resort",
  storageBucket: "mirinja-heaven-resort.firebasestorage.app",
  messagingSenderId: "964547613363",
  appId: "1:964547613363:web:98609abce7629e402596c6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const cottagesData = [
  {
    id: 'bachelor',
    name: 'ব্যাচেলর পয়েন্ট কটেজ',
    price: '৩,৫০০',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    description: 'সুন্দর ভিউ সহ ৫ জন থাকার উপযুক্ত আধুনিক ফ্যামিলি কটেজ।'
  },
  {
    id: 'pod',
    name: 'পড হাউস (Pod House)',
    price: '৪,৫০০',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    description: 'লুক্সারি মডার্ন পড হাউস, কাপল ও প্রিমিয়াম স্টে-এর জন্য পারফেক্ট।'
  },
  {
    id: 'jum',
    name: 'জুম ঘর কটেজ',
    price: '২,৮০০',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80',
    description: 'পাহাড়ি ট্র্যাডিশনাল জুম ঘর থিমের কটেজ, একদম প্রাকৃতিক পরিবেশ।'
  }
];

function App() {
  const [selectedCottage, setSelectedCottage] = useState('');

  const handleSelectCottage = (cottageId) => {
    setSelectedCottage(cottageId);
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⛰️</span>
            <div>
              <h1 className="text-xl font-bold tracking-wide text-emerald-400">MIRINJA HEAVEN RESORT</h1>
              <p className="text-xs text-slate-400 tracking-wider">LAMA, BANDARBAN</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-emerald-400 transition-colors">হোম</a>
            <a href="#cottages" className="hover:text-emerald-400 transition-colors">কটেজ সমূহ</a>
            <a href="#booking-section" className="hover:text-emerald-400 transition-colors">বুকিং দিন</a>
            <a href="#admin" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors font-semibold">এডমিন প্যানেল</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative bg-slate-900 text-white py-28 px-4 text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')` }}
        ></div>
        <div className="relative max-w-3xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold border border-emerald-500/30">
            মিরিঞ্জা ভ্যালি, বান্দরবান
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            মেঘের রাজ্যে আপনার স্বপ্নের <span className="text-emerald-400">কটেজ বুক করুন</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            মিরিঞ্জা হেভেন রিসোর্টে সহজ, দ্রুত এবং নিরাপদ অনলাইন বুকিং সিস্টেম।
          </p>
          <a 
            href="#booking-section" 
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all"
          >
            এখনই বুক করুন
          </a>
        </div>
      </div>

      {/* Cottages Section */}
      <section id="cottages" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900">আমাদের বিশেষ কটেজসমূহ</h2>
          <p className="text-slate-600 mt-2">আপনার ভ্রমণের জন্য সেরা কটেজটি বেছে নিন</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cottagesData.map((cottage) => (
            <div key={cottage.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col">
              <div className="relative h-56">
                <img src={cottage.image} alt={cottage.name} className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-emerald-400 font-semibold px-3 py-1 rounded-full text-sm">
                  ৳ {cottage.price} / রাত
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{cottage.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{cottage.description}</p>
                </div>
                <button 
                  onClick={() => handleSelectCottage(cottage.id)}
                  className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-medium py-3 rounded-xl transition-colors"
                >
                  বুকিং সিলেক্ট করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-section" className="bg-slate-100 py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-md border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">অনলাইন বুকিং ফর্ম</h2>
            <p className="text-slate-500 text-sm mt-1">মিরিঞ্জা হেভেন রিসোর্টে আপনার রুম নিশ্চিত করুন</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">কটেজ নির্বাচন করুন:</label>
              <select 
                value={selectedCottage} 
                onChange={(e) => setSelectedCottage(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="">-- কটেজ বেছে নিন --</option>
                {cottagesData.map((c) => (
                  <option key={c.id} value={c.id}>{c.name} (৳ {c.price})</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">চেক-ইন তারিখ:</label>
                <input type="date" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">চেক-আউট তারিখ:</label>
                <input type="date" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">পুরুষ অতিথি:</label>
                <input type="number" defaultValue={1} min={0} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-center" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">মহিলা অতিথি:</label>
                <input type="number" defaultValue={0} min={0} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-center" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">শিশু (যদি থাকে):</label>
                <input type="number" defaultValue={0} min={0} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-center" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">আপনার পূর্ণ নাম:</label>
                <input type="text" placeholder="যেমন: আবদুর রহমান" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">মোবাইল নম্বর:</label>
                <input type="tel" placeholder="017xxxxxxxx" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl space-y-3">
              <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                💳 পেমেন্ট ইন্সট্রাকশন (bKash / Nagad)
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                আমাদের মার্চেন্ট/পার্সোনাল নম্বরে অ্যাডভান্স পেমেন্ট সম্পন্ন করে Transaction ID লিখুন:
              </p>
              <div className="text-xs font-mono font-bold bg-white p-3 rounded-lg border border-emerald-200 space-y-1">
                <div>bKash (Send Money): 01711223344</div>
                <div>Nagad (Send Money): 01811223344</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <select className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm">
                  <option>bKash (বিকাশ)</option>
                  <option>Nagad (নগদ)</option>
                </select>
                <input type="text" placeholder="Transaction ID (TrxID)" className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm" />
              </div>
            </div>

            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all">
              বুকিং সম্পন্ন করুন
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-sm">
        <p>© {new Date().getFullYear()} Mirinja Heaven Resort. সর্বস্বত্ব সংরক্ষিত।</p>
      </footer>
    </div>
  );
}

export default App;
