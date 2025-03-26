
import React from 'react';
import { cn } from '@/lib/utils';

interface CodeFragmentProps {
  children: React.ReactNode;
  className?: string;
  isPoetry?: boolean;
  isCommand?: boolean;
}

const CodeFragment: React.FC<CodeFragmentProps> = ({
  children,
  className,
  isPoetry = false,
  isCommand = false
}) => {
  return (
    <div 
      className={cn(
        'code-fragment my-4',
        isPoetry ? 'italic text-grimoire-silver-light/70' : '',
        isCommand ? 'text-grimoire-orange font-bold' : '',
        className
      )}
    >
      {isCommand && <span className="text-grimoire-silver-light/50">$ </span>}
      {children}
    </div>
  );
};

export default CodeFragment;
