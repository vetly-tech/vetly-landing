import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "temp");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = body.email;

    await resend.emails.send({
      from: "Vetly <onboarding@resend.dev>",
      to: "difrancisco2101@gmail.com",
      subject: "Novo lead Vetly 🚀",
      html: `
        <h1>Novo lead na waitlist</h1>
        <p>Email: ${email}</p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
    });
  }
}