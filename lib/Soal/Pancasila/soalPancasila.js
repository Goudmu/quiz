const ListSoalPancasila = [
  {
    question:
      "Siapakah tokoh yang pertama kali mengusulkan istilah 'Pancasila' dalam sidang BPUPKI?",
    options: ["Moh. Yamin", "Soepomo", "Sukarno", "Ki Hajar Dewantara"],
    correctAnswer: "Sukarno",
  },
  {
    question:
      "Rumusan Pancasila versi Piagam Jakarta berbeda dengan versi akhir karena adanya frasa tambahan mengenai...",
    options: [
      "kesejahteraan sosial",
      "syariat Islam bagi pemeluknya",
      "persatuan Indonesia",
      "musyawarah perwakilan",
    ],
    correctAnswer: "syariat Islam bagi pemeluknya",
  },
  {
    question: "Salah satu ciri pengamalan sila kedua Pancasila adalah...",
    options: [
      "Mengembangkan sikap suka bekerja keras",
      "Mengutamakan musyawarah dalam mengambil keputusan",
      "Mengakui persamaan hak setiap manusia tanpa membeda-bedakan",
      "Mampu menempatkan kepentingan bangsa di atas kepentingan pribadi",
    ],
    correctAnswer:
      "Mengakui persamaan hak setiap manusia tanpa membeda-bedakan",
  },
  {
    question:
      "Menurut Tap MPR No XVIII/MPR/1998, Pancasila ditegaskan kembali sebagai...",
    options: [
      "Panduan pengamalan agama",
      "Dasar negara yang final dan tidak dapat diubah",
      "Sumber hukum tertinggi",
      "Pengganti UUD 1945",
    ],
    correctAnswer: "Dasar negara yang final dan tidak dapat diubah",
  },
  {
    question:
      "Sikap saling menghormati antar pemeluk agama dalam masyarakat mencerminkan pengamalan sila ke...",
    options: ["Satu", "Dua", "Tiga", "Empat"],
    correctAnswer: "Satu",
  },
  {
    question:
      "Mengakui dan memperlakukan manusia sesuai harkat dan martabatnya sebagai makhluk Tuhan adalah contoh pengamalan sila ke...",
    options: ["Satu", "Dua", "Tiga", "Lima"],
    correctAnswer: "Dua",
  },
  {
    question:
      "Berpartisipasi dalam kegiatan gotong royong di lingkungan tempat tinggal mencerminkan pengamalan sila ke...",
    options: ["Dua", "Tiga", "Empat", "Lima"],
    correctAnswer: "Tiga",
  },
  {
    question:
      "Mengutamakan musyawarah untuk mencapai mufakat dalam mengambil keputusan bersama adalah bentuk pengamalan sila ke...",
    options: ["Satu", "Empat", "Lima", "Tiga"],
    correctAnswer: "Empat",
  },
  {
    question:
      "Membantu tetangga yang sedang mengalami kesulitan ekonomi adalah bentuk pengamalan sila ke...",
    options: ["Dua", "Tiga", "Lima", "Empat"],
    correctAnswer: "Lima",
  },
  {
    question:
      "Mengikuti kegiatan keagamaan sesuai dengan agama dan kepercayaan masing-masing tanpa memaksakan kepada orang lain merupakan contoh pengamalan sila ke...",
    options: ["Satu", "Dua", "Empat", "Lima"],
    correctAnswer: "Satu",
  },
  {
    question:
      "Menghindari tindakan diskriminatif terhadap orang lain berdasarkan suku atau agama adalah bentuk pengamalan sila ke...",
    options: ["Dua", "Tiga", "Empat", "Lima"],
    correctAnswer: "Dua",
  },
  {
    question:
      "Ikut serta dalam menjaga ketertiban umum di lingkungan masyarakat mencerminkan pengamalan sila ke...",
    options: ["Tiga", "Empat", "Dua", "Satu"],
    correctAnswer: "Tiga",
  },
  {
    question:
      "Menghormati keputusan hasil musyawarah walaupun tidak sesuai dengan pendapat pribadi merupakan pengamalan sila ke...",
    options: ["Empat", "Tiga", "Dua", "Lima"],
    correctAnswer: "Empat",
  },
  {
    question:
      "Membayar pajak tepat waktu sebagai bentuk kontribusi terhadap pembangunan bangsa adalah contoh pengamalan sila ke...",
    options: ["Satu", "Tiga", "Lima", "Empat"],
    correctAnswer: "Lima",
  },
];

export const SoalPancasila = (jumlahSoal) => {
  const ListSoalFinal = ListSoalPancasila.filter(Boolean)
    .sort(() => Math.random() - 0.5)
    .slice(0, jumlahSoal);
  return ListSoalFinal.map((soal, index) => ({
    id: index + 1,
    question: soal.question,
    options: soal.options,
    correctAnswer: soal.correctAnswer,
  }));
};
