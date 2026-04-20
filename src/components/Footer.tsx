const CURRENT_YEAR = 2025;

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
        © {CURRENT_YEAR} DevPulse. All rights reserved.
      </div>
    </footer>
  );
}
