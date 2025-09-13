import React, { useState } from 'react';
import { PaperclipIcon, MicrophoneIcon } from './icons';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() && !isLoading) {
      onSendMessage(text);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-slate-200 bg-slate-50 p-4">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="w-full resize-none rounded-lg border border-slate-200 p-3 pr-24 text-sm focus:border-blue-500 focus:ring-blue-500"
          rows={1}
          disabled={isLoading}
        />
        <div className="absolute bottom-2.5 right-3 flex items-center space-x-2">
          <button className="text-slate-500 hover:text-slate-700">
            <PaperclipIcon className="h-5 w-5" />
          </button>
          <button className="text-slate-500 hover:text-slate-700">
            <MicrophoneIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-xs text-slate-400">Press Enter to send, Shift+Enter for new line</p>
        <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <p className="text-xs text-slate-500">Connected with Claude AI (timeout: 2 min idle)</p>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;