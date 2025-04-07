import { parseXML } from "../helpers/parser";
import { urls } from "../page";
import { Organisation } from "./Organisation/Organisation";

export const NewsItems = async () => {
  const rssFeeds = await parseXML({ rssUrls: urls });

  return (
    <div className="flex flex-wrap gap-12">
      {rssFeeds.map((org) => (
        <Organisation key={org.description} org={org} />
      ))}
    </div>
  );
}