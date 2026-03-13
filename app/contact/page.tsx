"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Message sent");
  }

  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-bold">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >

          <input
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Your Email"
            className="w-full border p-3 rounded"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Message"
            className="w-full border p-3 rounded h-40"
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
          />

          <button
            className="bg-black text-white px-6 py-3 rounded"
          >
            Send Message
          </button>

        </form>

      </main>

      <Footer />
    </>
  );
}