import Link from "next/link";

const categories = [
  { name: "前端开发", count: 24 },
  { name: "后端架构", count: 18 },
  { name: "DevOps", count: 12 },
  { name: "人工智能", count: 9 },
];

const popularTags = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Docker",
];

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
      {children}
    </h3>
  );
}

function AboutCard() {
  return (
    <Card>
      <CardTitle>关于 DevPulse</CardTitle>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        DevPulse 是一个专注于前沿技术分享的技术博客平台，涵盖前端、后端、AI 与工程化实践。
      </p>
    </Card>
  );
}

function CategoryCard() {
  return (
    <Card>
      <CardTitle>分类</CardTitle>
      <ul className="flex flex-col gap-3">
        {categories.map((category) => (
          <li key={category.name} className="flex items-center justify-between">
            <Link
              href={`/category/${encodeURIComponent(category.name)}`}
              className="text-sm hover:text-gray-600 dark:hover:text-gray-300"
            >
              {category.name}
            </Link>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-900 dark:text-gray-400">
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function TagCard() {
  return (
    <Card>
      <CardTitle>热门标签</CardTitle>
      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag, index) => (
          <Link
            key={`${tag}-${index}`}
            href={`/tag/${encodeURIComponent(tag)}`}
            className="rounded-lg border border-gray-200 px-3 py-1 text-sm transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
          >
            {tag}
          </Link>
        ))}
      </div>
    </Card>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-8">
      <AboutCard />
      <CategoryCard />
      <TagCard />
    </aside>
  );
}
