import React from 'react';

interface CharacterCounterProps {
  text: string;
  maxLength?: number;
}

export const CharacterCounter: React.FC<CharacterCounterProps> = ({ 
  text, 
  maxLength = 1200 // Updated character limit
}) => {
  const charCount = text.length;
  const isOverLimit = maxLength && charCount > maxLength;

  return (
    <div className={`text-sm ${isOverLimit ? 'text-red-500' : 'text-gray-500'}`}>
      {charCount}/{maxLength} caracteres
    </div>
  );
};