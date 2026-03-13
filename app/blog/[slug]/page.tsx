import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { getPostBySlug } from "@/lib/posts";
import { marked } from "marked";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  const html = marked(post.content);

  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-bold">
          {post.title}
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          {post.date}
        </p>

        <article
          className="prose prose-lg mt-8"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />

      </main>

      <Footer />
    </>
  );
}