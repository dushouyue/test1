import { ArticleTags } from "./ArticleTags";
import { ArticleTitle } from "./ArticleTitle";
import { ArticleExcerpt } from "./ArticleExcerpt";
import { ArticleDate } from "./ArticleDate";

export interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
}

export default function ArticleCard({
  title,
  excerpt,
  date,
  tags,
  slug,
}: ArticleCardProps) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <ArticleTags tags={tags} />
      <ArticleTitle title={title} slug={slug} />
      <ArticleExcerpt excerpt={excerpt} />
      <ArticleDate date={date} />
    </article>
  );
}
