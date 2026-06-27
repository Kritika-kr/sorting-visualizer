import { Download, Maximize2, Moon, Star, Sun } from 'lucide-react';
import { GlobalSearch } from './GlobalSearch';
import { AlgorithmCategory } from '../../types/algorithm';

interface TopNavbarProps {
  dark: boolean;
  onTheme: () => void;
  setDark: (value: boolean) => void;
  onFullscreen: () => void;
  onScreenshot: () => void;
  onNavigate: (
    view: AlgorithmCategory | 'Home' | 'Compare',
    id?: string,
    compareLeft?: string,
    compareRight?: string,
    autoPlay?: boolean
  ) => void;
}

export const TopNavbar = ({ 
  dark, 
  onTheme, 
  setDark, 
  onFullscreen, 
  onScreenshot, 
  onNavigate 
}: TopNavbarProps) => (
  <header className="flex h-16 items-center justify-between border-b border-white/10 bg-slate-950/55 px-4 backdrop-blur-xl md:px-6">
    <GlobalSearch 
      dark={dark} 
      onTheme={onTheme} 
      setDark={setDark} 
      onNavigate={onNavigate} 
    />
    <div className="flex items-center gap-2">
      <button className="icon-button" title="Favorite algorithm">
        <Star size={17} />
      </button>
      <button className="icon-button" title="Take screenshot" onClick={onScreenshot}>
        <Download size={17} />
      </button>
      <button className="icon-button" title="Fullscreen visualization" onClick={onFullscreen}>
        <Maximize2 size={17} />
      </button>
      <button className="icon-button" title="Toggle theme" onClick={onTheme}>
        {dark ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </div>
  </header>
);
