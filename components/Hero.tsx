"use client";

export default function Hero() {
  return (
    <section className="w-full py-28 px-6 flex flex-col items-center text-center">

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
        Production AI Systems for Real-World Applications
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-gray-600 max-w-2xl text-lg">
        We design and deploy production-ready AI systems for automation,
        computer vision, and intelligent workflows.
      </p>


      {/* Consultation card */}
      <div className="mt-12 border rounded-2xl p-8 max-w-xl w-full shadow-sm bg-white">

        <div className="text-lg font-semibold mb-3">
          AI Consultation Assistant
        </div>

        <div className="bg-gray-100 p-4 rounded mb-5 text-sm">
          Describe your business problem and get a quick AI consultation.
        </div>

        <button
          className="bg-black text-white px-6 py-2 rounded-lg hover:opacity-90"
          onClick={() => {
            window.location.href = "/chat";
          }}
        >
          Start AI Consultation
        </button>

      </div>


      {/* trust line */}
      <div className="mt-10 text-sm text-gray-500">
        Custom AI Systems • Production Deployment • Consulting & Integration
      </div>

    </section>
  );
}