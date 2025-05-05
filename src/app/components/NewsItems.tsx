"use client"

import { URLs } from "../constants";
import { parseXML } from "../utils/parser";
import { Organisation } from "./Organisation/Organisation";

export const NewsItems = async () => {
  // add swr call
  // const rssFeeds = await parseXML({ rssUrls: URLs });
  const rssFeeds = {}

  return (
    <div className="flex flex-wrap gap-12">
      {/* {rssFeeds.map((org) => (
        <Organisation key={org.description} org={org} />
      ))} */}
    </div>
  );
}