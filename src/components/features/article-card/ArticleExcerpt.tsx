interface ArticleExcerptProps {
  excerpt: string;
}

export function ArticleExcerpt({ excerpt }: ArticleExcerptProps) {
  return (
    <p className="mb-4 line-clamp-2 text-gray-600 dark:text-gray-400">
      {excerpt}
    </p>
  );
}
