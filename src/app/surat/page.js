"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getSurat } from "../../lib/api";
import { useState } from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import AudioPlayer from "../../components/AudioPlayer";
import { useLoading } from "../../hooks/useLoading";

export default function SuratPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAudio, setSelectedAudio] = useState(null);
  const { navigateWithLoading } = useLoading();

  const { data, isLoading, error } = useQuery({
    queryKey: ["surat"],
    queryFn: getSurat,
  });

  // Filter surat berdasarkan pencarian
  const filteredSurat =
    data?.data?.filter(
      (surat) =>
        surat.namaLatin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        surat.nama.includes(searchTerm) ||
        surat.arti.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePlayAudio = (surat) => {
    // Menggunakan qori pertama (01) sebagai default
    const audioUrl = surat.audioFull["01"];
    setSelectedAudio({
      url: audioUrl,
      title: `${surat.namaLatin} - ${surat.arti}`,
    });
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-white dark:via-gray-50 dark:to-emerald-50 islamic-pattern transition-colors duration-300">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            📚 Daftar Surat Al-Quran
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Pilih surat yang ingin Anda baca atau dengarkan
          </p>

          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-slate-600 max-w-md mx-auto mb-6">
            <p className="text-2xl font-arabic text-emerald-700 dark:text-emerald-300 mb-2">
              وَنُنَزِّلُ مِنَ ٱلْقُرْءَانِ مَا هُوَ شِفَآءٌ وَرَحْمَةٌ
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              "Dan Kami turunkan dari Al-Quran suatu yang menjadi penawar dan
              rahmat"
            </p>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SearchBar
            onSearch={handleSearch}
            placeholder="🔍 Cari surat (nama, arti, atau nomor)..."
          />
        </motion.div>

        {/* Audio Player */}
        {selectedAudio && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <AudioPlayer
              audioUrl={selectedAudio.url}
              title={selectedAudio.title}
            />
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center shadow-lg border border-gray-200 dark:border-slate-600">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {filteredSurat.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Surat Ditemukan
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center shadow-lg border border-gray-200 dark:border-slate-600">
            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              114
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Surat
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center shadow-lg border border-gray-200 dark:border-slate-600">
            <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
              6,236
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Ayat
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center shadow-lg border border-gray-200 dark:border-slate-600">
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
              5
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Pilihan Qori
            </div>
          </div>
        </motion.div>

        {/* Surat List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-4"
        >
          {filteredSurat.map((surat, index) => (
            <motion.div
              key={surat.nomor}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-hover bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-600 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 text-white rounded-full flex items-center justify-center font-bold">
                      {surat.nomor}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                        {surat.namaLatin}
                      </h3>
                      <p className="text-2xl font-arabic text-emerald-700 dark:text-emerald-300 mb-1">
                        {surat.nama}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {surat.arti} • {surat.jumlahAyat} ayat •{" "}
                        {surat.tempatTurun}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Audio Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePlayAudio(surat)}
                      className="p-3 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors"
                      title="Putar Audio"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.button>

                    {/* Read Button */}
                    <Link href={`/surat/${surat.nomor}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary px-6 py-3"
                      >
                        📖 Baca
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredSurat.length === 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Surat tidak ditemukan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Coba kata kunci lain atau periksa ejaan Anda
            </p>
            <button onClick={() => setSearchTerm("")} className="btn-secondary">
              🔄 Reset Pencarian
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
