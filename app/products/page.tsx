import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-24">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          AI Products & Systems
        </h1>

        <p className="text-gray-600 mb-12 max-w-2xl">
          We build production-ready AI systems for automation,
          lead generation, and intelligent workflows.
        </p>


        <div className="grid md:grid-cols-3 gap-8">

          {/* Product 1 */}
          <div className="border rounded-xl p-6 flex flex-col">

            <h2 className="text-xl font-semibold">
              AI Social Automation
            </h2>

            <p className="mt-4 text-gray-600 flex-1">
              Automated LinkedIn content generation, scheduling,
              and analytics powered by AI agents.
              Built for ExstasAI and used for real social media automation.
            </p>

            <a
              href="https://automation.exstasai.com"
              className="mt-6 inline-block bg-black text-white px-4 py-2 rounded text-center"
            >
              Open Product
            </a>

          </div>


          {/* Product 2 */}
          <div className="border rounded-xl p-6 flex flex-col">

            <h2 className="text-xl font-semibold">
              Lead Generation AI Agents
            </h2>

            <p className="mt-4 text-gray-600 flex-1">
              Agentic AI chat systems for client qualification,
              requirement discovery, and consultation booking.
              Currently in development for client projects.
            </p>

            <div className="mt-6 text-sm text-gray-500">
              Coming soon
            </div>

          </div>


          {/* Product 3 */}
          <div className="border rounded-xl p-6 flex flex-col">

            <h2 className="text-xl font-semibold">
              Custom AI Systems
            </h2>

            <p className="mt-4 text-gray-600 flex-1">
              We design and deploy custom AI solutions including
              automation pipelines, computer vision systems,
              and intelligent agents for real businesses.
            </p>

            <a
              href="/chat"
              className="mt-6 inline-block border px-4 py-2 rounded text-center"
            >
              Start Consultation
            </a>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}