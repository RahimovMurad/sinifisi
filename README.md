# Furniture Home

Şəkildəki ilk ekranın Expo + React Native tətbiqi. Aşağı naviqasiya yoxdur.

## Başlatmaq

```sh
npm install
npm start
```

Brauzer: `npm run web`. Telefonda Expo Go ilə terminaldakı QR kodu açın.

## Struktur

- `src/app/index.tsx`: ana ekran, useState, kateqoriya filtri.
- `src/app/_layout.tsx`: Expo Router, SafeAreaProvider, PaperProvider.
- `src/components/`: Header, OfferBanner, ProductCard.
- `src/constants/furniture.ts`: məhsullar, tiplər, filtr funksiyası.
- `assets/images/`: lokal şəkillər.

Əvvəlki Smartmarket tapşırığındakı komponent + constants + ekran strukturu saxlanılıb. UI üçün verilən seçimlərdən React Native Paper istifadə olunur (Searchbar, Chip, Icon, Text).

All / Chair / Table / Lighting kateqoriyaları işləyir. Kateqoriya sətri telefonda toxunma ilə, web-də siçanla sola-sağa sürüşdürülür. Ürəklər, Shop Now, View all, axtarış və filtr yalnız görünüşdür. Backend və məlumat bazası yoxdur. Şəkildəki divan Chair bölməsinə daxil edilib. Bəzi nümunələr eyni şəkli istifadə edir.

Əsas kreslo, divan, profil və banner şəkilləri istifadəçinin verdiyi dizayndan çıxarılıb. Masa və işıq fotoları Unsplash-dandır (photo-1499933374294-4584851497cc, photo-1507473885765-e6ed057f782c); hamısı lokal saxlanır.

Yoxlamalar: `npx tsc --noEmit`, `npm run lint`, `npx expo export --platform web --max-workers 2`.

Son dəyişiklik: yalnız kateqoriya seçimi və horizontal sürüşdürmə aktivdir. Ürəklər, Shop Now, View all, axtarış və filtr sadəcə vizual elementlərdir. Favorit və endirim state-i ekrandan çıxarılıb.
