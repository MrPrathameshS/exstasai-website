import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-bold mb-10">
          Contact Us
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Message"
            className="w-full border p-3 rounded-lg"
            rows={5}
          />

          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Send Message
          </button>

        </form>

      </main>

      <Footer />
    </>
  );
}