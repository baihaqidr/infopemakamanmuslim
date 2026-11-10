# Clone Website: infopemakamanmuslim.com (Al Azhar Memorial Garden)

Website landing page lengkap untuk pemesanan & konsultasi kavling pemakaman muslim Al Azhar Memorial Garden di Karawang Timur.

## 📁 Struktur Direktori

```text
infopemakamanmuslim/
├── assets/
│   ├── index-Bn4rvyVp.js      # Core React SPA bundle (Framer Motion, Lucide icons, responsive layout)
│   └── index-CAOMylnY.css     # Tailwind & Google Fonts (Playfair Display & Lora) styles
├── images/                    # Seluruh aset gambar beresolusi tinggi tersimpan lokal
│   ├── hero-bg.jpg
│   ├── logo.png
│   ├── consultant.jpg
│   ├── tipe-single.jpg
│   ├── tipe-double.jpg
│   ├── tipe-super-double.jpg
│   ├── tipe-family.jpg
│   ├── tipe-super-family.jpg
│   ├── tipe-royal-family.jpg
│   └── ...
├── index.html                 # HTML utama dengan SEO meta tags & Schema.org JSON-LD
├── robots.txt                 # Konfigurasi perayap search engine
├── sitemap.xml                # Sitemap XML untuk indexing Google
├── vercel.json                # Konfigurasi routing & caching Vercel
├── package.json               # Konfigurasi script lokal
└── README.md
```

---

## 🚀 Cara Menjalankan di Lokal (Local Preview)

Buka terminal di folder project ini:

```bash
cd "D:\vibe coding application\infopemakamanmuslim"
```

Jalankan salah satu perintah berikut:

### Opsi A: Menggunakan Node / npx
```bash
npx serve .
```
Akses di browser: `http://localhost:3000`

### Opsi B: Menggunakan Python
```bash
python -m http.server 3000
```
Akses di browser: `http://localhost:3000`

---

## 🌐 Cara Deploy ke Vercel

Ada dua cara mudah untuk deploy ke Vercel:

### Cara 1: Menggunakan Vercel CLI (Paling Cepat)

1. Buka PowerShell / Terminal di direktori project:
   ```bash
   cd "D:\vibe coding application\infopemakamanmuslim"
   ```
2. Jalankan perintah:
   ```bash
   npx.cmd vercel
   ```
   *(atau `vercel` jika Vercel CLI terinstall global)*
3. Ikuti prompt interaktif:
   - **Set up and deploy?** -> `Y`
   - **Which scope?** -> Pilih akun Vercel Anda
   - **Link to existing project?** -> `N`
   - **What's your project's name?** -> `infopemakamanmuslim` (atau nama pilihan Anda)
   - **In which directory is your code located?** -> `./`
4. Untuk deploy ke production domain:
   ```bash
   npx.cmd vercel --prod
   ```

### Cara 2: Hubungkan via GitHub (Rekomendasi untuk update otomatis)

1. Buat repository baru di GitHub (misal: `infopemakamanmuslim`).
2. Push repository lokal ke GitHub:
   ```bash
   git remote add origin https://github.com/USERNAME/infopemakamanmuslim.git
   git branch -M main
   git push -u origin main
   ```
3. Buka dashboard [vercel.com](https://vercel.com).
4. Klik **Add New...** -> **Project**.
5. Pilih repository GitHub Anda, lalu klik **Deploy**.
6. Selesai! Website Anda langsung live di URL Vercel (misal: `infopemakamanmuslim.vercel.app`).

