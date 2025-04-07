import { NewsItems } from "./components/NewsItems";

export const urls = ["https://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml", "https://feeds.bbci.co.uk/news/world/europe/rss.xml", "https://www.theguardian.com/uk/rss", "https://www.smh.com.au/rss/feed.xml"]

export default async function Home() {
  return (
    <div className="p-4">
      <NewsItems />
    </div>
  );
}
