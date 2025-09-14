import * as React from 'react';
import { SearchIcon, BellIcon, ChatAlt2Icon, BriefcaseIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex items-center">
        {/* Can be used for breadcrumbs or page title */}
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-48 rounded-md border border-slate-300 py-1.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700">
            <BellIcon className="h-6 w-6" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white">2</span>
          </button>
          <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700">
            <ChatAlt2Icon className="h-6 w-6" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white">3</span>
          </button>
          <button className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700">
            <BriefcaseIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;