import { useState } from 'react';
import { AlgorithmInfo } from '../../types/algorithm';

const languages = ['cpp', 'java', 'python', 'javascript'] as const;

interface CodePanelProps {
  algorithm: AlgorithmInfo;
  activeLine?: number;
}

export const CodePanel = ({ algorithm, activeLine = 1 }: CodePanelProps) => {
  const [language, setLanguage] = useState<(typeof languages)[number]>('cpp');
  return (
    <section className="glass-panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 p-4">
        <h2 className="panel-title">Code</h2>
        <div className="flex rounded-md border border-white/10 bg-black/20 p-1">
          {languages.map((item) => (
            <button key={item} onClick={() => setLanguage(item)} className={`rounded px-2 py-1 text-xs uppercase ${language === item ? 'bg-cyan-300 text-slate-950' : 'text-slate-300 hover:text-white'}`}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <pre className="max-h-72 overflow-auto p-4 text-sm leading-6">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-200">Pseudocode</div>
        {algorithm.pseudocode.map((line, index) => (
          <div key={`pseudo-${index}`} className={`rounded px-2 ${index + 1 === activeLine ? 'bg-cyan-300/15 text-cyan-100' : 'text-slate-300'}`}>
            <span className="mr-4 inline-block w-5 select-none text-right text-slate-500">{index + 1}</span>
            <code>{line}</code>
          </div>
        ))}
        <div className="mb-3 mt-5 text-xs font-semibold uppercase tracking-wider text-cyan-200">Reference Code</div>
        {algorithm.code[language].map((line, index) => (
          <div key={`${language}-${index}`} className={`rounded px-2 ${index + 1 === activeLine ? 'bg-cyan-300/15 text-cyan-100' : 'text-slate-300'}`}>
            <span className="mr-4 inline-block w-5 select-none text-right text-slate-500">{index + 1}</span>
            <code>{line}</code>
          </div>
        ))}
      </pre>
    </section>
  );
};
