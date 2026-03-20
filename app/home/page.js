"use client";
import React from 'react'
import Navbar from '../component/Navbar'
import { useRouter } from 'next/navigation';

const page = () => { 
  const router = useRouter();

  const handleSubmitChat = (event) => {
    event.preventDefault();
    router.push('/chat');
  };

  return (
    <>
      <div className='h-4/5 p-5 py-20 gap-4 flex items-center justify-center bg-linear-to-br from-teal-50 to-teal-400'>
        <div className='m-2'>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-300 text-teal-800 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span> AI-Powered Healthcare Assistant
          </div>
          <div className='text-6xl font-bold'>
            Your AI Medical Assistant
          </div>
          <div className='text-gray-600 p-3'>
            Get symptom guidance, medicine information, and medical answers instantly. Your trusted companion for health-related queries.
          </div>
          <div>
            <button onClick={handleSubmitChat} className="px-8 py-4 bg-linear-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg> Start Chat 
            </button>
          </div>
        </div>
        <div className=''>
          <div className="relative bg-linear-to-br from-teal-100 to-blue-100 rounded-3xl p-8 lg:p-12">
            <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none"><circle cx="200" cy="80" r="40" fill="#14b8a6"></circle> <path d="M160 130 L240 130 L250 220 L150 220 Z" fill="#0d9488"></path> <rect x="180" y="60" width="40" height="50" rx="5" fill="#fef3c7"></rect> <circle cx="190" cy="75" r="3" fill="#1e293b"></circle> <circle cx="210" cy="75" r="3" fill="#1e293b"></circle> <path d="M195 85 Q200 90 205 85" stroke="#1e293b" stroke-width="2" fill="none"></path><path d="M170 130 Q130 150 140 200" stroke="#1e293b" stroke-width="3" fill="none"></path> <circle cx="140" cy="205" r="8" fill="#1e293b"></circle> <rect x="260" y="60" width="100" height="40" rx="10" fill="white" stroke="#e2e8f0" stroke-width="2"></rect> <circle cx="280" cy="80" r="4" fill="#14b8a6"></circle> <circle cx={295} cy={8} r={4} fill="#14b8a6"></circle> <circle cx={31} cy={8} r={4} fill="#14b8a6"></circle> <rect x={4} y={7} width={8} height={3.5} rx={.8} fill="#fff"></rect> <rect x={5} y={7.7} width={4} height={.4} rx={.2} fill="#fff"></rect> <rect x={5} y={7.7} width={.6} height={.4} rx={.2} fill="#fff"></rect>
            </svg>
          </div>
        </div>
      </div>
      <div className="px-5 py-20 mt-10 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How Can We Help You?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Our AI-powered medical assistant provides reliable health information and guidance.</p>
        </div>
        <div className='flex gap-5 p-2 items-center'>
          <div className="rounded-2xl bg-teal-50 hover:border-b-gray-500 p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-teal-500 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <p className="text-slate-700 text-3xl">AI Chat Assistant</p>
            <p>
              Ask any medical question and get instant, informative responses from our AI assistant.
            </p>
          </div>

          <div className="rounded-2xl bg-teal-50 hover:border-b-gray-500 p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <p className="text-slate-700 text-3xl">Symptom Checker</p>
            <p>
              Describe your symptoms and receive guidance on possible conditions and next steps.
            </p>
          </div>

          <div className="rounded-2xl bg-teal-50 hover:border-b-gray-500 p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6M3 7l9-6 9 6"></path>
              </svg>
            </div>
            <p className="text-slate-700 text-3xl">Medicine Information</p>
            <p>
              Get detailed information about medications, including uses, side effects, and interactions.
            </p>
          </div>
        </div>
      </div>
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <p id="disclaimer-display" className="text-amber-800 text-sm leading-relaxed"><strong>Medical Disclaimer:</strong> This chatbot provides medical information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
