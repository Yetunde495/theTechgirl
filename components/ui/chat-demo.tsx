"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

// Sample conversations
const conversations = [
  {
    user: "Can you help me with responsive design?",
    bot: "Absolutely! I specialize in creating fully responsive layouts using Flexbox, Grid, and media queries to ensure your site looks great on all devices."
  },
  {
    user: "How do you handle animations?",
    bot: "I use Framer Motion and GSAP for smooth, performant animations. From micro-interactions to complex sequences, I create animations that enhance the user experience."
  },
  {
    user: "What's your experience with API integration?",
    bot: "I have extensive experience integrating RESTful APIs and GraphQL endpoints, with proper error handling and loading states for a seamless user experience."
  }
];

export function ChatDemoCard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentConversation, setCurrentConversation] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    const container = chatContainerRef?.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth"
      })
    }
    // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Auto demo conversation
  useEffect(() => {
    const startDemo = async () => {
      // Clear messages when starting a new conversation
      setMessages([]);
      
      const conversation = conversations[currentConversation];
      const nextConversation = (currentConversation + 1) % conversations.length;
      
      // Add user message
      const userMessageId = Date.now();
      setMessages([{
        id: userMessageId,
        text: conversation.user,
        sender: "user",
        timestamp: new Date()
      }]);
      
      // Bot typing effect
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsTyping(true);
      
      // Bot response
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsTyping(false);
      setMessages(prev => [
        ...prev, 
        {
          id: Date.now(),
          text: conversation.bot,
          sender: "bot",
          timestamp: new Date()
        }
      ]);
      
      // Wait before starting next conversation
      await new Promise(resolve => setTimeout(resolve, 4000));
      setCurrentConversation(nextConversation);
    };
    
    const timer = setTimeout(() => {
      startDemo();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [currentConversation]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputValue,
        sender: "user",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setInputValue("");
      
      // Simulate bot response
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botResponse: Message = {
          id: Date.now() + 1,
          text: "Thanks for your message! This is a demo of my chat interface animations and design skills.",
          sender: "bot",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1500);
    }
  };
  
  return (
    <div className="relative h-80 rounded-2xl border border-border p-6 bg-card shadow-lg flex flex-col">
      <h3 className="text-xl font-semibold mb-2 text-card-foreground">Chat Interfaces</h3>
      
      <div ref={chatContainerRef} className="flex-1 overflow-auto mb-4 pr-2 scrollbar-thin">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 1
              }}
              className={cn(
                "flex mb-3",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2 flex items-start gap-2",
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-secondary text-secondary-foreground rounded-tl-none"
                )}
              >
                <div className="mt-1 flex-shrink-0">
                  {message.sender === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <span>{message.text}</span>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 1
              }}
              className="flex justify-start mb-3"
            >
              <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-tl-none px-4 py-2 flex items-center gap-2">
                <Bot className="h-4 w-4" />
                <div className="flex space-x-1">
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="w-full rounded-full border border-input px-4 py-2 pr-10 bg-background text-sm"
        />
        <button 
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
          disabled={!inputValue.trim()}
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}