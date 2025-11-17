// src/app/components/ChatBot.js
'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! I am your AI assistant. I can help you find information about the developer, Khorn Saokhouch.' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to the bottom of the chat when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { id: Date.now(), sender: 'user', text: userMessage }]);
    setInput('');

    // --- Simulated Bot Response Logic ---
    let botResponse = 'I am here to help you! Ask me about the skills, projects, or contact info.';
    if (userMessage.toLowerCase().includes('skill')) {
        botResponse = 'Khorn specializes in Next.js, Three.js (R3F), Framer Motion, and high-performance front-end architecture.';
    } else if (userMessage.toLowerCase().includes('project')) {
        botResponse = 'You can find his featured projects in the "Projects" section above, including interactive 3D showrooms!';
    } else if (userMessage.toLowerCase().includes('contact')) {
        botResponse = 'The contact form is at the bottom of the page, or you can check the "Contact" link in the navbar.';
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: botResponse },
      ]);
    }, 800);
  };

  return (
    // Wrapper to hold the button and the chat window (aligned to the right)
    <div className="relative flex flex-col items-end">
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            // Position above the toggle button
            className="absolute bottom-full mb-4 w-72 md:w-80 max-w-xs bg-card/95 backdrop-blur-xl 
                       border border-accent/20 rounded-3xl shadow-2xl shadow-black/70 
                       flex flex-col overflow-hidden h-[400px]"
          >
            {/* Chat Header (Clean Design) */}
            <div className="bg-accent/10 px-4 py-3 text-white font-bold border-b border-accent/30 flex justify-between items-center">
              <span className='text-accent'>AI Assistant</span>
              <span className='text-sm text-secondary'>Online</span>
            </div>

            {/* Messages Container */}
            <div 
              ref={messagesEndRef}
              className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto custom-scrollbar"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`px-3 py-2 rounded-xl max-w-[85%] text-sm leading-snug shadow-md ${
                    msg.sender === 'bot'
                      ? 'bg-accent/20 text-gray-100 self-start rounded-bl-none'
                      : 'bg-background/80 text-white self-end rounded-br-none border border-accent/10'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Box */}
            <div className="p-3 border-t border-accent/20 flex gap-2 bg-card/80">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 p-3 rounded-full bg-background border border-gray-700 focus:border-accent text-white outline-none text-sm shadow-inner shadow-black/20"
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <motion.button
                onClick={handleSend}
                whileTap={{ scale: 0.9 }}
                className="bg-accent text-background px-4 py-2 rounded-full font-bold text-sm hover:bg-white transition"
              >
                ↑
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Toggle Button (The main clickable element) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-accent text-background font-bold text-xl flex items-center justify-center 
                   shadow-xl shadow-accent/50 transition-all duration-300 transform hover:scale-110"
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
            <motion.span initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{ duration: 0.2 }}>✕</motion.span>
        ) : (
            '🤖'
        )}
      </motion.button>

    </div>
  );
}