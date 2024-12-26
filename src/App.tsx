import React, { useState } from 'react';
import { TextInput } from './components/TextInput';
import { Card } from './components/Card';
import { StyleControls } from './components/StyleControls';
import { splitTextIntoCards } from './utils/textSplitter';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  const [cards, setCards] = useState<string[]>([]);
  const [style, setStyle] = useState({
    backgroundColor: '#1a1d24',
    backgroundImage: null as string | null,
    backgroundOpacity: 100,
    textColor: '#ffffff',
    fontSize: 24,
  });

  const handleTextChange = (text: string) => {
    const splitCards = splitTextIntoCards(text);
    setCards(splitCards);
  };

  return (
    <div className="min-h-screen bg-[#13151a]">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <TextInput onTextChange={handleTextChange} />
        <StyleControls style={style} onStyleChange={setStyle} />

        <div className="mt-8 space-y-8">
          {cards.length > 0 ? (
            <div className="flex flex-col items-center gap-8">
              {cards.map((text, index) => (
                <Card
                  key={index}
                  text={text}
                  index={index}
                  style={style}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400">
              Comienza pegando tu texto o subiendo un archivo
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}