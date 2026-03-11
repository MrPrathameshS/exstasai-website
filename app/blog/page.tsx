import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Blog() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-bold mb-10">
          ExstasAI Blog
        </h1>

        <div className="space-y-8">

          <article className="border p-6 rounded-xl">
            <h2 className="text-2xl font-semibold">
              Understanding Prompt Sensitivity in Stable Diffusion
            </h2>
            <p className="mt-3 text-gray-600">
              An empirical analysis of how prompt structure and
              sampling strategies influence diffusion model outputs.
            </p>
          </article>

          <article className="border p-6 rounded-xl">
            <h2 className="text-2xl font-semibold">
              Building Computer Vision APIs with FastAPI
            </h2>
            <p className="mt-3 text-gray-600">
              How to deploy scalable computer vision pipelines
              using FastAPI microservices.
            </p>
          </article>

        </div>

      </main>

      <Footer />
    </>
  );
}