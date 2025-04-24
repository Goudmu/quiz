import QuizComp from "@/components/MyComponent/QuizComp";

export default function SinonimPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Sinonim Tes</h1>
      <QuizComp jumlahSoal={5} />
    </main>
  );
}
