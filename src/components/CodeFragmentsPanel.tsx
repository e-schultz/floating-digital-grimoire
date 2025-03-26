
import React from 'react';
import CodeFragment from '@/components/CodeFragment';
import Glyph from '@/components/Glyph';

const CodeFragmentsPanel: React.FC = () => {
  return (
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
  );
};

export default CodeFragmentsPanel;
