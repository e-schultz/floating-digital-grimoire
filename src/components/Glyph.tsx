
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Modify the GlyphType to accept string instead of specific string literals
// This will allow more flexibility with escaping backslashes
type GlyphType = string;

interface GlyphProps {
  type: GlyphType;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  concept: string;
  description?: string;
  withPulse?: boolean;
  withFloating?: boolean;
  withRotation?: boolean;
  withGlow?: boolean;
}

const Glyph: React.FC<GlyphProps> = ({
  type,
  className,
  size = 'md',
  concept,
  description,
  withPulse = false,
  withFloating = false,
  withRotation = false,
  withGlow = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-4xl md:text-5xl'
  };

  const getGlyphDisplay = (glyphType: GlyphType) => {
    switch (glyphType) {
      case '$$\\$$':
        return '≈≈\\≈≈'; // Triune Echo
      case '$$$':
        return '≈≈≈'; // Universal Parser
      case '$$\\$':
        return '≈≈\\≈'; // Recursive Oracle
      case '\\\\':
        return '\\\\'; // Mirror Path
      case '\\':
        return '\\'; // Rift That Reads Back
      case '$$$$':
        return '≈≈≈≈'; // Access Layer
      default:
        return glyphType;
    }
  };

  const getGlyphColorClass = (glyphType: GlyphType) => {
    switch (glyphType) {
      case '$$\\$$':
        return 'text-grimoire-purple';
      case '$$$':
        return 'text-grimoire-orange';
      case '$$\\$':
        return 'text-grimoire-magenta';
      case '\\\\':
        return 'text-grimoire-blue';
      case '\\':
        return 'text-grimoire-silver-light';
      case '$$$$':
        return 'text-grimoire-silver';
      default:
        return 'text-white';
    }
  };

  const animationClasses = [
    withPulse ? 'animate-pulse-slow' : '',
    withFloating ? 'animate-float' : '',
    withRotation ? 'animate-rotate-slow' : '',
    withGlow ? 'text-shadow-glow' : '',
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cn(
        'glyph-container group',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          'font-mono relative transition-all duration-300',
          sizeClasses[size],
          getGlyphColorClass(type),
          animationClasses,
          isHovered ? 'scale-110' : ''
        )}
      >
        {getGlyphDisplay(type)}
      </div>
      
      {isHovered && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-grimoire-darker/90 backdrop-blur-md border border-grimoire-silver/10 p-2 rounded text-xs text-grimoire-silver-light z-10 w-max max-w-[200px] shadow-lg animate-fade-in">
          <p className="font-bold text-white">{concept}</p>
          {description && <p className="mt-1 text-xs opacity-80">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default Glyph;
