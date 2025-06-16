export interface tag {
  label: string,
  value: string
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  image: string;
  categories: tag[];
  date: string;
  readTime: string;
  comments: number;
} 