import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          ExstasAI
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm text-gray-700">

          <Link
            href="/products"
            className="hover:text-black transition"
          >
            Products
          </Link>

          <Link
            href="/blog"
            className="hover:text-black transition"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="hover:text-black transition"
          >
            About
          </Link>

          <Link
            href="/careers"
            className="hover:text-black transition"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition"
          >
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}