import QuizSelector from "@/components/MyComponent/QuizSelector";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BahasaInggrisVerbPage() {
  return (
    <main>
      <div>
        <QuizSelector tipeSoal={"bahasainggrisverb2"} />
        <Link href={"/"} className="absolute top-4 left-4">
          <Button className="cursor-pointer">Back To Menu</Button>
        </Link>
      </div>
    </main>
  );
}
