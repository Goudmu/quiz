import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function MenuListPassage({ menuItems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuItems.map((item) => {
        if (!item.isActive) {
          // Skip rendering for inactive items
          return null;
        }
        return (
          <div key={item.id} className="w-full">
            <Card className="w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              <CardHeader className="flex flex-col items-start justify-between">
                <Badge variant="outline" className="mb-2">
                  {item.category}
                </Badge>
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
