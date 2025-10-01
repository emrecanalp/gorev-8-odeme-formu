# Ödeme Formu

Bu repo, ödev kapsamında istenen görseli **piksel seviyesinde** karşılayan modern bir kredi kartı ödeme formu içerir. Uygulama React (Vite) üzerinde geliştirilmiş, stiller Tailwind CSS ile verilmiştir. Tüm alanlar `useState` ile kontrol edilir; **Ay** ve **Yıl** için `select` bileşenleri dinamik olarak oluşturulur. “Şimdi Öde” butonuna basıldığında `preventDefault()` ile sayfa yenilenmeden girilen veriler `alert(JSON.stringify(...))` ile gösterilir. Kart numarası yalnızca rakam alır ve otomatik **4’lü gruplama** yapılır; **CVV** girişi sayısal ve sınırlı hanelidir. Kod yapısı modülerdir (`PaymentForm` bileşeni) ve ödevdeki tüm gereksinimleri karşılar.

## Proje Yapısı

odeme-formu/
├─ README.md
├─ index.html
├─ package.json
├─ vite.config.ts                 
├─ tsconfig.json                 
├─ node_modules/
├─ public/                       
└─ src/
   ├─ main.tsx
   ├─ index.css
   ├─ App.tsx
   └─ components/
      └─ PaymentForm.tsx

### Çıktı Önizlemesi
! [Form Onizleme] (docs/form-onizleme.png)

#### Kurulum

#Bağımlılıkları yükle
npm install

#Geliştirme sunucusunu başlat
npm run dev