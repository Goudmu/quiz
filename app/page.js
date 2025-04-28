import { MenuList } from "../components/MyComponent/MenuList";

const menuItems = [
  {
    id: 1,
    title: "Sinonim",
    description:
      "Temukan kata-kata dengan makna serupa untuk meningkatkan kosakata Anda.",
    category: "Tes Intelegensi Umum",
    url: "/TIU/sinonim",
    isActive: false,
  },
  {
    id: 2,
    title: "Antonim",
    description:
      "Temukan kata-kata dengan makna berlawanan untuk mengasah keterampilan Anda.",
    category: "Tes Intelegensi Umum",
    url: "/TIU/antonim",
    isActive: false,
  },
  {
    id: 3,
    title: "Akronim",
    description: "Pelajari singkatan umum dan bentuk lengkapnya.",
    category: "Tes Intelegensi Umum",
    url: "/TIU/akronim",
    isActive: false,
  },
  {
    id: 4,
    title: "Pancasila",
    description: "Perdalam pemahaman Anda tentang filosofi dasar Indonesia.",
    category: "Tes Wawasan Kebangsaan",
    url: "/TWK/pancasila",
    isActive: false,
  },
  {
    id: 5,
    title: "Bahasa Inggris Verb Part 1",
    description: "Perdalam pemahaman Anda tentang verb dalam bahasa Inggris.",
    category: "Bahasa Inggris",
    url: "/bahasainggris/verb",
    isActive: true,
  },
  {
    id: 6,
    title: "Bahasa Inggris Verb Part 2",
    description: "Perdalam pemahaman Anda tentang verb dalam bahasa Inggris.",
    category: "Bahasa Inggris",
    url: "/bahasainggris/verb2",
    isActive: true,
  },
  {
    id: 7,
    title: "Bahasa Inggris Vocabulary",
    description: "Perluas kosakata bahasa Inggris Anda.",
    category: "Bahasa Inggris",
    url: "/bahasainggris/EnglishVocabularyinUse/part1",
    isActive: true,
  },
  {
    id: 8,
    title: "Bahasa Inggris Noun",
    description: "Perluas kosakata bahasa Inggris Anda.",
    category: "Bahasa Inggris",
    url: "/bahasainggris/noun",
    isActive: true,
  },
  {
    id: 9,
    title: "Bahasa Inggris Adjective",
    description: "Perluas kosakata bahasa Inggris Anda.",
    category: "Bahasa Inggris",
    url: "/bahasainggris/adj",
    isActive: true,
  },
  {
    id: 10,
    title: "Bahasa Inggris Passage",
    description: "Perluas kosakata bahasa Inggris Anda.",
    category: "Bahasa Inggris",
    url: "/bahasainggris/passage",
    isActive: true,
  },
];

export default function Home() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
      <MenuList menuItems={menuItems} />
    </main>
  );
}
