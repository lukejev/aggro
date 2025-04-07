import type { NewsOrganisation } from "@/app/types/types";
import { NewsItemCard } from "../NewsItemCard";
import Link from "next/link";

type Props = {
  org: NewsOrganisation
}

export const Organisation = ({ org }: Props) => {
  return (
    <div className="max-w-5/12 border-2 border-gray-600 p-4 rounded-md">
      <Link href={org.link} target="_blank">
        <div className="w-fit p-2 mb-2 rounded-md hover:bg-gray-600">
          <h2 className="italic text-2xl">{org.title}</h2>
          <p className="text-sm italic">{org.description}</p>
        </div>
      </Link>
      {Array.from([org.items[0], org.items[1], org.items[2]]).map((newsItem) => {
        return (
          <NewsItemCard key={newsItem.title} item={newsItem} />
        )
      })}
    </div>
  );
}