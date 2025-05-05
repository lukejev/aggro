"use client"

import { api } from "../../convex/_generated/api";
import { NewsItems } from "./components/NewsItems";
import { useQuery } from "convex/react";

export default function Home() {
  const tasks = useQuery(api.feeds.getFeeds);
  console.log({ tasks })

  return (
    <div className="p-4">
      {/* <NewsItems /> */}
    </div>
  );
}
