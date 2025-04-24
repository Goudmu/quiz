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
