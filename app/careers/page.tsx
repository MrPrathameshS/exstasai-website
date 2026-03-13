import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Careers() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-bold">
          Careers at ExstasAI
        </h1>

        <p className="mt-4 text-gray-600">
          We build production AI systems, automation platforms,
          and intelligent software for real businesses.
        </p>


        {/* Engineering */}

        <h2 className="text-2xl font-semibold mt-12">
          Engineering
        </h2>

        <div className="space-y-6 mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Machine Learning Engineer
            </h3>
            <p className="text-gray-600 mt-2">
              Work on computer vision, LLM agents,
              and production AI systems.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Full Stack Engineer
            </h3>
            <p className="text-gray-600 mt-2">
              Build SaaS products, dashboards,
              and automation platforms.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              AI / LLM Engineer
            </h3>
            <p className="text-gray-600 mt-2">
              Work on AI agents, chat systems,
              and automation workflows.
            </p>
          </div>

        </div>


        {/* Product */}

        <h2 className="text-2xl font-semibold mt-12">
          Product & Design
        </h2>

        <div className="space-y-6 mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Frontend Developer
            </h3>
            <p className="text-gray-600 mt-2">
              Build modern UI for AI SaaS products.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              UI / UX Designer
            </h3>
            <p className="text-gray-600 mt-2">
              Design user interfaces for AI tools
              and automation platforms.
            </p>
          </div>

        </div>


        {/* Business */}

        <h2 className="text-2xl font-semibold mt-12">
          Business & Growth
        </h2>

        <div className="space-y-6 mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              AI Solutions Engineer
            </h3>
            <p className="text-gray-600 mt-2">
              Work with clients to design custom
              AI systems and automation solutions.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold">
              Technical Content / Marketing
            </h3>
            <p className="text-gray-600 mt-2">
              Write blogs, case studies,
              and product documentation.
            </p>
          </div>

        </div>


        {/* Contact */}

        <div className="mt-16 border rounded-xl p-8">

          <h2 className="text-xl font-semibold">
            Don't see a role?
          </h2>

          <p className="text-gray-600 mt-2">
            Send your resume to contact@exstasai.com
          </p>

        </div>


      </main>

      <Footer />
    </>
  );
}