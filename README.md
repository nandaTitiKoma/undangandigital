# Undangan Khitanan Digital

Proyek ini adalah platform undangan digital berbasis web yang dirancang khusus untuk acara khitanan. Dibangun menggunakan teknologi web modern untuk memastikan performa yang cepat, antarmuka yang responsif, serta pengalaman pengguna yang interaktif dan elegan.

## Teknologi Utama

- **Framework:** [Next.js](https://nextjs.org/) (React Framework)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Bahasa Pemrograman:** [TypeScript](https://www.typescriptlang.org/)

## Fitur Utama

- **Desain Eksklusif:** Menggunakan ornamen bergaya mandala/floral dengan palet warna emas (gold) dan merah tua (crimson) yang memberikan kesan premium.
- **Responsif:** Tampilan dioptimalkan untuk berbagai ukuran layar (mobile, tablet, dan desktop).
- **Pemutar Musik Latar:** Integrasi pemutar musik yang berputar mulus saat interaksi pertama dengan undangan.
- **Personalisasi Tamu Dinamis:** Menampilkan nama tamu yang diundang secara dinamis melalui parameter URL.
- **Performa Tinggi:** Di-render secara statis (SSG) oleh Next.js untuk waktu muat halaman yang sangat cepat.

## Panduan Penggunaan Lokal (Development)

Untuk menjalankan dan mengembangkan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1. **Instalasi Dependensi**
   Pastikan Anda telah menginstal Node.js versi terbaru. Buka terminal pada direktori proyek ini dan jalankan perintah:
   ```bash
   npm install
   ```

2. **Menjalankan Server Pengembangan**
   Setelah proses instalasi selesai, mulai server pengembangan dengan perintah:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan dan dapat diakses melalui peramban web di `http://localhost:3000`.

## Manajemen Konten & Konfigurasi

Seluruh konten tekstual dan konfigurasi acara dikelola secara terpusat untuk memudahkan pemeliharaan tanpa harus mengubah komponen inti:

- **Data Acara:** Anda dapat memodifikasi seluruh detail acara (nama, waktu, tanggal, alamat lengkap, dll.) dengan mengedit file `src/data/invitation.ts`.
- **Aset Media:** 
  - Foto dan gambar dapat diperbarui pada direktori `public/images/`.
  - Audio/Musik latar ditempatkan pada direktori `public/audio/`.

## Pembuatan Tautan Khusus Tamu

Untuk membuat tautan undangan yang secara otomatis menyapa tamu tertentu, Anda dapat menambahkan *query parameter* `?to=` pada akhir URL domain Anda.

**Contoh Format:**
`https://[domain-utama-anda].com/?to=Bapak+Budi+Santoso`

*(Catatan: Gunakan tanda tambah (`+`) atau kode `%20` sebagai pengganti karakter spasi pada URL)*

---
*Proyek ini dirancang secara profesional dengan memperhatikan aspek kualitas desain, standar kode, dan performa tinggi (SEO-friendly & Web Vitals).*
