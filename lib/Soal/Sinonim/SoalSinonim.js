import { getShuffledIndexes } from "@/lib/utils";

export const ListSoalSinonim = [
  { Kata: "Abolisi", "Sinonim/Definisi": "Penghapusan" },
  { Kata: "Abrasi", "Sinonim/Definisi": "Pengikisan" },
  { Kata: "Absen", "Sinonim/Definisi": "Bolos" },
  { Kata: "Absolut", "Sinonim/Definisi": "Mutlak" },
  { Kata: "Absorpsi", "Sinonim/Definisi": "Penyerapan" },
  { Kata: "Adagium", "Sinonim/Definisi": "Pepatah, peribahasa" },
  { Kata: "Adaptasi", "Sinonim/Definisi": "Penyesuaian" },
  { Kata: "Adiktif", "Sinonim/Definisi": "Bersifat candu" },
  { Kata: "Ad interim", "Sinonim/Definisi": "Sementara" },
  { Kata: "Afeksi", "Sinonim/Definisi": "Kasih sayang" },
  { Kata: "Afirmasi", "Sinonim/Definisi": "Penegasan, peneguhan" },
  { Kata: "Agitasi", "Sinonim/Definisi": "Hasutan, provokasi" },
  { Kata: "Agresi", "Sinonim/Definisi": "Serangan" },
  { Kata: "Agunan", "Sinonim/Definisi": "Jaminan" },
  { Kata: "Akreditasi", "Sinonim/Definisi": "Pengakuan" },
  { Kata: "Amatir", "Sinonim/Definisi": "Pemula" },
  { Kata: "Ambigu", "Sinonim/Definisi": "Makna ganda, enigma" },
  { Kata: "Anemia", "Sinonim/Definisi": "Kurang darah" },
  { Kata: "Anjung", "Sinonim/Definisi": "Panggung" },
  { Kata: "Anomali", "Sinonim/Definisi": "Tidak normal, menyimpang" },
  { Kata: "Anonim", "Sinonim/Definisi": "Tanpa nama" },
  { Kata: "Anulir", "Sinonim/Definisi": "Penghapusan, pembatalan" },
  { Kata: "Apatis", "Sinonim/Definisi": "Acuh tak acuh, masa bodoh" },
  { Kata: "Aristokrat", "Sinonim/Definisi": "Bangsawan, ningrat" },
  { Kata: "Artifisial", "Sinonim/Definisi": "Buatan" },
  { Kata: "Asa", "Sinonim/Definisi": "Harapan" },
  { Kata: "Autentik", "Sinonim/Definisi": "Asli, sah, tulen" },
  { Kata: "Bagak", "Sinonim/Definisi": "Berani, bangga" },
  { Kata: "Baku", "Sinonim/Definisi": "Pokok, utama, standar" },
  { Kata: "Benchmark", "Sinonim/Definisi": "Patokan, tolok ukur" },
  { Kata: "Bergeming", "Sinonim/Definisi": "Diam" },
  { Kata: "Bibliografi", "Sinonim/Definisi": "Daftar Pustaka" },
  { Kata: "Bonanza", "Sinonim/Definisi": "Sumber kebahagiaan (kemakmuran)" },
  { Kata: "Bramacorah", "Sinonim/Definisi": "Residivis" },
  { Kata: "Centeng", "Sinonim/Definisi": "Penjaga, bodyguard" },
  { Kata: "Citra", "Sinonim/Definisi": "Gambaran" },
  { Kata: "Collapse", "Sinonim/Definisi": "Bangkrut, pailit" },
  { Kata: "Daur", "Sinonim/Definisi": "Siklus" },
  { Kata: "Dedikasi", "Sinonim/Definisi": "Pengabdian" },
  { Kata: "De facto", "Sinonim/Definisi": "Menurut kenyataan" },
  { Kata: "Defleksi", "Sinonim/Definisi": "Penyimpangan" },
  { Kata: "Degradasi", "Sinonim/Definisi": "Kemerosotan" },
  { Kata: "Dekade", "Sinonim/Definisi": "Dasawarsa" },
  { Kata: "Dekadensi", "Sinonim/Definisi": "Kemerosotan (moral, akhlak)" },
  { Kata: "Delik", "Sinonim/Definisi": "Tindak pidana" },
  { Kata: "Delusi", "Sinonim/Definisi": "Khayal, ilusi" },
  { Kata: "Dependen", "Sinonim/Definisi": "Tergantung" },
  { Kata: "Dikotomi", "Sinonim/Definisi": "Dibagi dua" },
  { Kata: "Dinamis", "Sinonim/Definisi": "Bergerak" },
  { Kata: "Dispensasi", "Sinonim/Definisi": "Pengecualian" },
  { Kata: "Divestasi", "Sinonim/Definisi": "Pelepasan" },
  { Kata: "Doktrin", "Sinonim/Definisi": "Ajaran, dogma" },
  { Kata: "Egaliter", "Sinonim/Definisi": "Sama, sederajat" },
  { Kata: "Eklips", "Sinonim/Definisi": "Gerhana" },
  { Kata: "Ekskavasi", "Sinonim/Definisi": "Penggalian" },
  { Kata: "Eksodus", "Sinonim/Definisi": "Hijrah, pindah" },
  { Kata: "Ekspansi", "Sinonim/Definisi": "Perluasan" },
  { Kata: "Ekuilibrium", "Sinonim/Definisi": "Setimbang, sepadan" },
  { Kata: "Ekuivalen", "Sinonim/Definisi": "Sama, sebanding" },
  { Kata: "Elusif", "Sinonim/Definisi": "Kompleks" },
  { Kata: "Embargo", "Sinonim/Definisi": "Inhibisi, larangan" },
  { Kata: "Embarkasi", "Sinonim/Definisi": "Keberangkatan" },
  { Kata: "Endemi", "Sinonim/Definisi": "Wabah" },
  { Kata: "Epilog", "Sinonim/Definisi": "Penutup" },
  { Kata: "Epidemi", "Sinonim/Definisi": "Wabah" },
  { Kata: "Era", "Sinonim/Definisi": "Zaman, masa" },
  { Kata: "Evaporasi", "Sinonim/Definisi": "Penguapan" },
  { Kata: "Evokasi", "Sinonim/Definisi": "Penggugah rasa" },
  { Kata: "Evolusi", "Sinonim/Definisi": "Perubahan" },
  { Kata: "Faksi", "Sinonim/Definisi": "Golongan, kelompok" },
  { Kata: "Fauna", "Sinonim/Definisi": "Dunia hewan" },
  { Kata: "Fenomena", "Sinonim/Definisi": "Gejala" },
  { Kata: "Fertil", "Sinonim/Definisi": "Subur" },
  { Kata: "Fiksi", "Sinonim/Definisi": "Khayalan, delusi" },
  { Kata: "Fiskal", "Sinonim/Definisi": "Perpajakan" },
  { Kata: "Flegmatis", "Sinonim/Definisi": "Serbalamban" },
  { Kata: "Flora", "Sinonim/Definisi": "Dunia tumbuhan" },
  { Kata: "Friksi", "Sinonim/Definisi": "Perselisihan, perpecahan, bentrokan" },
  { Kata: "Fungi", "Sinonim/Definisi": "Cendawan, jamur" },
  { Kata: "Fusi", "Sinonim/Definisi": "Gabungan" },
  { Kata: "Futuristis", "Sinonim/Definisi": "Menuju masa depan" },
  { Kata: "Galat", "Sinonim/Definisi": "Cacat" },
  { Kata: "Generik", "Sinonim/Definisi": "Umum, lazim" },
  { Kata: "Glosarium", "Sinonim/Definisi": "Kamus ringkas" },
  { Kata: "Grasi", "Sinonim/Definisi": "Pengampunan" },
  { Kata: "Hayati", "Sinonim/Definisi": "Hidup" },
  { Kata: "Heksagon", "Sinonim/Definisi": "Segi enam" },
  { Kata: "Herbivora", "Sinonim/Definisi": "Pemakan tumbuhan" },
  { Kata: "Hibrida", "Sinonim/Definisi": "Bibit unggul" },
  { Kata: "Hipotenusa", "Sinonim/Definisi": "Sisi miring" },
  { Kata: "Hipotesis", "Sinonim/Definisi": "Dugaan awal, anggapan dasar" },
  { Kata: "Homogen", "Sinonim/Definisi": "Sejenis" },
  { Kata: "Ikebana", "Sinonim/Definisi": "Seni merangkai bunga" },
  { Kata: "Ikhtisar", "Sinonim/Definisi": "Sinopsis, ringkasan" },
  { Kata: "Imbas", "Sinonim/Definisi": "Efek, dampak" },
  { Kata: "Imitasi", "Sinonim/Definisi": "Tiruan" },
  { Kata: "Implisit", "Sinonim/Definisi": "Tersirat" },
  { Kata: "Impuls", "Sinonim/Definisi": "Dorongan" },
  { Kata: "Imun", "Sinonim/Definisi": "Kebal" },
];

export const SoalSinonim = (jumlahSoal) => {
  if (jumlahSoal > ListSoalSinonim.length) {
    throw new Error("Jumlah soal melebihi jumlah data yang tersedia.");
  }
  if (jumlahSoal <= 0) {
    throw new Error("Jumlah soal harus lebih dari 0.");
  }

  let selectedIndexes = getShuffledIndexes(ListSoalSinonim.length)
    .slice(0, jumlahSoal)
    .sort((a, b) => a - b); // Mengurutkan indeks yang terpilih
  let indexSelectedIndexes = 0;

  let ListSoalFinal = ListSoalSinonim.map((item, index) => {
    if (selectedIndexes[indexSelectedIndexes] != index) return null; // Hanya ambil soal yang terpilih
    let arrayShuffleOpptions = getShuffledIndexes(ListSoalSinonim.length)
      .slice(0, 3)
      .map((i) => {
        if (i === index || i >= ListSoalSinonim.length) return null; // Hindari soal yang sama
        if (ListSoalSinonim[i]["Sinonim/Definisi"]) {
          const sinonim = ListSoalSinonim[i]["Sinonim/Definisi"].split(", ")[0];
          if (sinonim === item["Sinonim/Definisi"].split(", ")[0]) return null; // Hindari sinonim yang sama
          return sinonim;
        }
        return ListSoalSinonim[i]["Sinonim/Definisi"];
      });

    arrayShuffleOpptions.push(item["Sinonim/Definisi"].split(", ")[0]); // Tambahkan sinonim yang benar
    arrayShuffleOpptions = arrayShuffleOpptions.filter(Boolean); // Hapus nilai null
    arrayShuffleOpptions = arrayShuffleOpptions.sort(() => Math.random() - 0.5); // Acak urutan pilihan jawaban
    arrayShuffleOpptions = [...new Set(arrayShuffleOpptions)]; // Hapus duplikat
    arrayShuffleOpptions = arrayShuffleOpptions.slice(0, 4); // Ambil 4 pilihan jawaban
    if (arrayShuffleOpptions.length < 4) {
      const additionalOptions = ListSoalSinonim.filter(
        (_, i) =>
          i !== index &&
          !arrayShuffleOpptions.includes(
            ListSoalSinonim[i]["Sinonim/Definisi"].split(", ")[0]
          )
      )
        .map((item) => item["Sinonim/Definisi"].split(", ")[0])
        .slice(0, 4 - arrayShuffleOpptions.length);
      arrayShuffleOpptions = [...arrayShuffleOpptions, ...additionalOptions];
    }

    indexSelectedIndexes++; // Increment indexSelectedIndexes for the next iteration

    return {
      id: index + 1,
      question: `Apa sinonim dari kata "${item.Kata}"?`,
      options: arrayShuffleOpptions,
      correctAnswer: item["Sinonim/Definisi"].split(", ")[0],
    };
  });

  ListSoalFinal = ListSoalFinal.filter(Boolean).sort(() => Math.random() - 0.5);

  return ListSoalFinal.filter(Boolean); // Hapus nilai null dari soal yang tidak terpilih
};
