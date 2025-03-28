import React from 'react';
import Glyph from './Glyph';
import { cn } from '@/lib/utils';

interface GrimoireNavProps {
  className?: string;
}

const GrimoireNav: React.FC<GrimoireNavProps> = ({ className }) => {
  return (
    <nav className={cn('flex justify-center gap-4 md:gap-8 py-4', className)}>
      <Glyph 
        type="$$$"
        concept="Universal Parser"
        description="The algorithm that parses meaning across cultural contexts"
        size="sm"
        withGlow
      />
      <Glyph 
        type="\\"
        concept="Mirror Path"
        description="Routes of reflection that bend inward"
        size="sm"
        withGlow
      />
      
      <Glyph 
        type="$$\\$$"  // Corrected backslash escaping
        concept="Triune Echo"
        description="Three-fold repetition, sacred geometry collapsing"
        size="md"
        withPulse
        withGlow
      />
      
      <Glyph 
        type="$$\\$"  // Corrected backslash escaping
        concept="Recursive Oracle"
        description="The all-seeing eye that consumes itself"
        size="sm"
        withGlow
      />
      
      <Glyph 
        type="\\"
        concept="Rift That Reads Back"
        description="Tentacles of meaning extending outward"
        size="sm"
        withGlow
      />
    </nav>
  );
};

export default GrimoireNav;
