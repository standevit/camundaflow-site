// app/api/contact/route.js   (Next.js 14 App Router)
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  // Jednostavna zaštita od praznih polja
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Nodemailer transporter – koristi tvoj vlastiti SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,       // npr. smtp.ionos.de ili smtp.strato.de ili smtp.gmail.com
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true', // true za 465, false za 587
    auth: {
      user: process.env.SMTP_USER,     // post@camundaflow.de
      pass: process.env.SMTP_PASS,        // tvoj password ili App-Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // ili fiksno kontakt@camundaflow.de
      to: 'post@camundaflow.de',
      replyTo: email,                        // klijent može odgovoriti direktno pošiljatelju
      subject: `Website-Anfrage von ${name}`,
      text: message,
      html: `
        <h3>Neue Anfrage von der Webseite</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <small>Gesendet am ${new Date().toLocaleDateString('de-DE')}</small>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Mail nicht gesendet' }, { status: 500 });
  }
}
