"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getSuratDetail } from "../../../lib/api";
import React from "react";
import Header from "../../../components/Header";
import AudioPlayer from "../../../components/AudioPlayer";

export default function SuratDetailPage({ params }) {
  const unwrappedParams = React.use(params);
  const { data, isLoading, error } = useQuery({
    queryKey: ["suratDetail", unwrappedParams.id],
    queryFn: () => getSuratDetail(unwrappedParams.id),
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
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              🔄 Coba Lagi
            </button>
          </div>
        </div>
      </div>
    );
  }
  const surat = data?.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-white dark:via-gray-50 dark:to-emerald-50 islamic-pattern transition-colors duration-300">
      <Header />

      {/* Audio Player */}
      {surat?.audioFull && (
        <div className="bg-white dark:bg-slate-800 shadow-lg border-b border-gray-200 dark:border-slate-600">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <AudioPlayer
              audioUrl={surat.audioFull["01"]}
              title={`${surat.namaLatin} - ${surat.arti}`}
            />
          </div>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-slate-600">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
              {surat?.nomor}
            </div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {surat?.namaLatin}
            </h1>
            <p className="text-3xl font-arabic text-emerald-700 dark:text-emerald-300 mb-2">
              {surat?.nama}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              {surat?.arti} • {surat?.jumlahAyat} ayat • {surat?.tempatTurun}
            </p>

            {/* Navigation */}
            <div className="flex justify-center space-x-4">
              <Link href="/surat" className="btn-secondary px-6 py-2">
                ← Daftar Surat
              </Link>
              <Link
                href={`/tafsir/${surat?.nomor}`}
                className="btn-primary px-6 py-2"
              >
                📖 Baca Tafsir
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-slate-600 mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            📖 Tentang Surat {surat?.namaLatin}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {surat?.deskripsi}
          </p>
        </motion.div>

        {/* Ayat Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          {surat?.ayat?.map((ayat, index) => (
            <motion.div
              key={ayat.nomorAyat}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-slate-600"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {ayat.nomorAyat}
                </span>
                <button className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-4">
                <p className="text-2xl font-arabic text-emerald-700 dark:text-emerald-300 leading-loose text-right">
                  {ayat.teksArab}
                </p>
              </div>

              <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <p className="italic mb-2">{ayat.teksLatin}</p>
                <p>{ayat.teksIndonesia}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-slate-600"
        >
          {surat?.nomor > 1 && (
            <Link
              href={`/surat/${surat.nomor - 1}`}
              className="btn-secondary px-6 py-3"
            >
              ← Surat Sebelumnya
            </Link>
          )}

          <Link href="/surat" className="btn-primary px-6 py-3">
            📚 Daftar Surat
          </Link>

          {surat?.nomor < 114 && (
            <Link
              href={`/surat/${surat.nomor + 1}`}
              className="btn-secondary px-6 py-3"
            >
              Surat Selanjutnya →
            </Link>
          )}
        </motion.div>
      </main>
    </div>
  );
}
