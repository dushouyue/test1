import Link from "next/link";

interface ArticleTitleProps {
  title: string;
  slug: string;
}

export function ArticleTitle({ title, slug }: ArticleTitleProps) {
  return (
    <h2 className="mb-2 text-xl font-semibold tracking-tight group-hover:text-gray-600 dark:group-hover:text-gray-300">
      <Link href={`/articles/${slug}`}>{title}</Link>
    </h2>
  );
}
