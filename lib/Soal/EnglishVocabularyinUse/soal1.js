import { getShuffledIndexes } from "@/lib/utils";

const listSoal1 = [
  { verb: "cram", arti: "study in a very concentrated way for a short time" },
  { verb: "genius", arti: "an exceptionally clever person" },
  { verb: "past papers", arti: "exam papers from previous years" },
  { verb: "rote-learning", arti: "learning purely by repetition" },
  { verb: "mnemonics", arti: "tricks that help you remember something" },
  {
    verb: "bury yourself in your books",
    arti: "spend the maximum time studying",
  },
  { verb: "intensively", arti: "in a very focused way" },
  { verb: "know the subject inside out", arti: "know it completely" },
];

const listSoal2 = [
  {
    verb: "composition",
    arti: "could be just 50–100 words, oft en used for school work",
  },
  {
    verb: "essay",
    arti: "longer than a composition, more serious, hundreds or thousands of words",
  },
  {
    verb: "assignment",
    arti: "a long essay, oft en part of a course, usually thousands of words",
  },
  {
    verb: "project",
    arti: "like an assignment, but emphasis on student’s own material and topic",
  },
  {
    verb: "portfolio",
    arti: "a collection of individual pieces of work; may include drawings and other examples of creative work as well as writing",
  },
  {
    verb: "dissertation",
    arti: "a long, research-based work, perhaps 10–15,000 words, for a degree or diploma",
  },
  {
    verb: "thesis",
    arti: "a very long, original, research-based work, perhaps 80–100,000 words, for a higher degree (e.g. PhD)",
  },
];

export const SoalEnglishVocabularyinUseChapter1Part1 = (jumlahSoal) => {
  if (jumlahSoal > listSoal1.length) {
    throw new Error("Jumlah soal melebihi jumlah data yang tersedia.");
  }
  if (jumlahSoal <= 0) {
    throw new Error("Jumlah soal harus lebih dari 0.");
  }

  let selectedIndexes = getShuffledIndexes(listSoal1.length)
    .slice(0, jumlahSoal)
    .sort((a, b) => a - b); // Mengurutkan indeks yang terpilih
  let indexSelectedIndexes = 0;

  let ListSoalFinal = listSoal1.map((item, index) => {
    if (selectedIndexes[indexSelectedIndexes] != index) return null; // Hanya ambil soal yang terpilih
    let arrayShuffleOpptions = getShuffledIndexes(listSoal1.length)
      .slice(0, 3)
      .map((i) => {
        if (i === index || i >= listSoal1.length) return null; // Hindari soal yang sama
        if (listSoal1[i].arti) {
          const sinonim = listSoal1[i].arti.split(", ")[0];
          if (sinonim === item.arti.split(", ")[0]) return null; // Hindari sinonim yang sama
          return sinonim;
        }
        return listSoal1[i].arti;
      });

    arrayShuffleOpptions.push(item.arti.split(", ")[0]); // Tambahkan sinonim yang benar
    arrayShuffleOpptions = arrayShuffleOpptions.filter(Boolean); // Hapus nilai null
    arrayShuffleOpptions = arrayShuffleOpptions.sort(() => Math.random() - 0.5); // Acak urutan pilihan jawaban
    arrayShuffleOpptions = [...new Set(arrayShuffleOpptions)]; // Hapus duplikat
    arrayShuffleOpptions = arrayShuffleOpptions.slice(0, 4); // Ambil 4 pilihan jawaban
    if (arrayShuffleOpptions.length < 4) {
      const additionalOptions = listSoal1
        .filter(
          (_, i) =>
            i !== index &&
            !arrayShuffleOpptions.includes(listSoal1[i].arti.split(", ")[0])
        )
        .map((item) => item.arti.split(", ")[0])
        .slice(0, 4 - arrayShuffleOpptions.length);
      arrayShuffleOpptions = [...arrayShuffleOpptions, ...additionalOptions];
    }

    indexSelectedIndexes++; // Increment indexSelectedIndexes for the next iteration

    return {
      id: index + 1,
      question: `What's the meaning of "${item.verb}"?`,
      options: arrayShuffleOpptions,
      correctAnswer: item.arti.split(", ")[0],
    };
  });

  ListSoalFinal = ListSoalFinal.filter(Boolean).sort(() => Math.random() - 0.5);

  return ListSoalFinal.filter(Boolean); // Hapus nilai null dari soal yang tidak terpilih
};
