import React, { useRef } from 'react';
import { Image } from 'lucide-react';

interface BackgroundPickerProps {
  backgroundColor: string;
  backgroundImage: string | null;
  onChange: (background: { backgroundColor: string; backgroundImage: string | null }) => void;
}

export const BackgroundPicker: React.FC<BackgroundPickerProps> = ({
  backgroundColor,
  backgroundImage,
  onChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange({
          backgroundColor: backgroundColor,
          backgroundImage: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (color: string) => {
    onChange({
      backgroundColor: color,
      backgroundImage: null,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Background</label>
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => handleColorChange(e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
              disabled={!!backgroundImage}
            />
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
          >
            <Image size={20} />
            Upload Image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
      </div>
      {backgroundImage && (
        <button
          onClick={() => onChange({ backgroundColor, backgroundImage: null })}
          className="text-sm text-red-600 hover:text-red-700"
        >
          Remove background image
        </button>
      )}
    </div>
  );
};