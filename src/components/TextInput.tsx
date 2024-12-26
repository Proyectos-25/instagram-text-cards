import React from 'react';
import { Upload } from 'lucide-react';

interface TextInputProps {
  onTextChange: (text: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ onTextChange }) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        onTextChange(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-[#1a1d24] rounded-lg shadow-lg border border-gray-800">
      <textarea
        className="w-full h-40 p-4 mb-4 bg-[#13151a] text-white border-gray-700 rounded-lg font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Paste your text here..."
        onChange={(e) => onTextChange(e.target.value)}
      />
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
          <Upload size={20} />
          Import Text File
          <input
            type="file"
            accept=".txt"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    </div>
  );
};