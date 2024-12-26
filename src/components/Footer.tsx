import React from 'react';
import { Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
      <div className="container mx-auto px-4 text-center">
        <a
          href="https://github.com/na7hk3r"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span>Created by na7hk3r</span>
          <Github className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
};