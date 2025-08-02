"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useDarkMode } from "../app/layout";
import { useLoading } from "../hooks/useLoading";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { navigateWithLoading } = useLoading();

  return (
    <nav className="bg-gray-50 dark:bg-slate-800 shadow-lg border-b border-gray-200 dark:border-slate-600 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() =>
              navigateWithLoading("/", "العودة إلى الصفحة الرئيسية...")
            }
          >
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              QuranESIA
            </h1>
          </motion.div>

          <div className="flex items-center space-x-6">
            <motion.nav
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex space-x-6"
            >
              <button
                onClick={() =>
                  navigateWithLoading("/", "العودة للصفحة الرئيسية...")
                }
                className="hover:text-emerald-600 dark:hover:text-emerald-600 transition-colors font-medium"
                style={{ color: isDarkMode ? "#4b5563" : "#9ca3af" }}
              >
                Beranda
              </button>
              <button
                onClick={() =>
                  navigateWithLoading("/surat", "جاري تحميل قائمة السور...")
                }
                className="hover:text-emerald-600 dark:hover:text-emerald-600 transition-colors font-medium"
                style={{ color: isDarkMode ? "#4b5563" : "#9ca3af" }}
              >
                Daftar Surat
              </button>
            </motion.nav>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300 border border-gray-200 dark:border-slate-600"
              title={isDarkMode ? "Mode Terang" : "Mode Gelap"}
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
