import React from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { DropCap } from './DropCap';
import { CharacterCounter } from './CharacterCounter';

interface CardProps {
  text: string;
  index: number;
  style: {
    backgroundColor: string;
    backgroundImage: string | null;
    backgroundOpacity: number;
    textColor: string;
    fontSize: number;
  };
}

export const Card: React.FC<CardProps> = ({ text, index, style }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const exportCard = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const link = document.createElement('a');
      link.download = `instagram-card-${index + 1}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const paragraphs = text.split('\n\n');
  const firstChar = text.charAt(0);
  const restOfFirstParagraph = paragraphs[0].slice(1);
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <div className="relative group">
      <div
        ref={cardRef}
        className="w-[1080px] h-[1350px] rounded-lg p-16 mb-8 shadow-lg overflow-hidden"
        style={{
          backgroundColor: style.backgroundImage ? 'transparent' : style.backgroundColor,
          position: 'relative',
        }}
      >
        {style.backgroundImage && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${style.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: style.backgroundOpacity / 100,
            }}
          />
        )}
        <div 
          className="relative h-full flex items-center justify-center card-text" 
          style={{ 
            color: style.textColor,
            fontSize: `${style.fontSize}px`,
            padding: '0 48px'
          }}
        >
          <div className="max-w-3xl">
            <p className="mb-6">
              <DropCap char={firstChar} color={style.textColor} />
              {restOfFirstParagraph}
            </p>
            {remainingParagraphs.map((paragraph, i) => (
              <p key={i} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 right-8 flex flex-col items-end gap-2">
        <CharacterCounter text={text} />
        <button
          onClick={exportCard}
          className="p-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
          title="Exportar como PNG"
        >
          <Download className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};