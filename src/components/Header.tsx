import React from 'react';
import { Split } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Split className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Conversor de Textos a IG Posts!
        </h1>
      </div>
    </header>
  );
};