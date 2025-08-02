"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-white dark:via-gray-50 dark:to-emerald-50 islamic-pattern transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Islamic Decoration */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-white text-3xl font-arabic">ق</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
              QuranESIA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
          >
            Al-Quran Digital Indonesia
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-xl border border-gray-200 dark:border-slate-600 mb-8 max-w-2xl mx-auto"
          >
            <p className="text-2xl font-arabic text-emerald-700 dark:text-emerald-300 mb-3">
              ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic">
              "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan"
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              QS. Al-Alaq: 1
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Platform digital untuk membaca Al-Quran dengan mudah dan nyaman.
            Akses semua surat, ayat, tafsir, dan audio dalam bahasa Indonesia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/surat"
              className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              🕌 Mulai Membaca
            </Link>
            <Link
              href="#features"
              className="bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border-2 border-emerald-600 dark:border-emerald-400 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-lg"
            >
              📚 Pelajari Lebih Lanjut
            </Link>
          </motion.div>
        </motion.div>

        {/* Statistics Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "114", label: "Surat", icon: "📖" },
            { number: "6,236", label: "Ayat", icon: "📝" },
            { number: "30", label: "Juz", icon: "📚" },
            { number: "5", label: "Qori", icon: "🎵" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-lg border border-gray-200 dark:border-slate-600 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12"
          >
            ✨ Fitur Unggulan
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🕌",
                title: "114 Surat Lengkap",
                description:
                  "Akses semua surat dalam Al-Quran dengan terjemahan bahasa Indonesia yang akurat dan terpercaya.",
              },
              {
                icon: "🎵",
                title: "Audio Murotal",
                description:
                  "Dengarkan bacaan Al-Quran dari berbagai qori ternama dengan kualitas audio jernih.",
              },
              {
                icon: "💡",
                title: "Tafsir Lengkap",
                description:
                  "Pahami makna mendalam setiap ayat dengan tafsir yang komprehensif dan mudah dipahami.",
              },
              {
                icon: "🔍",
                title: "Pencarian Cerdas",
                description:
                  "Cari surat, ayat, atau kata tertentu dengan fitur pencarian yang cepat dan akurat.",
              },
              {
                icon: "🌙",
                title: "Mode Gelap",
                description:
                  "Nikmati pengalaman membaca yang nyaman dengan mode gelap untuk mata yang tidak lelah.",
              },
              {
                icon: "📱",
                title: "Responsif & Modern",
                description:
                  "Tampilan yang responsif dan modern untuk pengalaman membaca yang optimal di semua perangkat.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-600"
              >
                <div className="text-5xl mb-4 text-center">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 text-center">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="islamic-gradient rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Mulai Perjalanan Spiritual Anda
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Bergabunglah dengan ribuan muslims yang telah mempercayai
              QuranESIA
            </p>
            <Link
              href="/surat"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              🚀 Mulai Sekarang
            </Link>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-slate-900 text-white py-12 mt-24 border-t border-gray-700 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-xl font-bold mb-4 text-emerald-400">
                QuranESIA
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Platform digital terpercaya untuk membaca Al-Quran dengan fitur
                lengkap dan modern.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-emerald-400">Fitur</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Al-Quran Lengkap</li>
                <li>Audio Murotal</li>
                <li>Tafsir Indonesia</li>
                <li>Pencarian Surat</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-emerald-400">
                Kontak
              </h4>
              <div className="text-gray-400 space-y-2">
                <p>📧 info@quranesia.com</p>
                <p>🌐 www.quranesia.com</p>
                <p>📱 Aplikasi Mobile Segera Hadir</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 dark:border-slate-600 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 QuranESIA. Semua hak dilindungi. Dibuat dengan ❤️
              untuk umat Islam.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
