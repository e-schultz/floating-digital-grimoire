
import React, { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import GrimoireBackground from '@/components/GrimoireBackground';
import GrimoireHeader from '@/components/GrimoireHeader';
import GrimoireNav from '@/components/GrimoireNav';
import CodeFragmentsPanel from '@/components/CodeFragmentsPanel';
import CentralPanel from '@/components/CentralPanel';
import GlyphConstellationPanel from '@/components/GlyphConstellationPanel';
import GrimoireFooter from '@/components/GrimoireFooter';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <div className="relative min-h-screen flex flex-col text-grimoire-silver overflow-hidden">
      <GrimoireBackground />
      
      {/* Main content */}
      <div className="relative z-10 flex-1 container mx-auto px-4 py-8">
        <GrimoireHeader />
        
        {/* Navigation */}
        <GrimoireNav className="mb-12" />
        
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <CodeFragmentsPanel />
          <CentralPanel />
          <GlyphConstellationPanel />
        </div>
        
        <GrimoireFooter />
      </div>
    </div>
  );
};

export default Index;
