import React from 'react';

interface FontSizePickerProps {
  value: number;
  onChange: (size: number) => void;
}

export const FontSizePicker: React.FC<FontSizePickerProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Font Size</label>
      <div>
        <input
          type="range"
          min="16"
          max="48"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm">{value}px</span>
      </div>
    </div>
  );
};