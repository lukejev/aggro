import { parseXML } from "../helpers/parser";
import { urls } from "../page";
import { Items } from "./Items";

export const NewsItems = async () => {
  const test = await parseXML({ rssUrls: urls });

  return (
    <div className="">
      <Items test={test} />
    </div>
  );
}