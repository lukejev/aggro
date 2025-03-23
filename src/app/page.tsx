import { NewsItems } from "./components/NewsItems";

export const urls = ["https://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml", "https://feeds.bbci.co.uk/news/world/europe/rss.xml"]

export default async function Home() {
  return (
    <div className="">
      <p>Home</p>
      <NewsItems />
    </div>
  );
}
