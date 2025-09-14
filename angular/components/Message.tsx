import * as React from 'react';
import type { Message as MessageType } from '../types';
import { UserCircleIcon } from './icons';

const AILogo: React.FC = () => (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
        <span className="text-sm font-bold text-slate-600">AI</span>
    </div>
);

const Message: React.FC<{ message: MessageType; isLoading?: boolean }> = ({ message, isLoading }) => {
  const isAI = message.sender === 'ai';

  return (
    <div className={`flex items-start gap-3 ${isAI ? '' : 'flex-row-reverse'}`}>
      <div className="flex-shrink-0">
        {isAI ? <AILogo /> : <UserCircleIcon className="h-8 w-8 text-slate-400" />}
      </div>
      <div className={`flex w-full max-w-xl flex-col ${isAI ? 'items-start' : 'items-end'}`}>
        <div className={`rounded-lg px-4 py-3 ${isAI ? 'bg-slate-100' : 'bg-blue-500 text-white'}`}>
            {isLoading ? (
                <div className="flex items-center space-x-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></span>
                </div>
            ) : (
                <p className="whitespace-pre-wrap">{message.text}</p>
            )}
        </div>
        {message.timestamp && !isLoading && (
            <span className={`mt-1 text-xs ${isAI ? 'text-slate-400' : 'text-slate-500'}`}>
                {message.timestamp}
            </span>
        )}
      </div>
    </div>
  );
};

export default Message;