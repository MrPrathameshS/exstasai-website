import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28 text-center">

      <h1 className="text-5xl font-bold leading-tight">
        We Build Production AI Systems
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
        ExstasAI designs and deploys AI systems for automation,
        computer vision, and intelligent business workflows.
      </p>

      <div className="mt-10 flex justify-center gap-4">

        <Link
          href="/products"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          View Solutions
        </Link>

        <Link
          href="/contact"
          className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>

      </div>

    </section>
  );
}