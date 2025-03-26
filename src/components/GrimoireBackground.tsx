
import React from 'react';
import SacredGeometry from '@/components/SacredGeometry';

const GrimoireBackground: React.FC = () => {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 bg-grimoire-darker"></div>
      <SacredGeometry />
      <div className="sacred-geometry"></div>
      
      {/* Scanline effect */}
      <div className="scanline"></div>
    </>
  );
};

export default GrimoireBackground;
