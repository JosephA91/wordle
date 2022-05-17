export function checkWord(word, wordOfTheDay) {
  const wordOfTheDayArray = wordOfTheDay.split('');
  const result = [];

  word.map((letter, index) => {
    const inArray = wordOfTheDayArray.includes(letter);
    const match = letter === wordOfTheDayArray[index];

    result.push({
      position: index,
      letter: letter,
      inArray: inArray,
      match: match
    });
  });

  return result;
};

export function generateWordOfTheDay(data) {
  return data.solutions[Math.floor(Math.random() * data.solutions.length)].word;
}