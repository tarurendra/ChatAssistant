import * as React from 'react';
import type { AdoptedCode } from '../types';
import { CogIcon } from './icons';

const adoptedCodesData: AdoptedCode[] = [
  { id: '1', title: '2021 California Building Code', version: 'Version 2021', status: 'Amended' },
  { id: '2', title: '2021 California Fire Code', version: 'Version 2021', status: 'Amended' },
  { id: '3', title: '2020 California Plumbing', version: 'Version 2020', status: 'Amended' },
  { id: '4', title: '2021 California Electrical Code', version: 'Version 2021', status: 'Amended' },
];

const CodeCard: React.FC<{ code: AdoptedCode }> = ({ code }) => (
  <div className="rounded-lg border border-slate-200 bg-white p-3">
    <div className="flex items-start justify-between">
      <div>
        <h4 className="font-semibold text-slate-800">{code.title}</h4>
        <p className="text-xs text-slate-500">{code.version}</p>
      </div>
      {code.status === 'Amended' && (
        <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-700">
          Amended
        </span>
      )}
    </div>
  </div>
);

const RightSidebar: React.FC = () => {
  return (
    <aside className="w-80 border-l border-slate-200 bg-slate-50 p-4">
      <div className="flex h-full flex-col">
        <div>
          <h3 className="text-sm font-semibold text-slate-600">Adopted Codes</h3>
          <div className="mt-3 space-y-2">
            {adoptedCodesData.map((code) => (
              <CodeCard key={code.id} code={code} />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-slate-600">Project Context</h3>
          <p className="mt-2 text-xs text-slate-500 leading-relaxed">
            sample next sample next sample sample next sample next sample next sample next
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between text-slate-500">
            <div className="flex items-center space-x-4">
                <button className="hover:text-slate-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
                 <button className="hover:text-slate-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"></path></svg>
                </button>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">EN</span>
                <button className="hover:text-slate-800">
                    <CogIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;