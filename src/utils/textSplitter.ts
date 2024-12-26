export const splitTextIntoCards = (text: string): string[] => {
  const paragraphs = text.split(/\n\s*\n/);
  const cards: string[] = [];
  let currentCard = '';
  let paragraphCount = 0;

  for (const paragraph of paragraphs) {
    if (paragraphCount >= 2) {
      cards.push(currentCard.trim());
      currentCard = paragraph;
      paragraphCount = 1;
    } else {
      currentCard += (currentCard ? '\n\n' : '') + paragraph;
      paragraphCount++;
    }
  }

  if (currentCard) {
    cards.push(currentCard.trim());
  }

  return cards;
};