import { getShuffledIndexes } from "../../utils";

const listSoalVerbBahasaInggris = [
  { verb: "acquire", arti: "memperoleh" },
  { verb: "advocate", arti: "menganjurkan" },
  { verb: "allocate", arti: "mengalokasikan" },
  { verb: "analyze", arti: "menganalisis" },
  { verb: "articulate", arti: "mengungkapkan dengan jelas" },
  { verb: "ascertain", arti: "memastikan" },
  { verb: "assemble", arti: "merakit" },
  { verb: "assign", arti: "menugaskan" },
  { verb: "attain", arti: "mencapai" },
  { verb: "augment", arti: "meningkatkan" },
  { verb: "authenticate", arti: "mengautentikasi" },
  { verb: "bolster", arti: "memperkuat" },
  { verb: "compile", arti: "mengumpulkan" },
  { verb: "conceive", arti: "mengandung gagasan" },
  { verb: "condone", arti: "membiarkan" },
  { verb: "confer", arti: "berunding" },
  { verb: "contemplate", arti: "merenungkan" },
  { verb: "convey", arti: "menyampaikan" },
  { verb: "corroborate", arti: "menguatkan" },
  { verb: "curate", arti: "mengkurasi" },
  { verb: "debunk", arti: "membongkar mitos" },
  { verb: "deduce", arti: "menyimpulkan" },
  { verb: "delegate", arti: "mendelegasikan" },
  { verb: "depict", arti: "menggambarkan" },
  { verb: "derive", arti: "menurunkan" },
  { verb: "designate", arti: "menunjuk" },
  { verb: "deter", arti: "menghalangi" },
  { verb: "diagnose", arti: "mendiagnosis" },
  { verb: "differentiate", arti: "membedakan" },
  { verb: "disclose", arti: "mengungkapkan" },
  { verb: "disseminate", arti: "menyebarluaskan" },
  { verb: "emphasize", arti: "menekankan" },
  { verb: "encompass", arti: "mencakup" },
  { verb: "endorse", arti: "mendukung" },
  { verb: "enrich", arti: "memperkaya" },
  { verb: "enumerate", arti: "merinci" },
  { verb: "escalate", arti: "meningkatkan" },
  { verb: "establish", arti: "mendirikan" },
  { verb: "evaluate", arti: "menilai" },
  { verb: "exemplify", arti: "mencontohkan" },
  { verb: "expedite", arti: "mempercepat" },
  { verb: "facilitate", arti: "memfasilitasi" },
  { verb: "formulate", arti: "merumuskan" },
  { verb: "foster", arti: "memelihara" },
  { verb: "gauge", arti: "mengukur" },
  { verb: "generate", arti: "menghasilkan" },
  { verb: "hypothesize", arti: "menghipotesiskan" },
  { verb: "illustrate", arti: "mengilustrasikan" },
  { verb: "implement", arti: "melaksanakan" },
  { verb: "incorporate", arti: "menggabungkan" },
  { verb: "induce", arti: "menyebabkan" },
  { verb: "inhibit", arti: "menghambat" },
  { verb: "initiate", arti: "memulai" },
  { verb: "innovate", arti: "berinovasi" },
  { verb: "inquire", arti: "menanyakan" },
  { verb: "integrate", arti: "mengintegrasikan" },
  { verb: "interpret", arti: "menafsirkan" },
  { verb: "intervene", arti: "campur tangan" },
  { verb: "justify", arti: "membenarkan" },
  { verb: "mediate", arti: "menengahi" },
  { verb: "modulate", arti: "mengatur" },
  { verb: "monitor", arti: "memantau" },
  { verb: "motivate", arti: "memotivasi" },
  { verb: "navigate", arti: "menavigasi" },
  { verb: "negotiate", arti: "bernegosiasi" },
  { verb: "optimize", arti: "mengoptimalkan" },
  { verb: "orchestrate", arti: "mengatur" },
  { verb: "outline", arti: "menguraikan" },
  { verb: "oversee", arti: "mengawasi" },
  { verb: "perceive", arti: "memahami" },
  { verb: "pertain", arti: "berhubungan" },
  { verb: "pioneer", arti: "merintis" },
  { verb: "predict", arti: "memprediksi" },
  { verb: "presume", arti: "mengira" },
  { verb: "prioritize", arti: "memprioritaskan" },
  { verb: "proliferate", arti: "berkembang pesat" },
  { verb: "propose", arti: "mengusulkan" },
  { verb: "rationalize", arti: "merasionalkan" },
  { verb: "reconcile", arti: "mendamaikan" },
  { verb: "refine", arti: "memurnikan" },
  { verb: "reinforce", arti: "memperkuat" },
  { verb: "reiterate", arti: "mengulangi" },
  { verb: "scrutinize", arti: "meneliti dengan cermat" },
  { verb: "specify", arti: "menentukan" },
  { verb: "streamline", arti: "merampingkan" },
  { verb: "substantiate", arti: "membuktikan" },
  { verb: "synthesize", arti: "mensintesis" },
  { verb: "transcend", arti: "melampaui" },
  { verb: "validate", arti: "memvalidasi" },
  { verb: "verify", arti: "memverifikasi" },
  { verb: "visualize", arti: "membayangkan" },
  { verb: "withstand", arti: "bertahan terhadap" },
];

export const SoalVerbBahasaInggris = (jumlahSoal) => {
  if (jumlahSoal > listSoalVerbBahasaInggris.length) {
    throw new Error("Jumlah soal melebihi jumlah data yang tersedia.");
  }
  if (jumlahSoal <= 0) {
    throw new Error("Jumlah soal harus lebih dari 0.");
  }

  let selectedIndexes = getShuffledIndexes(listSoalVerbBahasaInggris.length)
    .slice(0, jumlahSoal)
    .sort((a, b) => a - b); // Mengurutkan indeks yang terpilih
  let indexSelectedIndexes = 0;

  let ListSoalFinal = listSoalVerbBahasaInggris.map((item, index) => {
    if (selectedIndexes[indexSelectedIndexes] != index) return null; // Hanya ambil soal yang terpilih
    let arrayShuffleOpptions = getShuffledIndexes(
      listSoalVerbBahasaInggris.length
    )
      .slice(0, 3)
      .map((i) => {
        if (i === index || i >= listSoalVerbBahasaInggris.length) return null; // Hindari soal yang sama
        if (listSoalVerbBahasaInggris[i].arti) {
          const sinonim = listSoalVerbBahasaInggris[i].arti.split(", ")[0];
          if (sinonim === item.arti.split(", ")[0]) return null; // Hindari sinonim yang sama
          return sinonim;
        }
        return listSoalVerbBahasaInggris[i].arti;
      });

    arrayShuffleOpptions.push(item.arti.split(", ")[0]); // Tambahkan sinonim yang benar
    arrayShuffleOpptions = arrayShuffleOpptions.filter(Boolean); // Hapus nilai null
    arrayShuffleOpptions = arrayShuffleOpptions.sort(() => Math.random() - 0.5); // Acak urutan pilihan jawaban
    arrayShuffleOpptions = [...new Set(arrayShuffleOpptions)]; // Hapus duplikat
    arrayShuffleOpptions = arrayShuffleOpptions.slice(0, 4); // Ambil 4 pilihan jawaban
    if (arrayShuffleOpptions.length < 4) {
      const additionalOptions = listSoalVerbBahasaInggris
        .filter(
          (_, i) =>
            i !== index &&
            !arrayShuffleOpptions.includes(
              listSoalVerbBahasaInggris[i].arti.split(", ")[0]
            )
        )
        .map((item) => item.arti.split(", ")[0])
        .slice(0, 4 - arrayShuffleOpptions.length);
      arrayShuffleOpptions = [...arrayShuffleOpptions, ...additionalOptions];
    }

    indexSelectedIndexes++; // Increment indexSelectedIndexes for the next iteration

    return {
      id: index + 1,
      question: `Apa arti dari kata "${item.verb}"?`,
      options: arrayShuffleOpptions,
      correctAnswer: item.arti.split(", ")[0],
    };
  });

  ListSoalFinal = ListSoalFinal.filter(Boolean).sort(() => Math.random() - 0.5);

  return ListSoalFinal.filter(Boolean); // Hapus nilai null dari soal yang tidak terpilih
};
