"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/articles", label: "文章" },
  { href: "/tags", label: "标签" },
  { href: "/about", label: "关于" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          DevPulse
        </Link>

        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="订阅博客更新"
            onClick={() => alert("订阅功能即将上线")}
            className="hidden rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 sm:block dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            订阅
          </button>

          <button
            type="button"
            aria-label={isOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-900 sm:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950 sm:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-label="订阅博客更新"
                onClick={() => {
                  setIsOpen(false);
                  alert("订阅功能即将上线");
                }}
                className="w-full rounded-full bg-gray-900 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                订阅
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
