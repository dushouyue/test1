import ArticleCard from "./features/article-card";

const articles = [
  {
    title: "深入理解 React Server Components",
    excerpt:
      "React Server Components 是 React 生态中的一项重要创新，它允许组件在服务端渲染，从而减少发送到客户端的 JavaScript 体积。",
    date: "2024-03-15",
    tags: ["React", "Frontend"],
    slug: "react-server-components",
  },
  {
    title: "TypeScript 5.0 新特性一览",
    excerpt:
      "TypeScript 5.0 带来了装饰器、const 类型参数、更好的 JSDoc 解析等诸多改进，本文将带你逐一了解。",
    date: "2024-03-10",
    tags: ["TypeScript"],
    slug: "typescript-5-new-features",
  },
  {
    title: "Next.js App Router 最佳实践",
    excerpt:
      "从 Pages Router 迁移到 App Router 后，路由、数据获取、缓存策略都发生了巨大变化。分享我们在实际项目中的经验。",
    date: "2024-03-05",
    tags: ["Next.js", "React"],
    slug: "nextjs-app-router-best-practices",
  },
  {
    title: "Tailwind CSS 设计系统搭建指南",
    excerpt:
      "如何利用 Tailwind 的配置文件和插件机制，搭建一套适合自己团队的设计系统，提升开发效率与设计一致性。",
    date: "2024-02-28",
    tags: ["CSS", "Tailwind"],
    slug: "tailwind-design-system",
  },
];

export default function ArticleList() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight">最新文章</h1>
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))}
      </div>
    </section>
  );
}
