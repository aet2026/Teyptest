import { add, multiply, divide, average, formatResult } from './math';

console.log('=== TS Buggy App ===');
console.log('Bu uygulama bilerek hatalı yazılmıştır.');
console.log('GitHub Actions ile CI/CD testleri için kullanılabilir.\n');

const a = 10;
const b = 5;

console.log(`add(${a}, ${b}) = ${add(a, b)}`);       // Beklenen: 15, Gerçek: 5
console.log(`multiply(${a}, ${b}) = ${multiply(a, b)}`); // Doğru: 50
console.log(`divide(${a}, ${b}) = ${divide(a, b)}`);   // Doğru: 2
console.log(`divide(${a}, 0) = ${divide(a, 0)}`);     // Infinity / hata

const nums = [10, 20, 30];
console.log(`average([${nums.join(', ')}]) = ${average(nums)}`); // Beklenen: 20, Gerçek: 30

// HATA: formatResult string bekliyor, number veriyoruz → tsc fail eder
console.log(formatResult(42));
