export type NewsItem = {
  author: string;
  category?: Record<string, string>[];
  created: number;
  description: string;
  link: string;
  published: string;
  title: string;
}

export type NewsOrganisation = {
  title: string;
  description: string;
  link: string;
  image: string;
  category: string;
  items: NewsItem[];
}