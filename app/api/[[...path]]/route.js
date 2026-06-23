import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/');

  if (path === '' || path === 'health') {
    return NextResponse.json({
      ok: true,
      service: 'sanjay-portfolio',
      time: new Date().toISOString(),
    });
  }

  return NextResponse.json(
    { error: 'not found', path },
    { status: 404 }
  );
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/');

  try {
    if (path === 'contact') {
      const body = await request.json();

      const { name, email, message } = body || {};

      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'Missing fields' },
          { status: 400 }
        );
      }

      if (!resend || !CONTACT_EMAIL) {
        console.error(
          'Missing RESEND_API_KEY or CONTACT_EMAIL environment variables.'
        );

        return NextResponse.json(
          { error: 'Email service not configured.' },
          { status: 500 }
        );
      }

      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: CONTACT_EMAIL,
        subject: `Portfolio Contact - ${name}`,
        replyTo: email,
        text: `
Name: ${name}

Email: ${email}

Message:
${message}
        `,
      });

      return NextResponse.json({
        ok: true,
        message: 'Message sent successfully.',
      });
    }

    return NextResponse.json(
      { error: 'not found', path },
      { status: 404 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: 'server_error',
        message: error?.message,
      },
      { status: 500 }
    );
  }
}