import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Careers() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-bold mb-10">
          Careers at ExstasAI
        </h1>

        <p className="text-gray-600 mb-8">
          We are building advanced AI systems for automation,
          computer vision, and intelligent analytics.
        </p>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Machine Learning Engineer
          </h2>

          <p className="mt-3 text-gray-600">
            Work on computer vision models, ML infrastructure,
            and AI product development.
          </p>
        </div>

      </main>

      <Footer />
    </>
  );
}