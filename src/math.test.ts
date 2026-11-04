import { add, multiply, divide, average, formatResult } from './math';

describe('math helpers', () => {
  test('add should return sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 5)).toBe(15);
  });

  test('multiply should return product', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(0, 5)).toBe(0);
  });

  test('divide should return quotient', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
  });

  test('divide by zero should throw error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('average should calculate mean correctly', () => {
    expect(average([10, 20, 30])).toBe(20);
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });

  test('formatResult should accept number and return string', () => {
    expect(formatResult(42)).toBe('Sonuç: 42');
  });
});
