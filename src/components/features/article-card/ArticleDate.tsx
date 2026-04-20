interface ArticleDateProps {
  date: string;
}

export function ArticleDate({ date }: ArticleDateProps) {
  return (
    <time dateTime={date} className="text-xs text-gray-500 dark:text-gray-500">
      {date}
    </time>
  );
}
