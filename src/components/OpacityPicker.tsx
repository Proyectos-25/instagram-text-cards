import React from 'react';

interface OpacityPickerProps {
  value: number;
  onChange: (opacity: number) => void;
  disabled?: boolean;
}

export const OpacityPicker: React.FC<OpacityPickerProps> = ({ value, onChange, disabled }) => {
  return (
    <div className={disabled ? 'opacity-50' : ''}>
      <label className="block text-sm font-medium mb-2">Background Opacity</label>
      <div className="flex items-center gap-2">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1"
          disabled={disabled}
        />
        <span className="text-sm w-12">{value}%</span>
      </div>
    </div>
  );
};