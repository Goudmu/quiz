import { MenuList } from "../components/MyComponent/MenuList";

export default function Home() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
      <MenuList />
    </main>
  );
}
