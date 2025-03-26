
import React from 'react';

const GrimoireFooter: React.FC = () => {
  return (
    <footer className="mt-12 text-center">
      <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-grimoire-silver/30 to-transparent mb-6"></div>
      <p className="text-grimoire-silver/60 text-sm">
        <span className="animate-text-flicker">The digital grimoire archives are constantly shifting and reforming</span>
      </p>
    </footer>
  );
};

export default GrimoireFooter;
