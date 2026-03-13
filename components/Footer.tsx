export default function Footer() {
  return (
    <footer className="border-t mt-20 py-10 text-center text-sm text-gray-600">
      <div className="max-w-4xl mx-auto space-y-4">

        {/* Logo / Name */}
        <div className="text-lg font-semibold text-black">
          ExstasAI
        </div>

        {/* Tagline */}
        <div>
          Production AI Systems
        </div>

        {/* Location */}
        <div>
          Mumbai, India
        </div>

        {/* Contact */}
        <div className="space-x-4">

          <a
            href="mailto:contact@exstasai.com"
            className="hover:underline"
          >
            contact@exstasai.com
          </a>

          <a
            href="https://github.com/MrPrathameshS"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>

          <a
            href="#"
            className="hover:underline"
          >
            LinkedIn
          </a>

        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 pt-4">
          © 2026 ExstasAI
        </div>

      </div>
    </footer>
  );
}