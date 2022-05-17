import { generateWordOfTheDay } from "../src";

describe('generateWordOfTheDay', () => {
  const mockData = {
    solutions: [
      {id:1,word:'guess'},
      {id:2,word:'spade'}
    ]
  }
  const result = generateWordOfTheDay(mockData);

  it('generates the word of the day', () => {
    const inArray = ['guess', 'spade'].includes(result);

    expect(inArray).toBeTruthy();
  });
});