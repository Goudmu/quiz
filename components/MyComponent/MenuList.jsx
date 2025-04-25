import Image from "next/image";
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
    description: "Juicy beef patty with lettuce, tomato, and our special sauce",
    category: "Tes Intelegensi Umum",
    url: "/TIU/sinonim",
    isActive: true,
  },
  {
    id: 2,
    title: "Antonim",
    description: "Fresh mozzarella, tomatoes, and basil on our homemade dough",
    category: "Tes Intelegensi Umum",
    url: "/TIU/antonim",
    isActive: true,
  },
  {
    id: 3,
    title: "Akronim",
    description: "Fresh mozzarella, tomatoes, and basil on our homemade dough",
    category: "Tes Intelegensi Umum",
    url: "/TIU/akronim",
    isActive: false,
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
