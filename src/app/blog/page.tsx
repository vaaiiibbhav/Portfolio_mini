import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const MEDIUM_PROFILE = "https://medium.com/@vaaiiibbhav";

const mediumPosts = [
  {
    title: "Code, Cameras, and Calories: The Hyper-Optimized Life of a Developer Model",
    publishedAt: "2025",
    summary:
      "A deep dive into balancing the grind of software development with personal health, creativity, and relentless optimization.",
    href: "https://medium.com/@vaaiiibbhav/code-cameras-and-calories-the-hyper-optimized-life-of-a-developer-model-d997bbe64eb3",
  },
];

export default function BlogPage() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-medium text-2xl tracking-tighter">Blog</h1>
        <Link
          href={MEDIUM_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
        >
          View all on Medium ↗
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {mediumPosts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-medium text-sm text-neutral-900 dark:text-neutral-100 group-hover:underline leading-snug">
                {post.title}
              </p>
              <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
                {post.publishedAt}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {post.summary}
            </p>
            <span className="text-xs text-muted-foreground mt-1">
              medium.com ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
