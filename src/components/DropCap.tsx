import React from 'react';

interface DropCapProps {
  char: string;
  color: string;
}

export const DropCap: React.FC<DropCapProps> = ({ char, color }) => {
  return (
    <span
      className="float-left mr-3 font-serif"
      style={{
        fontSize: '4em',
        lineHeight: '0.8',
        marginTop: '0.2em',
        color: color,
      }}
    >
      {char}
    </span>
  );
};