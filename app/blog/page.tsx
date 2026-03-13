import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {

  const posts = getAllPosts();

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-bold">
          ExstasAI Blog
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl">
          Engineering notes, AI systems, automation tools,
          and real-world projects built at ExstasAI.
        </p>


        <div className="mt-12 space-y-8">

          {posts.map((post) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
            >

              <article className="border p-6 rounded-xl hover:shadow-md transition cursor-pointer">

                <h2 className="text-2xl font-semibold">
                  {post.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  {post.description}
                </p>

                <p className="text-sm text-gray-500 mt-4">
                  {post.date}
                </p>

              </article>

            </Link>

          ))}

        </div>

      </main>

      <Footer />
    </>
  );
}