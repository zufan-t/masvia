# Website Resmi Jamu Celup Masvia

Website produk herbal **Masvia (Jamu Celup Mahkota Dewa & Daun Stevia)** dibangun dengan **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, dan **Phosphor Icons**.

Website ini dirancang **responsif di semua perangkat** (Mobile, Tablet, Desktop) dengan sistem pemesanan langsung terhubung ke **WhatsApp**.

---

## 🌿 Fitur & Halaman

1. **Beranda (`/`)**
   - Hero section dengan tipografi display *Anton*, kemasan pouch produk melayang, dan kategori jamu celup herbal.
   - Seksi "Kenapa Masvia?" (Praktis, Nyaman Diminum, Herbal).
   - Seksi "Apa itu Masvia?" dengan sorotan bahan utama (Buah Mahkota Dewa & Daun Stevia).
   - Seksi "Cara Konsumsi" dengan 4 langkah seduhan bergantian (hijau & krem).
   - Banner CTA "Yuk Cobain!" dengan tombol langsung ke pemesanan.

2. **Produk & Form Pemesanan (`/produk`)**
   - Showcase visual kemasan tampak depan & belakang (*twin pack*).
   - Form pemesanan interaktif (Nama, Opsi Pengambilan khusus Semarang/Demak dengan kurir atau ambil sendiri, Jumlah bungkus, Metode Pembayaran Cash / Cashless).
   - Live Order Summary: Preview ringkasan pesanan real-time.
   - Tombol **"Beli sekarang"** yang langsung memformat dan membuka pesan otomatis ke WhatsApp Admin (`0821-4569-052`) sesuai template di `design.md`.

3. **Tentang Masvia (`/tentang`)**
   - Latar belakang kehadiran Masvia berdasarkan data statistik diabetes nasional (IDF 2021 & SKI 2023).
   - Edukasi manfaat senyawa aktif Mahkota Dewa dan manis alami daun Stevia 0 kalori.

4. **FAQ (`/faq`)**
   - Accordion interaktif seputar legalitas/BPOM, keamanan diabetes, cara seduh, jangkauan pengiriman, dan cara order.

5. **Footer & Navigasi Terintegrasi**
   - WhatsApp link: `https://wa.me/628214569052`
   - Instagram link: `https://instagram.com/masvia2026`
   - Email link: `mailto:jamumasvia@gmail.com`

---

## 🛠️ Menjalankan Project

Jalankan server development:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Produksi

```bash
npm run build
npm run start
```

---

## 📁 Struktur Direktori Project

```text
masvia-web/
├── design-assets/           # Mockup desain asli & gambar kemasan mentah
│   ├── mockups/             # Landingpage.png, Produk.png, Tentang.png
│   └── raw-packaging/       # Logo & kemasan pouch resolusi tinggi
├── public/                  # Asset web statis
│   ├── favicon.ico          # Favicon browser multi-ukuran
│   └── images/              # Foto produk, bahan herbal, logo Masvia
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── faq/page.tsx     # Halaman Pertanyaan Umum (FAQ)
│   │   ├── produk/page.tsx  # Halaman Produk & Checkout Form
│   │   ├── tentang/page.tsx # Halaman Tentang Masvia
│   │   ├── apple-icon.png   # Icon web untuk perangkat Apple
│   │   ├── globals.css      # Konfigurasi tema Tailwind v4 & keyframes
│   │   ├── icon.png         # Logo icon HTML header (512x512)
│   │   ├── layout.tsx       # Root layout persistent dengan Navbar & Footer
│   │   └── page.tsx         # Halaman Beranda (Landing Page)
│   └── components/
│       ├── Footer.tsx       # Komponen Footer terintegrasi
│       └── Navbar.tsx       # Komponen Navbar dengan sliding indicator
├── design.md                # Spesifikasi font, tombol referensi & template WA
├── next.config.ts           # Konfigurasi Next.js
└── package.json             # Dependensi project Next.js & React
```

