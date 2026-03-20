"use client"
import React, { useState, useEffect } from 'react'


const page = () => {

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const welcomeMessage = {
      id: Date.now(),
      sender: "bot",
      text: "Welcome to MediAssist AI! I'm here to help with your medical queries. How can I assist you today?",
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleMessageSent = () => {
    if (!inputText.trim()) return;
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: inputText,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setLoading(true);
    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Thank you for your message. This is a mock response from MediAssist AI.",
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className='relative h-screen'>
      {/* Header */}
      <div className=' bg-[#ffffff] py-3 pl-52 border-b-gray-300 border-b-2 flex items-center gap-2 z-10'>
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </div>
        <span id="site-title" className="text-[.975rem] font-semibold bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">MediAssist AI</span>
      </div>

      {/* Chat Area */}
      <div className='pt-16 pb-20 overflow-y-auto p-4 px-52' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {messages.map(msg => (
          <div key={msg.id} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg max-w-xs wrap-break-word ${msg.sender === 'user' ? 'bg-teal-500 text-white' : 'bg-gray-200 text-black'}`}>
              {msg.text}
            </div>
            <div className='text-xs text-gray-500 mt-1'>{msg.timestamp}</div>
          </div>
        ))}
        {loading && (
          <div className='mb-4 text-left'>
            <div className='inline-block p-3 rounded-lg bg-gray-200 text-black'>Bot is typing...</div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className='fixed bottom-0 left-0 right-0 bg-[#ffffff] py-3 px-52 border-t-gray-300 shadow-md flex items-center gap-2 z-10'>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleMessageSent(); }}
          type="text"
          placeholder='Type your message...'
          className='w-full border-gray-400 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500'
        />
        <button onClick={handleMessageSent} className='bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg'>Send</button>
      </div>
    </div>
  )
}

export default page
