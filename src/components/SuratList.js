"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getSurat } from "@/lib/api";

export default function SuratList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["surat"],
    queryFn: getSurat,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.data?.map((surat, index) => (
        <motion.div
          key={surat.nomor}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          whileHover={{ scale: 1.03, y: -5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <Link href={`/surat/${surat.nomor}`}>
            <div className="p-6 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                  {surat.nomor}
                </div>
                <div className="text-right">
                  <p className="text-2xl font-arabic text-emerald-700">
                    {surat.nama}
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {surat.namaLatin}
              </h3>
              <p className="text-gray-600 mb-2">{surat.arti}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{surat.jumlahAyat} ayat</span>
                <span>{surat.tempatTurun}</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
