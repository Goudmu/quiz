import { getShuffledIndexes } from "../../utils";

const listSoalAdjBahasaInggris = [
  { adjective: "abrupt", arti: "mendadak" },
  { adjective: "accessible", arti: "dapat diakses" },
  { adjective: "adamant", arti: "keras kepala" },
  { adjective: "adequate", arti: "memadai" },
  { adjective: "adverse", arti: "merugikan" },
  { adjective: "aesthetic", arti: "estetis" },
  { adjective: "agile", arti: "gesit" },
  { adjective: "ambiguous", arti: "ambigu" },
  { adjective: "amiable", arti: "ramah" },
  { adjective: "ample", arti: "berlimpah" },
  { adjective: "arbitrary", arti: "sewenang-wenang" },
  { adjective: "arduous", arti: "sulit" },
  { adjective: "articulate", arti: "fasih" },
  { adjective: "assertive", arti: "tegas" },
  { adjective: "astute", arti: "cerdas" },
  { adjective: "authentic", arti: "asli" },
  { adjective: "autonomous", arti: "mandiri" },
  { adjective: "benevolent", arti: "baik hati" },
  { adjective: "biased", arti: "berpihak" },
  { adjective: "blatant", arti: "terang-terangan" },
  { adjective: "boisterous", arti: "ribut" },
  { adjective: "brisk", arti: "cepat" },
  { adjective: "candid", arti: "terus terang" },
  { adjective: "capricious", arti: "berubah-ubah" },
  { adjective: "cautious", arti: "berhati-hati" },
  { adjective: "coherent", arti: "koheren" },
  { adjective: "comprehensive", arti: "lengkap" },
  { adjective: "concise", arti: "singkat" },
  { adjective: "concurrent", arti: "bersamaan" },
  { adjective: "conscientious", arti: "teliti" },
  { adjective: "conspicuous", arti: "menonjol" },
  { adjective: "contemporary", arti: "kontemporer" },
  { adjective: "contentious", arti: "kontroversial" },
  { adjective: "credible", arti: "dapat dipercaya" },
  { adjective: "cumbersome", arti: "rumit" },
  { adjective: "cynical", arti: "sinis" },
  { adjective: "daunting", arti: "menakutkan" },
  { adjective: "decisive", arti: "tegas" },
  { adjective: "dedicated", arti: "berdedikasi" },
  { adjective: "defiant", arti: "menentang" },
  { adjective: "deliberate", arti: "disengaja" },
  { adjective: "detrimental", arti: "merugikan" },
  { adjective: "dexterous", arti: "cekatan" },
  { adjective: "diligent", arti: "rajin" },
  { adjective: "discreet", arti: "bijaksana" },
  { adjective: "distinct", arti: "berbeda" },
  { adjective: "diverse", arti: "beragam" },
  { adjective: "dubious", arti: "meragukan" },
  { adjective: "durable", arti: "tahan lama" },
  { adjective: "dynamic", arti: "dinamis" },
  { adjective: "elaborate", arti: "rumit" },
  { adjective: "eloquent", arti: "fasih" },
  { adjective: "eminent", arti: "terkemuka" },
  { adjective: "empathetic", arti: "penuh empati" },
  { adjective: "enlightened", arti: "tercerahkan" },
  { adjective: "enticing", arti: "menggoda" },
  { adjective: "equitable", arti: "adil" },
  { adjective: "erratic", arti: "tak menentu" },
  { adjective: "essential", arti: "esensial" },
  { adjective: "ethical", arti: "etis" },
  { adjective: "exemplary", arti: "teladan" },
  { adjective: "exhaustive", arti: "menyeluruh" },
  { adjective: "exorbitant", arti: "berlebihan" },
  { adjective: "explicit", arti: "jelas" },
  { adjective: "exquisite", arti: "indah" },
  { adjective: "extensive", arti: "luas" },
  { adjective: "feasible", arti: "masuk akal" },
  { adjective: "fertile", arti: "subur" },
  { adjective: "flamboyant", arti: "mencolok" },
  { adjective: "flexible", arti: "fleksibel" },
  { adjective: "formidable", arti: "hebat" },
  { adjective: "frivolous", arti: "remeh" },
  { adjective: "frugal", arti: "hemat" },
  { adjective: "fundamental", arti: "mendasar" },
  { adjective: "gregarious", arti: "suka bergaul" },
  { adjective: "hostile", arti: "bersifat bermusuhan" },
  { adjective: "hypothetical", arti: "hipotetis" },
  { adjective: "illicit", arti: "ilegal" },
  { adjective: "impartial", arti: "netral" },
  { adjective: "impeccable", arti: "sempurna" },
  { adjective: "implicit", arti: "tersirat" },
  { adjective: "inadvertent", arti: "tak disengaja" },
  { adjective: "incessant", arti: "tak henti-henti" },
  { adjective: "incompatible", arti: "tidak cocok" },
  { adjective: "incredible", arti: "luar biasa" },
  { adjective: "indispensable", arti: "tak tergantikan" },
  { adjective: "inevitable", arti: "tak terelakkan" },
  { adjective: "ingenious", arti: "cerdas" },
  { adjective: "innate", arti: "bawaan" },
  { adjective: "innocuous", arti: "tidak berbahaya" },
  { adjective: "innovative", arti: "inovatif" },
  { adjective: "insatiable", arti: "tak pernah puas" },
  { adjective: "insightful", arti: "penuh wawasan" },
  { adjective: "integral", arti: "bagian penting" },
  { adjective: "intuitive", arti: "intuitif" },
  { adjective: "invaluable", arti: "sangat berharga" },
  { adjective: "invincible", arti: "tak terkalahkan" },
  { adjective: "jubilant", arti: "sangat gembira" },
  { adjective: "keen", arti: "tajam" },
  { adjective: "lenient", arti: "toleran" },
  { adjective: "lucrative", arti: "menguntungkan" },
  { adjective: "magnanimous", arti: "pemaaf" },
  { adjective: "malicious", arti: "jahat" },
  { adjective: "meticulous", arti: "sangat teliti" },
  { adjective: "mundane", arti: "biasa" },
  { adjective: "negligible", arti: "sangat kecil" },
  { adjective: "nonchalant", arti: "cuek" },
  { adjective: "novel", arti: "baru" },
  { adjective: "obsolete", arti: "usang" },
  { adjective: "opulent", arti: "mewah" },
  { adjective: "ornate", arti: "rumit" },
  { adjective: "outlandish", arti: "aneh" },
  { adjective: "outstanding", arti: "luar biasa" },
  { adjective: "palpable", arti: "terasa" },
  { adjective: "paramount", arti: "terpenting" },
  { adjective: "perilous", arti: "berbahaya" },
  { adjective: "pervasive", arti: "meluas" },
  { adjective: "plausible", arti: "masuk akal" },
  { adjective: "poignant", arti: "mengharukan" },
  { adjective: "potent", arti: "kuat" },
  { adjective: "pragmatic", arti: "praktis" },
  { adjective: "precarious", arti: "tidak stabil" },
  { adjective: "proficient", arti: "mahiran" },
  { adjective: "profound", arti: "mendalam" },
  { adjective: "prominent", arti: "terkemuka" },
  { adjective: "prone", arti: "rentan" },
  { adjective: "provocative", arti: "provokatif" },
  { adjective: "prudent", arti: "bijaksana" },
  { adjective: "punctual", arti: "tepat waktu" },
  { adjective: "redundant", arti: "berlebihan" },
  { adjective: "relevant", arti: "relevan" },
  { adjective: "resilient", arti: "tangguh" },
  { adjective: "robust", arti: "kuat" },
  { adjective: "rudimentary", arti: "dasar" },
  { adjective: "salient", arti: "mencolok" },
  { adjective: "savage", arti: "buas" },
  { adjective: "scarce", arti: "langka" },
  { adjective: "scrupulous", arti: "sangat berhati-hati" },
  { adjective: "sedentary", arti: "banyak duduk" },
  { adjective: "skeptical", arti: "skeptis" },
  { adjective: "sluggish", arti: "lambat" },
  { adjective: "sophisticated", arti: "canggih" },
  { adjective: "sporadic", arti: "sporadis" },
  { adjective: "spurious", arti: "palsu" },
  { adjective: "staunch", arti: "setia" },
  { adjective: "stringent", arti: "ketat" },
  { adjective: "subdued", arti: "lembut" },
  { adjective: "substantial", arti: "besar" },
  { adjective: "succinct", arti: "singkat" },
  { adjective: "superficial", arti: "dangkal" },
  { adjective: "surreptitious", arti: "diam-diam" },
  { adjective: "sustainable", arti: "berkelanjutan" },
  { adjective: "tedious", arti: "membosankan" },
  { adjective: "tentative", arti: "sementara" },
  { adjective: "thorough", arti: "menyeluruh" },
  { adjective: "transient", arti: "sementara" },
  { adjective: "transparent", arti: "transparan" },
  { adjective: "treacherous", arti: "berbahaya" },
  { adjective: "ubiquitous", arti: "ada di mana-mana" },
  { adjective: "ultimate", arti: "terakhir" },
  { adjective: "unanimous", arti: "bulat suara" },
  { adjective: "unprecedented", arti: "belum pernah terjadi" },
  { adjective: "versatile", arti: "serbaguna" },
  { adjective: "vigilant", arti: "waspada" },
  { adjective: "vigorous", arti: "kuat" },
  { adjective: "volatile", arti: "mudah berubah" },
  { adjective: "vulnerable", arti: "rentan" },
  { adjective: "wary", arti: "berhati-hati" },
  { adjective: "whimsical", arti: "aneh" },
  { adjective: "zealous", arti: "sangat bersemangat" },
];

export const SoalAdjBahasaInggris = (jumlahSoal) => {
  if (jumlahSoal > listSoalAdjBahasaInggris.length) {
    throw new Error("Jumlah soal melebihi jumlah data yang tersedia.");
  }
  if (jumlahSoal <= 0) {
    throw new Error("Jumlah soal harus lebih dari 0.");
  }

  let selectedIndexes = getShuffledIndexes(listSoalAdjBahasaInggris.length)
    .slice(0, jumlahSoal)
    .sort((a, b) => a - b); // Mengurutkan indeks yang terpilih
  let indexSelectedIndexes = 0;

  let ListSoalFinal = listSoalAdjBahasaInggris.map((item, index) => {
    if (selectedIndexes[indexSelectedIndexes] != index) return null; // Hanya ambil soal yang terpilih
    let arrayShuffleOpptions = getShuffledIndexes(
      listSoalAdjBahasaInggris.length
    )
      .slice(0, 3)
      .map((i) => {
        if (i === index || i >= listSoalAdjBahasaInggris.length) return null; // Hindari soal yang sama
        if (listSoalAdjBahasaInggris[i].arti) {
          const sinonim = listSoalAdjBahasaInggris[i].arti.split(", ")[0];
          if (sinonim === item.arti.split(", ")[0]) return null; // Hindari sinonim yang sama
          return sinonim;
        }
        return listSoalAdjBahasaInggris[i].arti;
      });

    arrayShuffleOpptions.push(item.arti.split(", ")[0]); // Tambahkan sinonim yang benar
    arrayShuffleOpptions = arrayShuffleOpptions.filter(Boolean); // Hapus nilai null
    arrayShuffleOpptions = arrayShuffleOpptions.sort(() => Math.random() - 0.5); // Acak urutan pilihan jawaban
    arrayShuffleOpptions = [...new Set(arrayShuffleOpptions)]; // Hapus duplikat
    arrayShuffleOpptions = arrayShuffleOpptions.slice(0, 4); // Ambil 4 pilihan jawaban
    if (arrayShuffleOpptions.length < 4) {
      const additionalOptions = listSoalAdjBahasaInggris
        .filter(
          (_, i) =>
            i !== index &&
            !arrayShuffleOpptions.includes(
              listSoalAdjBahasaInggris[i].arti.split(", ")[0]
            )
        )
        .map((item) => item.arti.split(", ")[0])
        .slice(0, 4 - arrayShuffleOpptions.length);
      arrayShuffleOpptions = [...arrayShuffleOpptions, ...additionalOptions];
    }

    indexSelectedIndexes++; // Increment indexSelectedIndexes for the next iteration

    return {
      id: index + 1,
      question: `Apa arti dari kata "${item.adjective}"?`,
      options: arrayShuffleOpptions,
      correctAnswer: item.arti.split(", ")[0],
    };
  });

  ListSoalFinal = ListSoalFinal.filter(Boolean).sort(() => Math.random() - 0.5);

  return ListSoalFinal.filter(Boolean); // Hapus nilai null dari soal yang tidak terpilih
};
