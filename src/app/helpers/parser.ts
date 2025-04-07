import parse from "rss-to-json";

type Props = {
  rssUrls: string[];
}

export const parseXML = async ({ rssUrls }: Props) => {
  const feeds = rssUrls.map(async (url) => {
    const res = await parse(url);
    return res;
  });

  return Promise.all(feeds)

};