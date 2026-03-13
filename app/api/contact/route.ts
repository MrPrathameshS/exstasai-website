import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
    "re_h2JbXrdx_8qszYP4ooqt2s7BMJ5NZKE9U"
  );

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  try {
    await resend.emails.send({
      from: "contact@exstasai.com",
      to: "contact@exstasai.com",
      subject: "New Contact Form",
      text: `
Name: ${name}
Email: ${email}

${message}
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}