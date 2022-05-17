import { checkWord } from "../src";
import data from "../data/db.json";

describe('checkWord', () => {
  const wordOfTheDay = data.solutions[0]['word'];

  describe('when all letters are in the correct position', () => {
    const wordArray = ['g','u','e','s','s'];
    const result = checkWord(wordArray, wordOfTheDay);
  
    const expectedResult = [
      {position: 0, letter: 'g', inArray: true, match: true},
      {position: 1, letter: 'u', inArray: true, match: true},
      {position: 2, letter: 'e', inArray: true, match: true},
      {position: 3, letter: 's', inArray: true, match: true},
      {position: 4, letter: 's', inArray: true, match: true},
    ];
  
    it('returns the expected result', () => {
      expect(result).toEqual(expectedResult);
    });
  });

  describe('when all letters are in the array and some are in the correct position', () => {
    const wordArray = ['g','e','s','s','s'];
    const result = checkWord(wordArray, wordOfTheDay);
  
    const expectedResult = [
      {position: 0, letter: 'g', inArray: true, match: true},
      {position: 1, letter: 'e', inArray: true, match: false},
      {position: 2, letter: 's', inArray: true, match: false},
      {position: 3, letter: 's', inArray: true, match: true},
      {position: 4, letter: 's', inArray: true, match: true},
    ];
  
    it('returns the expected result', () => {
      expect(result).toEqual(expectedResult);
    });
  });

  describe('when some letters are in the array but no letters are in the correct position', () => {
    const wordArray = ['a','b','c','u','g'];
    const result = checkWord(wordArray, wordOfTheDay);
  
    const expectedResult = [
      {position: 0, letter: 'a', inArray: false, match: false},
      {position: 1, letter: 'b', inArray: false, match: false},
      {position: 2, letter: 'c', inArray: false, match: false},
      {position: 3, letter: 'u', inArray: true, match: false},
      {position: 4, letter: 'g', inArray: true, match: false},
    ];
  
    it('returns the expected result', () => {
      expect(result).toEqual(expectedResult);
    });
  });

  describe('when no letters are in the array', () => {
    const wordArray = ['a','b','c','d','z'];
    const result = checkWord(wordArray, wordOfTheDay);
  
    const expectedResult = [
      {position: 0, letter: 'a', inArray: false, match: false},
      {position: 1, letter: 'b', inArray: false, match: false},
      {position: 2, letter: 'c', inArray: false, match: false},
      {position: 3, letter: 'd', inArray: false, match: false},
      {position: 4, letter: 'z', inArray: false, match: false},
    ];
  
    it('returns the expected result', () => {
      expect(result).toEqual(expectedResult);
    });
  });
});
