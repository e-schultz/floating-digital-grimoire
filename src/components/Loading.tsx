
import React from 'react';
import GlitchText from '@/components/GlitchText';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-grimoire-silver">
      <GlitchText 
        text="INITIALIZING FLOAT PROTOCOLS..." 
        intensity="high"
        className="text-xl md:text-2xl font-mono"
      />
    </div>
  );
};

export default Loading;
