import axios from "axios";

const API_BASE_URL = "https://equran.id/api/v2";

// Membuat instance axios
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Fungsi untuk mengambil semua surat
export const getSurat = async () => {
  try {
    const response = await api.get("/surat");

    /**
     * Contoh response dari getSurat():
     * {
     *   "code": 200,
     *   "message": "Data retrieved successfully",
     *   "data": [
     *     {
     *       "nomor": 1,
     *       "nama": "الفاتحة",
     *       "namaLatin": "Al-Fatihah",
     *       "jumlahAyat": 7,
     *       "tempatTurun": "Mekah",
     *       "arti": "Pembukaan",
     *       "deskripsi": "Surat Al Faatihah (Pembukaan) ...",
     *       "audioFull": {
     *         "01": "https://equran.nos.wjv-1.neo.id/audio-full/Abdullah-Al-Juhany/001.mp3",
     *         "02": "https://equran.nos.wjv-1.neo.id/audio-full/Abdul-Muhsin-Al-Qasim/001.mp3",
     *         "03": "https://equran.nos.wjv-1.neo.id/audio-full/Abdurrahman-as-Sudais/001.mp3",
     *         "04": "https://equran.nos.wjv-1.neo.id/audio-full/Ibrahim-Al-Dossari/001.mp3",
     *         "05": "https://equran.nos.wjv-1.neo.id/audio-full/Misyari-Rasyid-Al-Afasi/001.mp3"
     *       }
     *     },
     *     {
     *       "nomor": 2,
     *       "nama": "البقرة",
     *       "namaLatin": "Al-Baqarah",
     *       "jumlahAyat": 286,
     *       "tempatTurun": "Madinah",
     *       "arti": "Sapi Betina",
     *       "deskripsi": "Surat Al-Baqarah diturunkan di Madinah ...",
     *       "audioFull": { ... }
     *     },
     *     ...
     *   ]
     * }
     */

    return response.data;
  } catch (error) {
    console.error("Error fetching surat:", error);
    throw error;
  }
};

// Fungsi untuk mengambil detail surat berdasarkan id
export const getSuratDetail = async (id) => {
  try {
    const response = await api.get(`/surat/${id}`);

    /**
     * Contoh response dari getSuratDetail(1):
     * {
     *   "code": 200,
     *   "message": "Data retrieved successfully",
     *   "data": {
     *     "nomor": 1,
     *     "nama": "الفاتحة",
     *     "namaLatin": "Al-Fatihah",
     *     "jumlahAyat": 7,
     *     "tempatTurun": "Mekah",
     *     "arti": "Pembukaan",
     *     "deskripsi": "Surat Al Faatihah (Pembukaan) ...",
     *     "audioFull": {
     *       "01": "https://equran.nos.wjv-1.neo.id/audio-full/Abdullah-Al-Juhany/001.mp3",
     *       "02": "https://equran.nos.wjv-1.neo.id/audio-full/Abdul-Muhsin-Al-Qasim/001.mp3",
     *       "03": "https://equran.nos.wjv-1.neo.id/audio-full/Abdurrahman-as-Sudais/001.mp3",
     *       "04": "https://equran.nos.wjv-1.neo.id/audio-full/Ibrahim-Al-Dossari/001.mp3",
     *       "05": "https://equran.nos.wjv-1.neo.id/audio-full/Misyari-Rasyid-Al-Afasi/001.mp3"
     *     }
     *   }
     * }
     */

    return response.data;
  } catch (error) {
    console.error("Error fetching surat detail:", error);
    throw error;
  }
};

// Fungsi untuk mengambil tafsir surat berdasarkan id
export const getTafsir = async (id) => {
  try {
    const response = await api.get(`/tafsir/${id}`);

    /**
     * Contoh response dari getTafsir(2) untuk surat Al-Baqarah:
     * {
     *   "code": 200,
     *   "message": "Data retrieved successfully",
     *   "data": {
     *     "nomor": 2,
     *     "nama": "البقرة",
     *     "namaLatin": "Al-Baqarah",
     *     "jumlahAyat": 286,
     *     "tempatTurun": "Madinah",
     *     "arti": "Sapi",
     *     "deskripsi": "Surat Al Baqarah ...",
     *     "audioFull": {
     *       "01": "https://equran.nos.wjv-1.neo.id/audio-full/Abdullah-Al-Juhany/002.mp3",
     *       "02": "https://equran.nos.wjv-1.neo.id/audio-full/Abdul-Muhsin-Al-Qasim/002.mp3",
     *       "03": "https://equran.nos.wjv-1.neo.id/audio-full/Abdurrahman-as-Sudais/002.mp3",
     *       "04": "https://equran.nos.wjv-1.neo.id/audio-full/Ibrahim-Al-Dossari/002.mp3",
     *       "05": "https://equran.nos.wjv-1.neo.id/audio-full/Misyari-Rasyid-Al-Afasi/002.mp3"
     *     },
     *     "tafsir": [
     *       {
     *         "ayat": 1,
     *         "teks": "Alif Laam Miim adalah huruf muqatha'ah..."
     *       },
     *       {
     *         "ayat": 2,
     *         "teks": "Kitab (Al Quran) ini tidak ada keraguan padanya..."
     *       },
     *       ...
     *     ]
     *   }
     * }
     */

    return response.data;
  } catch (error) {
    console.error("Error fetching tafsir:", error);
    throw error;
  }
};
