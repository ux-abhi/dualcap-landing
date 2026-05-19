import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, query } = await req.json();

  if (!name || !email || !query) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "DualCap Support <support@dualcap.app>",
    to: "hello@uxabhi.com",
    replyTo: email,
    subject: `DualCap support query from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nQuery:\n${query}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0a0a14;color:#ededf5;padding:32px;border-radius:12px;">
        <div style="margin-bottom:24px;">
          <span style="background:linear-gradient(135deg,#6366f1,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:18px;font-weight:700;">DualCap</span>
          <span style="color:rgba(255,255,255,0.4);margin-left:8px;font-size:13px;">· Support query</span>
        </div>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;width:80px;">Name</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);">${name}</td></tr>
          <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Email</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.07);"><a href="mailto:${email}" style="color:#818cf8;">${email}</a></td></tr>
        </table>
        <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:16px;font-size:15px;line-height:1.65;color:rgba(255,255,255,0.8);">${query.replace(/\n/g, "<br/>")}</div>
        <p style="margin-top:24px;font-size:12px;color:rgba(255,255,255,0.25);">Reply directly to this email to respond to ${name}.</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
