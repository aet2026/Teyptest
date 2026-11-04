import { add, multiply, divide, average, formatResult } from './math';

console.log('=== TS Buggy App ===');
console.log('Düzeltilmiş uygulama.');

const a = 10;
const b = 5;

console.log(`add(${a}, ${b}) = ${add(a, b)}`);
console.log(`multiply(${a}, ${b}) = ${multiply(a, b)}`);
console.log(`divide(${a}, ${b}) = ${divide(a, b)}`);

try {
  console.log(`divide(${a}, 0) = ${divide(a, 0)}`);
} catch (e) {
  console.log('divide(10, 0) hatası yakalandı:', (e as Error).message);
}

const nums = [10, 20, 30];
console.log(`average([${nums.join(', ')}]) = ${average(nums)}`);
console.log(`formatResult(42) = ${formatResult(42)}`);
