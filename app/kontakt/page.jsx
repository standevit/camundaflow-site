'use client';

import { useState } from 'react';

export default function Kontakt() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sende…');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    if (res.ok) {
      setStatus('Vielen Dank! Wir melden uns in Kürze.');
      e.target.reset();
      // Opcionalno prebaci na /danke
      setTimeout(() => window.location.href = '/danke', 2000);
    } else {
      setStatus('Fehler beim Senden. Bitte per E-Mail: post@camundaflow.de');
    }
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-4">Kontaktieren Sie uns</h1>
          <p className="text-center text-gray-600 mb-12">
            Sie haben Fragen zu Camunda 8, BPMN, AI-Agenten oder brauchen eine Beratung?<br />
            Schreiben Sie uns – wir antworten meist innerhalb von 24 Stunden.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-Mail *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nachricht *</label>
              <textarea
                name="message"
                required
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Nachricht senden
            </button>

            {status && (
              <p className={`text-center font-medium ${status.includes('Dank') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
