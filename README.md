# TS Buggy App

GitHub Actions ile CI/CD testlerini denemek için hazırlanmış **bilerek hatalı** küçük bir TypeScript uygulaması.

## Amaç
Bu proje, mobil uygulamada veya lokal ortamda GitHub kullanımını (repo, Actions, PR vs.) test etmek için tasarlanmıştır.  
İçinde **3-4 bilinçli hata** vardır. CI pipeline'ı bu hatalar yüzünden kırmızıya düşer.

## Bilinçli Hatalar

| # | Dosya | Hata | Etki |
|---|-------|------|------|
| 1 | `src/math.ts` | `add` fonksiyonu toplama yerine **çıkarma** yapıyor | Test fail |
| 2 | `src/math.ts` | `average` fonksiyonu `length - 1` ile bölüyor | Test fail |
| 3 | `src/math.ts` | `formatResult` parametresi `string` bekliyor ama number kullanılıyor | Tip hatası (tsc) |
| 4 | `src/math.ts` | `divide` sıfıra bölme kontrolü yok | Runtime Infinity |

## Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Tip kontrolü (hata verecek)
npm run lint

# Build (hata verecek)
npm run build

# Testler (bazıları fail olacak)
npm test

# Çalıştırma (build başarılı olursa)
npm start
```

## GitHub Actions

`.github/workflows/ci.yml` dosyası şunları yapar:

1. Node.js 20 kurar
2. `npm install`
3. `tsc --noEmit` (tip kontrolü)
4. `npm run build`
5. `npm test`

**Beklenen sonuç:** Pipeline **kırmızı** (fail) olur çünkü:
- Tip hataları vardır
- `add` ve `average` testleri geçmez

## Düzeltme (isteğe bağlı)

Hataları düzeltmek istersen:

```ts
// add
return a + b;

// average
return sum / numbers.length;

// formatResult
export function formatResult(value: number | string): string {
  return `Sonuç: ${value}`;
}
```

## Kullanım Senaryosu

1. Bu klasörü yeni bir GitHub reposuna push et
2. GitHub Actions sekmesinden workflow'un fail ettiğini gör
3. Mobil uygulamanda repo / Actions durumunu kontrol et
4. PR açıp CI sonucunu test et

---

Hazırlayan: Grok (xAI)
