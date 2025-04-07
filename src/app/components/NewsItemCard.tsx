import Link from "next/link";
import type { NewsItem } from "../types/types";

type Props = {
  item: NewsItem;
}

export const NewsItemCard = ({ item }: Props) => {
  return (
    <Link href={item.link} target="_blank">
      <div className="border-white border-2 rounded-md p-6 mb-4 hover:bg-gray-600">
        {item.title}
      </div>
    </Link>
  )
};
