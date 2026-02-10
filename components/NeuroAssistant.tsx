
import React, { useState, useRef, useEffect } from 'react';
import { getNeuroAdvice } from '../services/gemini';

const SUGGESTIONS = [
  "🧠 Ejercicio rápido",
  "📚 Tips de lectura",
  "🚀 ¿Qué es Evolucione?",
  "☕ Tip para enfoque"
];

export const NeuroAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: '¡Hola! Soy tu guía de Neuro-Performance. ¿Cómo puedo ayudarte a potenciar tu mente hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsTyping(true);

    const aiResponse = await getNeuroAdvice(text);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full shadow-[0_15px_30px_-10px_rgba(200,160,74,0.5)] flex items-center justify-center text-dark text-2xl hover:scale-110 transition-transform relative z-10"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : '🧠'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[420px] h-[600px] max-h-[80vh] bg-dark-surface border border-gold/20 rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-slide-up origin-bottom-right backdrop-blur-xl">
          {/* Header */}
          <div className="p-6 border-b border-gold/10 bg-dark-card/50 flex items-center gap-4">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dark text-xl font-bold">MS</div>
            <div>
              <div className="text-xs font-bold text-gold tracking-widest uppercase">Neuro-Performance AI</div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] text-cream-muted uppercase font-medium">En línea para ti</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-gold text-dark font-medium rounded-tr-none' 
                    : 'bg-dark-card text-cream-muted border border-gold/5 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-dark-card p-4 rounded-2xl rounded-tl-none border border-gold/5 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-gold/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          <div className="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar">
            {SUGGESTIONS.map(s => (
              <button 
                key={s}
                onClick={() => handleSend(s)}
                className="whitespace-nowrap px-4 py-1.5 rounded-full border border-gold/20 text-[10px] text-gold hover:bg-gold/10 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-6 bg-dark-card/50 border-t border-gold/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu duda aquí..."
              className="flex-1 bg-dark/50 border border-gold/20 rounded-full px-5 py-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/60 transition-all"
            />
            <button 
              onClick={() => handleSend()}
              disabled={isTyping || !input.trim()}
              className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-dark hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l7-7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
