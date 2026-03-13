import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-bold">
          About ExstasAI
        </h1>

        <p className="mt-4 text-gray-600">
          ExstasAI is an early-stage AI startup focused on building
          production-ready AI systems, automation platforms,
          and intelligent software for real businesses.
        </p>


        {/* Mission */}

        <h2 className="text-2xl font-semibold mt-12">
          Our Mission
        </h2>

        <p className="mt-3 text-gray-600">
          Our goal is to make advanced AI systems usable in real-world
          applications. We focus on building practical solutions
          using machine learning, large language models, and automation
          pipelines instead of demo-only AI.
        </p>


        {/* What we build */}

        <h2 className="text-2xl font-semibold mt-12">
          What We Build
        </h2>

        <ul className="mt-3 text-gray-600 list-disc ml-6 space-y-2">
          <li>AI automation platforms</li>
          <li>LLM agents and chat systems</li>
          <li>Computer vision pipelines</li>
          <li>SaaS products powered by AI</li>
          <li>Custom AI systems for clients</li>
        </ul>


        {/* Current stage */}

        <h2 className="text-2xl font-semibold mt-12">
          Current Stage
        </h2>

        <p className="mt-3 text-gray-600">
          ExstasAI is currently in the early startup phase.
          We are actively building AI products and working with
          initial clients to develop custom automation and
          intelligent software systems.
        </p>

        <p className="mt-3 text-gray-600">
          Our first product, an AI Social Automation platform,
          is already being used internally and is being prepared
          for public release. We are also developing AI agents
          for lead generation and client interaction.
        </p>


        {/* Projects */}

        <h2 className="text-2xl font-semibold mt-12">
          Projects & Clients
        </h2>

        <p className="mt-3 text-gray-600">
          We are currently working on early client projects
          involving automation, AI agents, and custom software.
          These projects help us refine our products while
          generating initial revenue as a startup.
        </p>


        {/* CTA */}

        <div className="mt-16 border rounded-xl p-8">

          <h2 className="text-xl font-semibold">
            Work with us
          </h2>

          <p className="text-gray-600 mt-2">
            If you are interested in building AI systems,
            automation pipelines, or custom software,
            feel free to contact us.
          </p>

          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-black text-white rounded"
          >
            Contact Us
          </a>

        </div>

      </main>

      <Footer />
    </>
  );
}