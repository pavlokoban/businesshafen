"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("SEND");

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // Здесь будущий endpoint API /api/contact
    console.log(data);

    setStatus("OK");
  }

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 p-6 border border-slate-200 rounded-2xl bg-white"
      >
        <h3 className="text-xl font-semibold">Kontaktformular</h3>

        <input
          name="name"
          placeholder="Ihr Name"
          className="w-full border border-slate-300 rounded-lg px-3 py-2"
          required
        />

        <input
          name="email"
          placeholder="Ihre E-Mail"
          type="email"
          className="w-full border border-slate-300 rounded-lg px-3 py-2"
          required
        />

        <textarea
          name="message"
          placeholder="Ihre Nachricht"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 h-32"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Absenden
        </button>

        {status === "OK" && (
          <p className="text-green-600 text-sm mt-2">
            Vielen Dank! Wir melden uns schnellstmöglich.
          </p>
        )}
      </form>
    </Container>
  );
}
