export default function Solutions() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <h2 className="text-3xl font-bold text-center mb-12">
        AI Systems We Build
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-semibold">
            Computer Vision Systems
          </h3>

          <p className="mt-4 text-gray-600">
            Custom vision models for object detection, visual analytics,
            and intelligent monitoring.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-semibold">
            AI Workflow Automation
          </h3>

          <p className="mt-4 text-gray-600">
            AI agents that automate business processes such as lead
            qualification, marketing workflows, and data analysis.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-semibold">
            ML Infrastructure
          </h3>

          <p className="mt-4 text-gray-600">
            Production ML systems including model deployment,
            APIs, and scalable inference pipelines.
          </p>
        </div>

      </div>

    </section>
  );
}