import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-bold mb-10">
          AI Products & Solutions
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold">
              AI Social Media Automation
            </h2>
            <p className="mt-4 text-gray-600">
              Automated content generation, scheduling, and analytics
              for brands using machine learning pipelines.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold">
              Computer Vision Systems
            </h2>
            <p className="mt-4 text-gray-600">
              Custom vision models for object detection,
              monitoring, and intelligent analytics.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold">
              Floor Plan AI Analysis
            </h2>
            <p className="mt-4 text-gray-600">
              AI-powered system for extracting apartment layouts
              and generating structured property descriptions.
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}