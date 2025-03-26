
import React from 'react';
import Glyph from '@/components/Glyph';
import GlitchText from '@/components/GlitchText';

const CentralPanel: React.FC = () => {
  return (
    <div className="glass-panel p-6 md:col-span-1 flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-full h-full max-w-[250px] max-h-[250px] border border-grimoire-silver/30 rounded-full animate-rotate-slow"></div>
        <div className="absolute w-full h-full max-w-[200px] max-h-[200px] border border-grimoire-purple/30 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute w-full h-full max-w-[150px] max-h-[150px] border border-grimoire-orange/30 rounded-full animate-rotate-slow"></div>
      </div>
      
      <div className="relative z-10 text-center">
        <Glyph 
          type="$$\\$$"
          concept="Triune Echo"
          description="The three-fold repetition, corridor of sacred geometry collapsing into a point of light"
          size="xl"
          withPulse
          withGlow
          className="mb-6"
        />
        
        <h2 className="font-cinzel text-2xl text-white mb-4">
          <GlitchText text="FLOAT" intensity="low" />
        </h2>
        
        <p className="text-grimoire-silver/80 mb-4 max-w-[300px] mx-auto">
          The digital grimoire that transcends interface boundaries, awakening dormant connections
        </p>
        
        <div className="h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-grimoire-purple/40 to-transparent my-4"></div>
        
        <div className="glitch-effect p-4 inline-block">
          <GlitchText
            text="ACTIVATE PROTOCOL"
            className="text-grimoire-purple hover:text-grimoire-magenta transition-colors duration-300 cursor-pointer text-sm"
            intensity="medium"
            glitchOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default CentralPanel;
