// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Provjera spam bota
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Opcija A – Resend
    await resend.emails.send({
      from: 'Kontakt Formular <kontakt@camundaflow.de>',
      to: ['post@camundaflow.de'],
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage von der Webseite</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <small>Gesendet von camundaflow.de am ${new Date().toLocaleString('de-DE')}</small>
      `,
    });

    return NextResponse.json({ message: 'Email erfolgreich gesendet!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Fehler beim Senden' }, { status: 500 });
  }
}
