import checkHealth from '../src/task';

const testHeroes = [
  [{ name: 'мечник', health: 10, color: 'red' }],
  [{ name: 'маг', health: 100, color: 'green' }],
  [{ name: 'лучник', health: 45, color: 'yellow' }],
];

const heroesTest = test.each(testHeroes);

heroesTest('test for %a check color %c', ({ player, health, color }) => {
  const result = checkHealth({ player, health });

  expect(result).toBe(color);
});
