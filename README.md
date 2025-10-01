Ödeme Formu

Bu repo, ödev kapsamında istenen görseli **piksel seviyesinde** karşılayan modern bir kredi kartı ödeme formu içerir. Uygulama React (Vite) üzerinde geliştirilmiş, stiller Tailwind CSS ile verilmiştir. Tüm alanlar `useState` ile kontrol edilir; **Ay** ve **Yıl** için `select` bileşenleri dinamik olarak oluşturulur. **Şimdi Öde** butonuna basıldığında `preventDefault()` ile sayfa yenilenmeden girilen veriler `alert(JSON.stringify(...))` ile gösterilir. Kart numarası yalnızca rakam alır ve otomatik **4’lü gruplama** yapılır; **CVV** girişi sayısal ve sınırlı hanelidir.

---

Kurulum

# Balımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
