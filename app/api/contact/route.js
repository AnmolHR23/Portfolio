import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Simple in-memory rate limiter (per IP, resets on cold start) ──
// For production scale, replace with Upstash Redis (you already use it in Adwita)
const rateLimitMap = new Map(); // ip → { count, resetAt }
const RATE_LIMIT = 3;           // max submissions per window
const WINDOW_MS  = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true; // allowed
  }

  if (entry.count >= RATE_LIMIT) return false; // blocked

  entry.count++;
  return true; // allowed
}

// ── Spam keyword filter ──
const SPAM_PATTERNS = [
  /\b(casino|poker|slot|viagra|cialis|crypto|nft|bitcoin|seo services|backlink|adult|xxx|porn)\b/i,
  /https?:\/\//i,   // no URLs in name/subject fields (common spam signal)
];

function looksLikeSpam({ name, subject, message }) {
  const combined = `${name} ${subject} ${message}`;
  return SPAM_PATTERNS.some((pattern) => pattern.test(combined));
}

// ── Input sanitiser — strip HTML tags ──
function sanitise(str = "") {
  return str.replace(/<[^>]*>/g, "").trim().slice(0, 2000);
}

export async function POST(request) {
  try {
    // 1. Parse body
    const body = await request.json();
    const name    = sanitise(body.name);
    const email   = sanitise(body.email);
    const subject = sanitise(body.subject) || "New portfolio contact";
    const message = sanitise(body.message);

    // 2. Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 3. Rate limiting (by IP)
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 4. Spam check
    if (looksLikeSpam({ name, subject, message })) {
      // Return 200 so bots think it worked — but don't send
      return Response.json({ success: true });
    }

    // 5. Send email via Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // replace with your verified domain e.g. contact@anmolhr.dev
      to:   ["anmolpoojari23@gmail.com"],
      replyTo: email,                                    // replying goes straight to the sender
      subject: `[Portfolio] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>New Contact</title>
        </head>
        <body style="margin:0;padding:0;background:#FAF7F2;font-family:Inter,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F2;padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;border:1px solid #E2DAD0;overflow:hidden;">

                  <!-- Header -->
                  <tr>
                    <td style="background:#C4622D;padding:28px 36px;">
                      <p style="margin:0;font-family:Georgia,serif;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">
                        Anmol H R
                      </p>
                      <p style="margin:4px 0 0;font-size:13px;color:rgba(255,255,255,0.8);">
                        New message from your portfolio
                      </p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:36px;">

                      <!-- Sender details -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F2;border-radius:8px;border:1px solid #E2DAD0;margin-bottom:28px;">
                        <tr>
                          <td style="padding:20px 24px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding-bottom:12px;">
                                  <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#888;">From</span><br/>
                                  <span style="font-size:15px;font-weight:600;color:#2C2C2C;">${name}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-bottom:12px;">
                                  <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#888;">Email</span><br/>
                                  <a href="mailto:${email}" style="font-size:14px;color:#C4622D;text-decoration:none;">${email}</a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#888;">Subject</span><br/>
                                  <span style="font-size:14px;color:#2C2C2C;">${subject}</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Message -->
                      <p style="margin:0 0 10px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#888;">Message</p>
                      <div style="font-size:15px;color:#5C5C6E;line-height:1.75;white-space:pre-wrap;border-left:3px solid #C4622D;padding-left:16px;">
                        ${message.replace(/\n/g, "<br/>")}
                      </div>

                      <!-- CTA -->
                      <div style="margin-top:32px;text-align:center;">
                        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}"
                          style="display:inline-block;background:#C4622D;color:#ffffff;font-size:14px;font-weight:600;padding:13px 28px;border-radius:6px;text-decoration:none;">
                          Reply to ${name}
                        </a>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#F0EAE0;padding:20px 36px;border-top:1px solid #E2DAD0;">
                      <p style="margin:0;font-size:12px;color:#888;text-align:center;">
                        Sent from your portfolio contact form · anmolhr.dev
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      // Plain-text fallback (important for deliverability)
      text: `New portfolio contact\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      headers: {
        // Anti-spam headers that improve deliverability
        "X-Entity-Ref-ID": `portfolio-contact-${Date.now()}`,
      },
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}