"use client"

import { NewsOrganisation } from "../types/types";
import { NewsItemCard } from "./NewsItemCard";

type Props = {
  feeds: NewsOrganisation[];
}

export const Items = ({ feeds }: Props) => {
  const test = [feeds[0].items[0], feeds[0].items[1], feeds[0].items[2]]

  return (
    test.map((item) => {
      return <NewsItemCard key={item.title} item={item} />
    })
  )
};