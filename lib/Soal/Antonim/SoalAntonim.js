import { getShuffledIndexes } from "@/lib/utils";

export const ListSoalAntonim = [
  { kata: "Abstrak", antonim: "Konkret" },
  { kata: "Ahli", antonim: "Awam, amatir" },
  { kata: "Aktual", antonim: "Kedaluwarsa" },
  { kata: "Anak", antonim: "Ibu" },
  { kata: "Anomali", antonim: "Normal" },
  { kata: "Antagonis", antonim: "Protagonis" },
  { kata: "Antipati", antonim: "Simpati" },
  { kata: "Apatis", antonim: "Antusiasme, acuh" },
  { kata: "Apriori", antonim: "Aposteriori" },
  { kata: "Baka", antonim: "Fana" },
  { kata: "Besar", antonim: "Kecil" },
  { kata: "Bukit", antonim: "Lembah, ngarai" },
  { kata: "Canggih", antonim: "Sederhana" },
  { kata: "Cucu", antonim: "Kakek" },
  { kata: "Debit", antonim: "Kredit" },
  { kata: "Deduksi", antonim: "Induksi" },
  { kata: "Delusi (khayal)", antonim: "Nyata" },
  { kata: "Dependen", antonim: "Mandiri" },
  { kata: "Dinamis", antonim: "Statis" },
  { kata: "Eksekutif", antonim: "Legislatif" },
  { kata: "Eksplisit", antonim: "Implisit" },
  { kata: "Elastis", antonim: "Kaku" },
  { kata: "Emigrasi", antonim: "Imigrasi" },
  { kata: "Epilog", antonim: "Prolog" },
  { kata: "Fiksi", antonim: "Realita" },
  { kata: "Fisik", antonim: "Mental" },
  { kata: "Fonem", antonim: "Morfem" },
  { kata: "Galib", antonim: "Khusus" },
  { kata: "Ganjil (gasal)", antonim: "Genap" },
  { kata: "Gegai", antonim: "Kuat, kokoh" },
  { kata: "Gelap", antonim: "Terang" },
  { kata: "Hadir", antonim: "Absen" },
  { kata: "Homogen", antonim: "Heterogen" },
  { kata: "Horizontal", antonim: "Vertikal" },
  { kata: "Induksi", antonim: "Deduksi" },
  { kata: "Inflasi", antonim: "Deflasi" },
  { kata: "Inklusif", antonim: "Kecuali" },
  { kata: "Input", antonim: "Output" },
  { kata: "Insidental", antonim: "Rutin" },
  { kata: "Internal", antonim: "Eksternal" },
  { kata: "Intro", antonim: "Penutup" },
  { kata: "Isolator (penghambat)", antonim: "Konduktor (penghantar)" },
  { kata: "Jauh", antonim: "Dekat" },
  { kata: "Khas", antonim: "Umum" },
  { kata: "Kohesi", antonim: "Adhesi" },
  { kata: "Konsonan", antonim: "Vokal" },
  {
    kata: "Konstruktif (membangun, memperbaiki)",
    antonim: "Destruktif (merusak)",
  },
  { kata: "Konveks (cembung)", antonim: "Konkaf (cekung)" },
  { kata: "Laba (untung, profit)", antonim: "Rugi" },
  { kata: "Legal", antonim: "Ilegal" },
  { kata: "Maya", antonim: "Nyata" },
  { kata: "Mayor", antonim: "Minor" },
  { kata: "Modern", antonim: "Tradisional" },
  { kata: "Monoton", antonim: "Berubah-ubah" },
  { kata: "Netral", antonim: "Berpihak" },
  { kata: "Nomaden", antonim: "Menetap" },
  { kata: "Objektif", antonim: "Subjektif" },
  { kata: "Ofensif (serangan)", antonim: "Defensif (pertahanan)" },
  { kata: "Optimis", antonim: "Pesimis" },
  { kata: "Ortodoks", antonim: "Modern" },
  { kata: "Pandir", antonim: "Pintar" },
  { kata: "Panjang", antonim: "Pendek" },
  { kata: "Perintis", antonim: "Pewaris" },
  { kata: "Plural", antonim: "Tunggal" },
  { kata: "Poligami", antonim: "Monogami" },
  { kata: "Pra (sebelum)", antonim: "Pasca (sesudah)" },
  { kata: "Prefiks (awalan)", antonim: "Sufiks (akhiran)" },
  { kata: "Presensi (kehadiran)", antonim: "Absen, mangkir" },
  { kata: "Progresif", antonim: "Regresif" },
  { kata: "Proletar", antonim: "Kapitalis" },
  { kata: "Prominen", antonim: "Biasa" },
  { kata: "Rawan", antonim: "Aman" },
  { kata: "Remisi", antonim: "Penambahan" },
  { kata: "Sederhana", antonim: "Canggih" },
  { kata: "Sekuler", antonim: "Keagamaan" },
  { kata: "Skeptis", antonim: "Yakin" },
  { kata: "Sporadis", antonim: "Sering" },
  { kata: "Sportif", antonim: "Curang" },
  { kata: "Stagnan", antonim: "Berubah" },
  { kata: "Tanya", antonim: "Jawab" },
  { kata: "Tesis", antonim: "Antitesis" },
  { kata: "Tinggi", antonim: "Rendah" },
  { kata: "Tua", antonim: "Muda" },
  { kata: "Umum", antonim: "Khusus (khas)" },
  { kata: "Universal", antonim: "Parsial" },
  { kata: "Vademekum", antonim: "Kamus besar" },
  { kata: "Virulen", antonim: "Baik" },
  { kata: "Waruga (tubuh)", antonim: "Jiwa" },
  { kata: "Wreda (tua)", antonim: "Muda" },
];

export const SoalAntonim = (jumlahSoal) => {
  if (jumlahSoal > ListSoalAntonim.length) {
    throw new Error("Jumlah soal melebihi jumlah data yang tersedia.");
  }
  if (jumlahSoal <= 0) {
    throw new Error("Jumlah soal harus lebih dari 0.");
  }

  let selectedIndexes = getShuffledIndexes(ListSoalAntonim.length)
    .slice(0, jumlahSoal)
    .sort((a, b) => a - b); // Mengurutkan indeks yang terpilih
  let indexSelectedIndexes = 0;

  let ListSoalFinal = ListSoalAntonim.map((item, index) => {
    if (selectedIndexes[indexSelectedIndexes] != index) return null; // Hanya ambil soal yang terpilih
    let arrayShuffleOpptions = getShuffledIndexes(ListSoalAntonim.length)
      .slice(0, 3)
      .map((i) => {
        if (i === index || i >= ListSoalAntonim.length) return null; // Hindari soal yang sama
        if (ListSoalAntonim[i].antonim) {
          const sinonim = ListSoalAntonim[i].antonim.split(", ")[0];
          if (sinonim === item.antonim.split(", ")[0]) return null; // Hindari sinonim yang sama
          return sinonim;
        }
        return ListSoalAntonim[i].antonim;
      });

    arrayShuffleOpptions.push(item.antonim.split(", ")[0]); // Tambahkan sinonim yang benar
    arrayShuffleOpptions = arrayShuffleOpptions.filter(Boolean); // Hapus nilai null
    arrayShuffleOpptions = arrayShuffleOpptions.sort(() => Math.random() - 0.5); // Acak urutan pilihan jawaban
    arrayShuffleOpptions = [...new Set(arrayShuffleOpptions)]; // Hapus duplikat
    arrayShuffleOpptions = arrayShuffleOpptions.slice(0, 4); // Ambil 4 pilihan jawaban
    if (arrayShuffleOpptions.length < 4) {
      const additionalOptions = ListSoalAntonim.filter(
        (_, i) =>
          i !== index &&
          !arrayShuffleOpptions.includes(
            ListSoalAntonim[i].antonim.split(", ")[0]
          )
      )
        .map((item) => item.antonim.split(", ")[0])
        .slice(0, 4 - arrayShuffleOpptions.length);
      arrayShuffleOpptions = [...arrayShuffleOpptions, ...additionalOptions];
    }

    indexSelectedIndexes++; // Increment indexSelectedIndexes for the next iteration

    return {
      id: index + 1,
      question: `Apa sinonim dari kata "${item.kata}"?`,
      options: arrayShuffleOpptions,
      correctAnswer: item.antonim.split(", ")[0],
    };
  });

  ListSoalFinal = ListSoalFinal.filter(Boolean).sort(() => Math.random() - 0.5);

  return ListSoalFinal.filter(Boolean); // Hapus nilai null dari soal yang tidak terpilih
};
