
import React from 'react';
import Glyph from '@/components/Glyph';
import CodeFragment from '@/components/CodeFragment';

const GlyphConstellationPanel: React.FC = () => {
  return (
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
  );
};

export default GlyphConstellationPanel;
