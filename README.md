# 🗂️ Sortirin

**Sortirin** adalah aplikasi web full-stack untuk manajemen sampah yang memungkinkan pengguna mengunggah gambar sampah, mendapatkan reward, dan melakukan transaksi. Aplikasi ini di-deploy secara publik di [sortirin.vercel.app](https://sortirin.vercel.app).

---

## 🖥️ Tech Stack — Frontend

| No | Teknologi | Keterangan |
|---|---|---|
| 01 | **React 19** | Library utama untuk membangun antarmuka pengguna |
| 02 | **Vite 8** | Build tool modern dengan Hot Module Replacement (HMR) |
| 03 | **React Router DOM v7** | Navigasi dan routing antar halaman |
| 04 | **Tailwind CSS v3** | Utility-first CSS framework untuk styling |
| 05 | **Axios** | HTTP client untuk komunikasi dengan backend API |
| 06 | **Lucide React** | Library icon yang ringan dan konsisten |
| 07 | **ESLint** | Linting untuk menjaga kualitas kode |
| 08 | **Vercel** | Platform deployment untuk frontend |

---

## ⚙️ Tech Stack — Backend

| No | Teknologi | Keterangan |
|---|---|---|
| 01 | **Node.js** | Runtime JavaScript untuk membangun server yang cepat dan efisien |
| 02 | **Express.js** | Framework backend untuk membangun REST API yang terstruktur |
| 03 | **PostgreSQL** | Database relasional untuk menyimpan data user, transaksi, dan reward |
| 04 | **JWT (JSON Web Token)** | Sistem autentikasi yang aman untuk melindungi endpoint API |
| 05 | **Multer** | Middleware untuk menangani upload gambar sampah dari user |
| 06 | **Axios** | HTTP client untuk menghubungkan backend dengan layanan AI di Railway |
| 07 | **PM2** | Process manager untuk menjaga backend tetap berjalan di VPS |

---

## 📦 Instalasi & Menjalankan Project

### Prasyarat

Pastikan kamu sudah menginstall:
- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- npm (sudah termasuk bersama Node.js)
- PostgreSQL (untuk backend)

### Frontend

**1. Clone repository**
```bash
git clone https://github.com/HafizhRaihan31/Capstone-FS.git
cd Capstone-FS
```

**2. Install dependencies**
```bash
npm install
```

**3. Jalankan development server**
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173` secara default.

### Backend

**1. Masuk ke direktori backend**
```bash
cd backend
```

**2. Install dependencies**
```bash
npm install
```

**3. Setup environment variables**
```bash
cp .env.example .env
# Edit file .env sesuai konfigurasi database dan JWT secret kamu
```

**4. Jalankan server**
```bash
npm run dev
# atau menggunakan PM2 untuk production:
pm2 start index.js --name sortirin-backend
```

---

## 📜 Scripts yang Tersedia (Frontend)

| Script | Perintah | Keterangan |
|---|---|---|
| Development | `npm run dev` | Menjalankan dev server dengan HMR |
| Build | `npm run build` | Membuild aplikasi untuk production |
| Preview | `npm run preview` | Melihat hasil build secara lokal |
| Lint | `npm run lint` | Menjalankan ESLint untuk cek kode |

---

## 🚀 Deploy

- **Frontend** — di-deploy menggunakan **Vercel**. Konfigurasi tersimpan di `vercel.json`.
- **Backend** — berjalan di **VPS** dan dikelola menggunakan **PM2**.

🔗 Live: [https://sortirin.vercel.app](https://sortirin.vercel.app)
