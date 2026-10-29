/**
 * Basit matematik yardımcıları
 * (Bilerek 3-4 hata içerir - GitHub Actions ile test için)
 */

export function add(a: number, b: number): number {
  // HATA 1: Yanlış işlem - toplama yerine çıkarma yapıyor
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  // HATA 2: Sıfıra bölme kontrolü yok + yanlış dönüş tipi
  return a / b;
}

export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  // HATA 3: Toplamı yanlış hesaplıyor (reduce yerine sadece ilk elemanı alıyor gibi)
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  // HATA 4 (mantık): length yerine length - 1 kullanıyor
  return sum / (numbers.length - 1);
}

// HATA 5 (TypeScript tip hatası): Parametre tipi yanlış, string bekleniyor ama number veriliyor
export function formatResult(value: string): string {
  return `Sonuç: ${value}`;
}
