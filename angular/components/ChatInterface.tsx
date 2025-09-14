import * as React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import type { Message as MessageType } from './types';
import { RobotIcon } from './icons';
import Message from './Message';
import ChatInput from './ChatInput';
import { sendMessageToAI } from '../services/geminiService';

const initialMessages: MessageType[] = [
  {
    id: 1,
    sender: 'ai',
    text: "Welcome admin! I'm Claude with access to 'Georgia Building Code Amendments 2025' and general AI capabilities. Ask me about building codes, programming, or any other topics!",
    timestamp: '22:56',
  },
  {
    id: 2,
    sender: 'user',
    text: 'dfsdf',
    timestamp: '22:57',
  },
  {
    id: 3,
    sender: 'ai',
    text: "I see you've entered \"dfsdf\" which appears to be random characters rather than a specific question. \n\nCould you please provide a clear question or let me know what you'd like help with? I'm here to assist with:\n- Building codes and construction topics\n...",
    timestamp: '22:57',
  },
];

const ChatHeader: React.FC = () => (
  <div className="border-b border-slate-200 p-4">
    <div className="flex items-center space-x-3">
      <RobotIcon className="h-8 w-8 text-slate-600" />
      <div>
        <h2 className="font-semibold text-slate-800">AI Assistant</h2>
        <div className="flex items-center space-x-2">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          <p className="text-xs text-slate-500">Online <span className="ml-2">Last activity: 5 minutes ago</span></p>
        </div>
      </div>
    </div>
  </div>
);

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: MessageType = {
      id: Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const aiResponseText = await sendMessageToAI(text);
      const aiMessage: MessageType = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to get AI response:", error);
      const errorMessage: MessageType = {
        id: Date.now() + 1,
        sender: 'ai',
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-1 flex-col bg-white">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} />
          ))}
          {isLoading && <Message message={{ id: 0, sender: 'ai', text: '...', timestamp: ''}} isLoading={true}/>}
        </div>
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatInterface;