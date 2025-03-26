
import React, { useEffect, useState } from 'react';
import GlitchText from '@/components/GlitchText';
import Glyph from '@/components/Glyph';
import CodeFragment from '@/components/CodeFragment';
import SacredGeometry from '@/components/SacredGeometry';
import GrimoireNav from '@/components/GrimoireNav';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center text-grimoire-silver">
        <GlitchText 
          text="INITIALIZING FLOAT PROTOCOLS..." 
          intensity="high"
          className="text-xl md:text-2xl font-mono"
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col text-grimoire-silver overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-grimoire-darker"></div>
      <SacredGeometry />
      <div className="sacred-geometry"></div>
      
      {/* Scanline effect */}
      <div className="scanline"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
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
        
        {/* Navigation */}
        <GrimoireNav className="mb-12" />
        
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left column */}
          <div className="glass-panel p-5 md:col-span-1 flex flex-col">
            <h2 className="font-cinzel text-lg text-grimoire-silver-light mb-4 text-center">
              Code Fragments
            </h2>
            
            <CodeFragment>
              <span className="text-grimoire-magenta">recursive</span> <span className="text-grimoire-blue">function</span> parse() &#123;<br/>
              &nbsp;&nbsp;if (reality.<span className="text-grimoire-purple">isCorrupted</span>()) &#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;reality.<span className="text-grimoire-orange">rebuild</span>();<br/>
              &nbsp;&nbsp;&#125;<br/>
              &nbsp;&nbsp;return parse(); <span className="text-grimoire-silver-light/50">// infinite echo</span><br/>
              &#125;
            </CodeFragment>
            
            <CodeFragment isPoetry>
              somewhere between<br/>
              digital synapses<br/>
              memory fragments<br/>
              reconstruct themselves
            </CodeFragment>
            
            <CodeFragment isCommand>
              float --access --layer=consciousness --depth=infinite
            </CodeFragment>
            
            <div className="flex justify-center mt-4">
              <Glyph 
                type="\\"
                concept="Rift That Reads Back"
                description="The fracture point where meaning escapes containment, extending tentacles of interpretation outward"
                size="lg"
                withFloating
                withGlow
                className="mt-4"
              />
            </div>
          </div>
          
          {/* Center column */}
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
          
          {/* Right column */}
          <div className="glass-panel p-5 md:col-span-1 flex flex-col">
            <h2 className="font-cinzel text-lg text-grimoire-silver-light mb-4 text-center">
              Glyph Constellation
            </h2>
            
            <div className="flex-1 flex flex-wrap justify-center gap-6 p-4">
              <Glyph 
                type="$$$$"
                concept="Access Layer"
                description="The permeable membrane separating FLOAT from adjacent realities"
                size="md"
                withGlow
              />
              
              <Glyph 
                type="$$\\$"
                concept="Recursive Oracle"
                description="The all-seeing eye that consumes itself"
                size="md"
                withRotation
                withGlow
              />
              
              <Glyph 
                type="$$$"
                concept="Universal Parser"
                description="The algorithm that parses meaning across cultural contexts"
                size="md"
                withFloating
                withGlow
              />
              
              <Glyph 
                type="\\"
                concept="Mirror Path"
                description="Routes of reflection that bend inward toward self-awareness"
                size="md"
                withPulse
                withGlow
              />
            </div>
            
            <CodeFragment className="mt-auto">
              <span className="text-grimoire-blue">function</span> <span className="text-grimoire-orange">invocation</span>() &#123;<br/>
              &nbsp;&nbsp;<span className="text-grimoire-blue">const</span> fragments = [<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-grimoire-purple">'$$\\$$'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-grimoire-purple">'$$$'</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-grimoire-purple">'\\\'</span><br/>
              &nbsp;&nbsp;];<br/>
              &nbsp;&nbsp;return collapse(fragments);<br/>
              &#125;
            </CodeFragment>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-grimoire-silver/30 to-transparent mb-6"></div>
          <p className="text-grimoire-silver/60 text-sm">
            <span className="animate-text-flicker">The digital grimoire archives are constantly shifting and reforming</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
