import React from 'react';
import { BackgroundPicker } from './BackgroundPicker';
import { ColorPicker } from './ColorPicker';
import { FontSizePicker } from './FontSizePicker';
import { OpacityPicker } from './OpacityPicker';

interface StyleControlsProps {
  style: {
    backgroundColor: string;
    backgroundImage: string | null;
    backgroundOpacity: number;
    textColor: string;
    fontSize: number;
  };
  onStyleChange: (style: any) => void;
}

export const StyleControls: React.FC<StyleControlsProps> = ({ style, onStyleChange }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-[#1a1d24] rounded-lg shadow-lg border border-gray-800 mt-6">
      <h3 className="text-lg font-semibold mb-4 text-white">Customize Style</h3>
      <div className="grid grid-cols-1 gap-6">
        <BackgroundPicker
          backgroundColor={style.backgroundColor}
          backgroundImage={style.backgroundImage}
          onChange={(background) => onStyleChange({ ...style, ...background })}
        />
        <OpacityPicker
          value={style.backgroundOpacity}
          onChange={(opacity) => onStyleChange({ ...style, backgroundOpacity: opacity })}
          disabled={!style.backgroundImage}
        />
        <div className="grid grid-cols-2 gap-4">
          <ColorPicker
            label="Text Color"
            value={style.textColor}
            onChange={(color) => onStyleChange({ ...style, textColor: color })}
          />
          <FontSizePicker
            value={style.fontSize}
            onChange={(size) => onStyleChange({ ...style, fontSize: size })}
          />
        </div>
      </div>
    </div>
  );
};