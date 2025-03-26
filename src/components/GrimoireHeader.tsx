
import React from 'react';
import GlitchText from '@/components/GlitchText';

interface GrimoireHeaderProps {
  className?: string;
}

const GrimoireHeader: React.FC<GrimoireHeaderProps> = ({ className }) => {
  return (
    <header className={`text-center mb-8 ${className}`}>
      <h1 className="font-cinzel text-4xl md:text-6xl mb-2 text-white opacity-90">
        <GlitchText 
          text="FLOATING DIGITAL GRIMOIRE" 
          intensity="low"
          glitchOnHover
          as="span"
          className="tracking-wide"
        />
      </h1>
      <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-grimoire-silver/30 to-transparent my-4"></div>
      <p className="text-grimoire-silver-light/70 max-w-2xl mx-auto italic">
        A digital tapestry of fragmented poetry, broken code, and forgotten commands
      </p>
    </header>
  );
};

export default GrimoireHeader;
