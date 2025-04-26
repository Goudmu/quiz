import { getShuffledIndexes } from "../../utils";

const listSoalVerbBahasaInggris = [
  { verb: "abet", arti: "membantu (dalam kejahatan)" },
  { verb: "abide", arti: "mematuhi" },
  { verb: "acquiesce", arti: "menyerah" },
  { verb: "admonish", arti: "menegur" },
  { verb: "affix", arti: "menempelkan" },
  { verb: "allude", arti: "mengacu secara tidak langsung" },
  { verb: "amplify", arti: "memperbesar" },
  { verb: "appease", arti: "menenangkan" },
  { verb: "apprise", arti: "memberitahu" },
  { verb: "ascend", arti: "naik" },
  { verb: "assert", arti: "menegaskan" },
  { verb: "assess", arti: "menilai" },
  { verb: "ascribe", arti: "menganggap sebagai" },
  { verb: "assimilate", arti: "mengasimilasi" },
  { verb: "attest", arti: "menyatakan" },
  { verb: "avert", arti: "menghindari" },
  { verb: "bequeath", arti: "me wariskan" },
  { verb: "brandish", arti: "mengacungkan" },
  { verb: "buttress", arti: "mendukung" },
  { verb: "calibrate", arti: "mengkalibrasi" },
  { verb: "capitalize", arti: "memanfaatkan" },
  { verb: "castigate", arti: "menghukum keras" },
  { verb: "circumvent", arti: "mengelabui" },
  { verb: "clarify", arti: "menjelaskan" },
  { verb: "coalesce", arti: "bersatu" },
  { verb: "collaborate", arti: "berkolaborasi" },
  { verb: "collate", arti: "mengumpulkan dan membandingkan" },
  { verb: "commemorate", arti: "memperingati" },
  { verb: "commence", arti: "memulai" },
  { verb: "compensate", arti: "mengkompensasi" },
  { verb: "compile", arti: "menyusun" },
  { verb: "comprehend", arti: "memahami" },
  { verb: "conceal", arti: "menyembunyikan" },
  { verb: "concoct", arti: "mengarang" },
  { verb: "condense", arti: "mengkondensasi" },
  { verb: "confiscate", arti: "menyita" },
  { verb: "conform", arti: "menyesuaikan" },
  { verb: "congregate", arti: "berkumpul" },
  { verb: "conjure", arti: "menyulap" },
  { verb: "consolidate", arti: "mengonsolidasikan" },
  { verb: "constrain", arti: "membatasi" },
  { verb: "construct", arti: "membangun" },
  { verb: "consult", arti: "berkonsultasi" },
  { verb: "consume", arti: "mengonsumsi" },
  { verb: "contradict", arti: "bertentangan" },
  { verb: "contrive", arti: "merancang" },
  { verb: "convene", arti: "mengadakan pertemuan" },
  { verb: "converge", arti: "berkumpul" },
  { verb: "convey", arti: "menyampaikan" },
  { verb: "convict", arti: "memvonis" },
  { verb: "counteract", arti: "melawan" },
  { verb: "curb", arti: "mengekang" },
  { verb: "debrief", arti: "memberi laporan" },
  { verb: "decipher", arti: "memecahkan (kode)" },
  { verb: "deem", arti: "menganggap" },
  { verb: "deflect", arti: "membelokkan" },
  { verb: "deliberate", arti: "mempertimbangkan" },
  { verb: "demonstrate", arti: "mendemonstrasikan" },
  { verb: "denote", arti: "menunjukkan" },
  { verb: "deplete", arti: "menguras" },
  { verb: "deprecate", arti: "menolak" },
  { verb: "derive", arti: "berasal dari" },
  { verb: "desist", arti: "berhenti" },
  { verb: "deteriorate", arti: "memburuk" },
  { verb: "diagnose", arti: "mendiagnosis" },
  { verb: "differentiate", arti: "membedakan" },
  { verb: "diminish", arti: "mengurangi" },
  { verb: "discern", arti: "mengenali" },
  { verb: "discredit", arti: "mendiskreditkan" },
  { verb: "disrupt", arti: "mengganggu" },
  { verb: "dissuade", arti: "mencegah" },
  { verb: "divulge", arti: "membocorkan" },
  { verb: "elaborate", arti: "menguraikan" },
  { verb: "elevate", arti: "menaikkan" },
  { verb: "elicit", arti: "mengungkapkan" },
  { verb: "emulate", arti: "meniru" },
  { verb: "enact", arti: "memberlakukan" },
  { verb: "encroach", arti: "mengganggu" },
  { verb: "endeavor", arti: "berusaha keras" },
  { verb: "enforce", arti: "menegakkan" },
  { verb: "engender", arti: "menimbulkan" },
  { verb: "enhance", arti: "meningkatkan" },
  { verb: "entail", arti: "mengharuskan" },
  { verb: "entrench", arti: "memperkuat" },
  { verb: "enumerate", arti: "menyebutkan satu per satu" },
  { verb: "envision", arti: "membayangkan" },
  { verb: "eradicate", arti: "memberantas" },
  { verb: "eschew", arti: "menghindari" },
  { verb: "establish", arti: "mendirikan" },
  { verb: "exacerbate", arti: "memperburuk" },
  { verb: "excavate", arti: "menggali" },
  { verb: "exemplify", arti: "memberi contoh" },
  { verb: "exonerate", arti: "membebaskan" },
  { verb: "expend", arti: "menghabiskan" },
  { verb: "extrapolate", arti: "menyimpulkan" },
  { verb: "facilitate", arti: "mempermudah" },
  { verb: "fluctuate", arti: "berfluktuasi" },
  { verb: "forge", arti: "memalsukan" },
  { verb: "fortify", arti: "memperkuat" },
  { verb: "frustrate", arti: "menggagalkan" },
  { verb: "hasten", arti: "mempercepat" },
  { verb: "heed", arti: "memperhatikan" },
  { verb: "hibernate", arti: "berhibernasi" },
  { verb: "highlight", arti: "menyoroti" },
  { verb: "hinder", arti: "menghalangi" },
  { verb: "immerse", arti: "mencelupkan" },
  { verb: "impart", arti: "memberikan" },
  { verb: "impede", arti: "menghambat" },
  { verb: "implore", arti: "memohon" },
  { verb: "improvise", arti: "mengimprovisasi" },
  { verb: "inaugurate", arti: "meresmikan" },
  { verb: "incite", arti: "menghasut" },
  { verb: "infuse", arti: "menginfus" },
  { verb: "inhibit", arti: "menghambat" },
  { verb: "inquire", arti: "bertanya" },
  { verb: "instigate", arti: "menghasut" },
  { verb: "interact", arti: "berinteraksi" },
  { verb: "intercept", arti: "mencegat" },
  { verb: "intertwine", arti: "saling terkait" },
  { verb: "invalidate", arti: "membatalkan" },
  { verb: "invoke", arti: "memohon" },
  { verb: "jeopardize", arti: "membahayakan" },
  { verb: "mediate", arti: "menengahi" },
  { verb: "mitigate", arti: "mengurangi" },
  { verb: "mobilize", arti: "menggerakkan" },
  { verb: "muster", arti: "mengumpulkan" },
  { verb: "navigate", arti: "mengemudikan" },
  { verb: "nullify", arti: "membatalkan" },
  { verb: "nurture", arti: "memelihara" },
  { verb: "obfuscate", arti: "mengaburkan" },
  { verb: "orchestrate", arti: "mengatur" },
  { verb: "oscillate", arti: "berayun" },
  { verb: "overhaul", arti: "membenahi" },
  { verb: "overwhelm", arti: "menguasai" },
  { verb: "permeate", arti: "meresap" },
  { verb: "persecute", arti: "menganiaya" },
  { verb: "plummet", arti: "jatuh terjun" },
  { verb: "postulate", arti: "mengusulkan" },
  { verb: "preserve", arti: "melestarikan" },
  { verb: "prevail", arti: "mengalahkan" },
  { verb: "proclaim", arti: "menyatakan" },
  { verb: "propagate", arti: "menyebarkan" },
  { verb: "ratify", arti: "meratifikasi" },
  { verb: "rebound", arti: "memantul kembali" },
  { verb: "reconstruct", arti: "merekontruksi" },
  { verb: "refute", arti: "menyangkal" },
  { verb: "rescind", arti: "membatalkan" },
  { verb: "revoke", arti: "mencabut" },
  { verb: "safeguard", arti: "melindungi" },
  { verb: "simulate", arti: "mensimulasikan" },
  { verb: "solicit", arti: "meminta" },
  { verb: "spearhead", arti: "memimpin" },
  { verb: "subdue", arti: "menaklukkan" },
  { verb: "succumb", arti: "menyerah" },
  { verb: "supersede", arti: "menggantikan" },
  { verb: "suppress", arti: "menekan" },
  { verb: "sustain", arti: "mempertahankan" },
  { verb: "tamper", arti: "mengutak-atik" },
  { verb: "transmit", arti: "mentransmisikan" },
  { verb: "uphold", arti: "menegakkan" },
  { verb: "utilize", arti: "memanfaatkan" },
  { verb: "venture", arti: "mengambil risiko" },
  { verb: "warrant", arti: "menjamin" },
  { verb: "withstand", arti: "bertahan" },
];

export const SoalVerbBahasaInggris2 = (jumlahSoal) => {
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
