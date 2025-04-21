import { NewsItems } from "./components/NewsItems";

export default async function Home() {
  return (
    <div className="p-4">
      <NewsItems />
    </div>
  );
}
