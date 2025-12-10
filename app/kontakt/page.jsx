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
    } else {
      setStatus('Fehler – bitte direkt an post@camundaflow.de schreiben');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '2rem' }}>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <input name="name" placeholder="Name *" required style={s} />
        <input name="email" type="email" placeholder="E-Mail *" required style={s} />
        <textarea name="message" rows={8} placeholder="Nachricht *" required style={s} />
        <button type="submit" style={b}>Nachricht senden</button>
      </form>
      {status && <p style={{ marginTop: '2rem', fontWeight: 'bold', textAlign: 'center' }}>{status}</p>}
    </div>
  );
}

const s = { width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' };
const b = { padding: '1rem', background: '#0d6efd', color: 'white', border: 'none', borderRadius: '8px' };
