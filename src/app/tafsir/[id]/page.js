"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getTafsir } from "../../../lib/api";
import React from "react";
import Header from "../../../components/Header";

export default function TafsirPage({ params }) {
  const unwrappedParams = React.use(params);
  const { data, isLoading, error } = useQuery({
    queryKey: ["tafsir", unwrappedParams.id],
    queryFn: () => getTafsir(unwrappedParams.id),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-white dark:via-gray-50 dark:to-emerald-50 transition-colors duration-300">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="spinner"
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-white dark:via-gray-50 dark:to-emerald-50 transition-colors duration-300">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-6xl mb-4">😔</div>
            <p className="text-xl text-red-600 dark:text-red-400 mb-4">
              Error: {error.message}
            </p>
            <Link href="/surat" className="btn-primary">
              ← Kembali ke Daftar Surat
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const tafsir = data?.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-white dark:via-gray-50 dark:to-emerald-50 islamic-pattern transition-colors duration-300">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-2xl border border-emerald-100 dark:border-slate-600 islamic-pattern relative overflow-hidden">
            {/* Islamic decorative border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

            {/* Islamic pattern decoration */}
            <div className="absolute top-4 right-4 text-emerald-200 dark:text-slate-600 text-6xl opacity-20 font-arabic">
              ☪
            </div>
            <div className="absolute bottom-4 left-4 text-emerald-200 dark:text-slate-600 text-4xl opacity-20 font-arabic">
              ✦
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:to-teal-400 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-lg">
                {tafsir?.nomor}
              </div>
              <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                تفسير {tafsir?.namaLatin}
              </h1>
              <p className="text-4xl font-arabic text-emerald-700 dark:text-emerald-300 mb-3 leading-relaxed">
                {tafsir?.nama}
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
                📖 {tafsir?.arti} • {tafsir?.jumlahAyat} ayat • 📍{" "}
                {tafsir?.tempatTurun}
              </p>

              {/* Navigation */}
              <div className="flex justify-center space-x-4">
                <Link
                  href="/surat"
                  className="btn-secondary px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  ← 📚 Daftar Surat
                </Link>
                <Link
                  href={`/surat/${tafsir?.nomor}`}
                  className="btn-primary px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  📖 Baca Al-Quran
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Deskripsi */}
        {tafsir?.deskripsi && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 shadow-xl border-l-4 border-emerald-500 mb-8 relative overflow-hidden"
          >
            {/* Islamic decoration */}
            <div className="absolute top-4 right-4 text-emerald-100 dark:text-slate-600 text-4xl opacity-30">
              🕌
            </div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white text-xl">📖</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  وصف السورة - Tentang Surat {tafsir?.namaLatin}
                </h3>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-inner">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-medium">
                  {tafsir.deskripsi}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tafsir Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full shadow-lg">
              <span className="text-2xl mr-3">💡</span>
              <h2 className="text-2xl font-bold">التفسير - Tafsir Ayat-ayat</h2>
            </div>
          </div>

          {tafsir?.tafsir?.map((item, index) => (
            <motion.div
              key={item.ayat}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-xl border border-emerald-100 dark:border-slate-600 relative overflow-hidden islamic-pattern"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-100 to-transparent dark:from-slate-700 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-teal-100 to-transparent dark:from-slate-700 rounded-tr-full"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6 pb-4 border-b border-emerald-100 dark:border-slate-600">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:to-teal-400 text-white rounded-full flex items-center justify-center text-lg font-bold mr-6 shadow-lg">
                    {item.ayat}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      الآية {item.ayat}
                    </h4>
                    <p className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold">
                      Ayat ke-{item.ayat}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-25 to-teal-25 dark:from-slate-700 dark:to-slate-600 rounded-lg p-6 shadow-inner">
                  <div className="prose dark:prose-invert max-w-none">
                    <div className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg font-medium">
                      {item.teks}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 mt-12 shadow-xl border border-emerald-100 dark:border-slate-600"
        >
          <div className="flex justify-between items-center">
            {tafsir?.nomor > 1 ? (
              <Link
                href={`/tafsir/${tafsir.nomor - 1}`}
                className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
              >
                <span className="mr-2">←</span>
                <div className="text-left">
                  <div className="text-sm opacity-75">السابق</div>
                  <div>Tafsir Sebelumnya</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            <Link
              href="/surat"
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
            >
              <span className="mr-2">📚</span>
              <div>
                <div className="text-sm opacity-90">الفهرس</div>
                <div>Daftar Surat</div>
              </div>
            </Link>

            {tafsir?.nomor < 114 ? (
              <Link
                href={`/tafsir/${tafsir.nomor + 1}`}
                className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
              >
                <div className="text-right">
                  <div className="text-sm opacity-75">التالي</div>
                  <div>Tafsir Selanjutnya</div>
                </div>
                <span className="ml-2">→</span>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
