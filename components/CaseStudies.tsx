export default function CaseStudies() {
    return (
      <section className="bg-gray-50 py-24 px-6">
  
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-3xl font-bold text-center mb-12">
            Case Studies
          </h2>
  
          <div className="grid md:grid-cols-2 gap-10">
  
            <div className="border rounded-xl p-6 bg-white">
  
              <h3 className="text-xl font-semibold">
                AI Lead Intelligence System
              </h3>
  
              <p className="mt-4 text-gray-600">
                Designed an AI-powered lead qualification system that
                researches potential clients and generates detailed
                campaign insights for marketing agencies.
              </p>
  
            </div>
  
            <div className="border rounded-xl p-6 bg-white">
  
              <h3 className="text-xl font-semibold">
                Floor Plan Understanding System
              </h3>
  
              <p className="mt-4 text-gray-600">
                Built a computer vision pipeline to extract apartment
                layouts from architectural floor plans and generate
                structured property descriptions.
              </p>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }