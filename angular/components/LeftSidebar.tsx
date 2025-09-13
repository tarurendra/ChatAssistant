import React from 'react';
import { HamburgerIcon, HomeIcon, FolderIcon, ChatIcon, BookmarkIcon, UserCircleIcon } from './icons';

const NavItem: React.FC<{ children: React.ReactNode; active?: boolean }> = ({ children, active }) => (
  <button className={`flex w-full items-center justify-center rounded-lg p-3 ${
    active ? 'bg-blue-100 text-blue-600' : 'text-slate-500 hover:bg-slate-100'
  }`}>
    {children}
  </button>
);

const LeftSidebar: React.FC = () => {
  return (
    <aside className="flex w-20 flex-col items-center border-r border-slate-200 bg-slate-50 p-3">
      <div className="w-full">
        <NavItem>
          <HamburgerIcon className="h-6 w-6" />
        </NavItem>
      </div>
      <nav className="flex flex-1 flex-col items-center space-y-2 py-4">
        <NavItem>
          <HomeIcon className="h-6 w-6" />
        </NavItem>
        <NavItem>
          <FolderIcon className="h-6 w-6" />
        </NavItem>
        <NavItem active>
          <ChatIcon className="h-6 w-6" />
        </NavItem>
        <NavItem>
          <BookmarkIcon className="h-6 w-6" />
        </NavItem>
      </nav>
      <div className="flex flex-col items-center">
        <button className="text-slate-500">
          <UserCircleIcon className="h-10 w-10" />
        </button>
        <span className="mt-1 text-xs font-medium text-slate-700">admin</span>
      </div>
    </aside>
  );
};

export default LeftSidebar;