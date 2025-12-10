"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50 bg-white border border-slate-300 shadow-xl rounded-xl p-5 max-w-lg mx-auto">
      <p className="text-sm text-slate-700">
        Wir verwenden Cookies zur Verbesserung der Nutzererfahrung. Durch die
        Nutzung der Website stimmen Sie dieser Verwendung zu.
      </p>

      <button
        onClick={accept}
        className="mt-3 bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition"
      >
        Akzeptieren
      </button>
    </div>
  );
}
