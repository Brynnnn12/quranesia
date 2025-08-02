# 🕌 QuranESIA - Al-Quran Digital Indonesia

**QuranESIA** adalah aplikasi Al-Quran digital modern yang dibangun dengan Next.js 15, menampilkan Al-Quran lengkap dengan terjemahan Indonesia, tafsir, audio, dan desain Islamic yang indah.

![QuranESIA Banner](https://img.shields.io/badge/QuranESIA-Al--Quran%20Digital-emerald?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)

## ✨ Fitur Utama

### 📖 **Al-Quran Lengkap**

- **114 Surat** dengan teks Arab asli
- **Terjemahan Indonesia** yang mudah dipahami
- **Tafsir** untuk setiap ayat
- **Audio Murottal** dengan berbagai qori

### 🎨 **Design Islamic Modern**

- **Dark Mode** dengan tema terang/gelap yang elegan
- **Typography Arab** dengan font Amiri dan Scheherazade New
- **Islamic Patterns** dan ornamen geometris
- **Gradient Colors** emerald, teal, dan cyan
- **Smooth Animations** dengan Framer Motion

### 🚀 **Teknologi Canggih**

- **Next.js 15** dengan Turbopack untuk performa optimal
- **React Query** untuk data fetching yang efisien
- **Tailwind CSS v4** untuk styling modern
- **Islamic Loading Spinner** dengan animasi khas
- **Responsive Design** untuk semua perangkat

### 🌙 **Pengalaman Pengguna**

- **Search Function** untuk mencari surat dengan mudah
- **Audio Player** terintegrasi untuk mendengarkan murottal
- **Smooth Navigation** dengan loading animation Islamic
- **Toggle Dark Mode** di header
- **Mobile Friendly** interface

## 🛠 Getting Started

### Prasyarat

- Node.js 18+
- npm, yarn, pnpm, atau bun

### Instalasi

1. **Clone repository**

```bash
git clone https://github.com/username/quranesia.git
cd quranesia
```

2. **Install dependencies**

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. **Jalankan development server**

4. **Jalankan development server**

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

4. **Buka aplikasi**
   Akses [http://localhost:3000](http://localhost:3000) di browser untuk melihat QuranESIA.

## 📁 Struktur Proyek

```
quranesia/
├── src/
│   ├── app/                 # App Router (Next.js 15)
│   │   ├── globals.css      # Global styles & Islamic themes
│   │   ├── layout.js        # Root layout dengan providers
│   │   ├── page.js          # Homepage dengan hero section
│   │   ├── surat/           # Halaman daftar surat
│   │   │   ├── page.js      # List semua surat
│   │   │   └── [id]/        # Detail surat
│   │   │       └── page.js  # Baca Al-Quran per surat
│   │   └── tafsir/          # Halaman tafsir
│   │       └── [id]/        # Tafsir per surat
│   │           └── page.js  # Tafsir lengkap
│   ├── components/          # Komponen reusable
│   │   ├── Header.js        # Navigation dengan dark mode
│   │   ├── SearchBar.js     # Pencarian surat
│   │   ├── AudioPlayer.js   # Player murottal
│   │   ├── SuratList.js     # List component
│   │   └── IslamicLoader.js # Loading spinner Islamic
│   ├── hooks/               # Custom hooks
│   │   └── useLoading.js    # Loading state management
│   └── lib/                 # Utilities
│       └── api.js           # API functions
├── public/                  # Static assets
└── package.json            # Dependencies
```

## 🎨 Fitur Design

### Islamic Theme System

- **CSS Variables** untuk konsistensi warna
- **Islamic Patterns** dengan gradients
- **Arabic Typography** menggunakan web fonts
- **Smooth Transitions** di semua komponen
- **Responsive Breakpoints** untuk mobile-first

### Dark Mode Implementation

```javascript
// Contoh penggunaan dark mode
const { isDarkMode, toggleDarkMode } = useDarkMode();
```

### Loading Animation

```javascript
// Islamic loading dengan pesan Arabic
const { navigateWithLoading } = useLoading();
navigateWithLoading("/surat", "جاري تحميل قائمة السور...");
```

## 🔧 Dependencies Utama

### Core Framework

- **Next.js 15.4.5** - React framework dengan App Router
- **React 19** - Library UI terbaru
- **React Query** - Server state management

### Styling & Animation

- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Heroicons** - Icon set

### Typography

- **Amiri Font** - Font Arabic utama
- **Scheherazade New** - Font Quran
- **Geist** - Font modern untuk UI

## 📱 Halaman & Fitur

### 🏠 **Homepage** (`/`)

- Hero section dengan branding Islamic
- Call-to-action ke daftar surat
- Animasi fade-in yang smooth

### 📚 **Daftar Surat** (`/surat`)

- Grid layout 114 surat Al-Quran
- Search function dengan filter real-time
- Audio player terintegrasi
- Card hover effects

### 📖 **Baca Surat** (`/surat/[id]`)

- Teks Arab dengan terjemahan
- Navigation antar surat
- Audio player per surat
- Typography Arabic yang indah

### 💡 **Tafsir** (`/tafsir/[id]`)

- Tafsir lengkap per ayat
- Design card Islamic yang elegant
- Navigation previous/next surat
- Ornamen Islamic pattern

## 🌐 API Integration

Aplikasi ini menggunakan API Al-Quran Indonesia:

- **Base URL**: `https://equran.id/api/v2/`
- **Endpoints**:
  - `/surat` - Daftar semua surat
  - `/surat/{nomor}` - Detail surat
  - `/tafsir/{nomor}` - Tafsir surat

## 🚀 Performance Optimizations

- **Next.js 15 Turbopack** untuk build yang cepat
- **React Query Caching** untuk data fetching
- **Image Optimization** otomatis
- **Code Splitting** per route
- **Font Optimization** dengan next/font

## 📱 Mobile Responsive

Aplikasi fully responsive dengan:

- **Mobile-first approach**
- **Touch-friendly navigation**
- **Optimized typography** untuk mobile
- **Swipe gestures** support
- **PWA ready** (Progressive Web App)

## 🤝 Contributing

Kontribusi sangat diterima! Untuk berkontribusi:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🎯 Roadmap

### Version 2.0 (Planned)

- [ ] **Bookmark System** - Simpan ayat favorit
- [ ] **Reading Progress** - Track progress baca Al-Quran
- [ ] **Multiple Translations** - Terjemahan multi-bahasa
- [ ] **Tajwid Highlighting** - Highlight hukum tajwid
- [ ] **Prayer Times** - Waktu sholat terintegrasi
- [ ] **Qibla Direction** - Arah kiblat
- [ ] **Daily Verses** - Ayat harian
- [ ] **Offline Mode** - Akses tanpa internet

### Version 2.1 (Future)

- [ ] **User Accounts** - Sistem login pengguna
- [ ] **Sync Progress** - Sinkronisasi antar device
- [ ] **Social Features** - Berbagi ayat
- [ ] **Advanced Search** - Pencarian dalam ayat
- [ ] **Voice Recognition** - Pencarian dengan suara
- [ ] **AR Features** - Augmented Reality Quran

## 🙏 Acknowledgments

- **Al-Quran API** - [equran.id](https://equran.id)
- **Islamic Fonts** - Amiri & Scheherazade New
- **Next.js Team** - Framework yang luar biasa
- **Vercel** - Platform deployment
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library

## 📞 Contact & Support

- **Developer**: Your Name
- **Email**: your.email@example.com
- **Website**: [quranesia.com](https://quranesia.com)
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

<div align="center">

**بارك الله فيكم**  
_Barakallahu fiikum_

Made with ❤️ for the Muslim Ummah

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-cyan?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Islamic](https://img.shields.io/badge/Theme-Islamic-emerald?style=flat-square)](https://github.com)

</div>
