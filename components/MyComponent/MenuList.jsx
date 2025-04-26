import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Sample menu data
const menuItems = [
  {
    id: 1,
    title: "Sinonim",
    description:
      "Temukan kata-kata dengan makna serupa untuk meningkatkan kosakata Anda.",
    category: "Tes Intelegensi Umum",
    url: "/TIU/sinonim",
    isActive: true,
  },
  {
    id: 2,
    title: "Antonim",
    description:
      "Temukan kata-kata dengan makna berlawanan untuk mengasah keterampilan Anda.",
    category: "Tes Intelegensi Umum",
    url: "/TIU/antonim",
    isActive: true,
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
    isActive: true,
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
];

export function MenuList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuItems.map((item) => (
        <Card
          key={item.id}
          className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          style={{ backgroundColor: item.isActive ? "#fff" : "#f0f0f0" }}
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <Badge variant="secondary" className="ml-2">
                {item.category}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{item.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center pt-2">
            <Link href={item.url}>
              <button
                className={`bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm transition-colors ${
                  !item.isActive ? "cursor-not-allowed" : "cursor-pointer"
                } disabled:${!item.isActive}`}
                disabled={!item.isActive}
              >
                Go
              </button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
