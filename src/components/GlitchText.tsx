
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  as?: keyof JSX.IntrinsicElements;
  glitchOnHover?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className,
  intensity = 'medium',
  as: Component = 'span',
  glitchOnHover = false
}) => {
  const [isGlitching, setIsGlitching] = useState(!glitchOnHover);
  const [displayText, setDisplayText] = useState(text);
  
  const glitchCharacters = '!<>-_\\/[]{}—=+*^?#________';
  
  const intensityConfig = {
    low: { chance: 0.05, duration: 1500, interval: 100 },
    medium: { chance: 0.1, duration: 2000, interval: 80 },
    high: { chance: 0.2, duration: 3000, interval: 50 }
  };
  
  const config = intensityConfig[intensity];
  
  useEffect(() => {
    if (!isGlitching) {
      setDisplayText(text);
      return;
    }
    
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    let duration: NodeJS.Timeout;
    
    const startGlitching = () => {
      let currentText = text.split('');
      
      interval = setInterval(() => {
        const newText = currentText.map((char, idx) => {
          if (char === ' ') return ' ';
          return Math.random() < config.chance 
            ? glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)]
            : text[idx];
        }).join('');
        
        setDisplayText(newText);
      }, config.interval);
      
      duration = setTimeout(() => {
        clearInterval(interval);
        setDisplayText(text);
        
        timeout = setTimeout(startGlitching, Math.random() * 5000 + 2000);
      }, config.duration);
    };
    
    timeout = setTimeout(startGlitching, Math.random() * 1000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      clearTimeout(duration);
    };
  }, [text, isGlitching, config]);
  
  return (
    <Component
      className={cn(
        'inline-block transition-all',
        className
      )}
      onMouseEnter={() => glitchOnHover && setIsGlitching(true)}
      onMouseLeave={() => glitchOnHover && setIsGlitching(false)}
    >
      {displayText}
    </Component>
  );
};

export default GlitchText;
