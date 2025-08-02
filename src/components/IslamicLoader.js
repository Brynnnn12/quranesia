"use client";

import { motion } from "framer-motion";

export default function IslamicLoader({
  isLoading,
  message = "جاري التحميل...",
}) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-white/95 backdrop-blur-sm"
    >
      <div className="text-center">
        {/* Islamic Geometric Pattern Loader */}
        <div className="relative mb-8">
          {/* Outer rotating ring with Islamic pattern */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 mx-auto relative"
          >
            <div className="absolute inset-0 border-4 border-emerald-200 rounded-full"></div>
            <div className="absolute inset-1 border-3 border-dashed border-emerald-400 rounded-full"></div>
            <div className="absolute inset-2 border-2 border-teal-300 rounded-full"></div>
          </motion.div>

          {/* Inner counter-rotating star */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white text-2xl font-arabic"
              >
                ☪
              </motion.span>
            </div>
          </motion.div>

          {/* Pulsing dots around */}
          {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
            <motion.div
              key={index}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="absolute w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-40px)`,
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="space-y-2"
        >
          <p className="text-2xl font-arabic text-emerald-700 dark:text-emerald-600">
            {message}
          </p>
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-500">
            Memuat Halaman...
          </p>
        </motion.div>

        {/* Islamic Ornamental Border */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-6 w-32 h-1 mx-auto bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 rounded-full opacity-60"
        />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 text-6xl text-emerald-100 dark:text-emerald-200 opacity-20 font-arabic">
          ✦
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-4xl text-teal-100 dark:text-teal-200 opacity-20">
          🕌
        </div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-cyan-100 dark:text-cyan-200 opacity-20 font-arabic">
          ۞
        </div>
      </div>
    </motion.div>
  );
}
