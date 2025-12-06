import { v } from "convex/values";
import { action, internalAction } from "./_generated/server";

/**
 * Beautiful SUPATENT-branded email template
 */
function createWelcomeEmailHtml(args: {
  projectName?: string;
  projectType?: string;
  teamSize?: string;
}): string {
  const projectInfo = args.projectName
    ? `<p style="margin: 0 0 24px 0; color: #6b7280; font-size: 15px; line-height: 1.6;">We're excited to help you build <strong style="color: #111827;">${args.projectName}</strong>${args.projectType ? ` — ${args.projectType}` : ''}.</p>`
    : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to SUPATENT</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb;">
    <tr>
      <td style="padding: 48px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="520" style="margin: 0 auto; max-width: 520px;">

          <!-- Logo -->
          <tr>
            <td style="padding-bottom: 32px;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; color: #111827;">SUPATENT</h1>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb;">

                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">

                    <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">Waitlist Confirmed</p>

                    <h2 style="margin: 0 0 24px 0; color: #111827; font-size: 28px; font-weight: 600; letter-spacing: -0.5px; line-height: 1.2;">
                      You're on the list.
                    </h2>

                    <p style="margin: 0 0 24px 0; color: #6b7280; font-size: 15px; line-height: 1.6;">
                      Thanks for your interest in SUPATENT. We'll notify you when early access opens.
                    </p>

                    ${projectInfo}

                    <!-- Divider -->
                    <div style="height: 1px; background: #e5e7eb; margin: 32px 0;"></div>

                    <!-- What's Next Section -->
                    <p style="margin: 0 0 20px 0; color: #111827; font-size: 14px; font-weight: 600;">
                      What to expect
                    </p>

                    <!-- Step 1 -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top;">
                          <div style="width: 20px; height: 20px; background: #111827; border-radius: 50%; text-align: center; line-height: 20px; color: white; font-size: 11px; font-weight: 600;">1</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p style="margin: 0; color: #111827; font-size: 14px; font-weight: 500;">Early access invitation</p>
                          <p style="margin: 2px 0 0 0; color: #9ca3af; font-size: 13px;">Be among the first to try SUPATENT.</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Step 2 -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px;">
                      <tr>
                        <td style="width: 28px; vertical-align: top;">
                          <div style="width: 20px; height: 20px; background: #111827; border-radius: 50%; text-align: center; line-height: 20px; color: white; font-size: 11px; font-weight: 600;">2</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p style="margin: 0; color: #111827; font-size: 14px; font-weight: 500;">Priority onboarding</p>
                          <p style="margin: 2px 0 0 0; color: #9ca3af; font-size: 13px;">Personalized setup from our team.</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Step 3 -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="width: 28px; vertical-align: top;">
                          <div style="width: 20px; height: 20px; background: #111827; border-radius: 50%; text-align: center; line-height: 20px; color: white; font-size: 11px; font-weight: 600;">3</div>
                        </td>
                        <td style="vertical-align: top; padding-left: 12px;">
                          <p style="margin: 0; color: #111827; font-size: 14px; font-weight: 500;">Founder pricing</p>
                          <p style="margin: 2px 0 0 0; color: #9ca3af; font-size: 13px;">Lock in early adopter rates.</p>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- CTA Button -->
                <tr>
                  <td style="padding: 0 40px 40px 40px;">
                    <a href="https://supatent.ai" style="display: inline-block; padding: 12px 24px; background: #111827; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 500; border-radius: 6px;">
                      Visit SUPATENT &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 0 0 0;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                SUPATENT &bull; AI-Powered Content Management
              </p>
              <p style="margin: 8px 0 0 0;">
                <a href="https://supatent.ai" style="color: #6b7280; text-decoration: none; font-size: 12px;">supatent.ai</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Internal action to send welcome email (called by scheduler)
 */
export const sendWelcomeEmailInternal = internalAction({
  args: {
    email: v.string(),
    projectName: v.optional(v.string()),
    projectType: v.optional(v.string()),
    teamSize: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not set, skipping welcome email");
      return { success: false, error: "API key not configured" };
    }

    const html = createWelcomeEmailHtml({
      projectName: args.projectName,
      projectType: args.projectType,
      teamSize: args.teamSize,
    });

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SUPATENT <noreply@supatent.ai>",
          to: args.email,
          subject: "You're on the SUPATENT waitlist! 🎉",
          html,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Failed to send welcome email:", error);
        return { success: false, error };
      }

      const data = await response.json();
      console.log("Welcome email sent successfully to:", args.email);
      return { success: true, data };
    } catch (error) {
      console.error("Error sending welcome email:", error);
      return { success: false, error: String(error) };
    }
  },
});

/**
 * Send a single email via Resend (public action)
 */
export const send = action({
  args: {
    to: v.string(),
    subject: v.string(),
    html: v.string(),
    from: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable not set");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: args.from || "SUPATENT <noreply@supatent.ai>",
        to: args.to,
        subject: args.subject,
        html: args.html,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send email: ${error}`);
    }

    return await response.json();
  },
});

/**
 * Send welcome email to a new waitlist signup (public action)
 */
export const sendWaitlistWelcome = action({
  args: {
    email: v.string(),
    projectName: v.optional(v.string()),
    projectType: v.optional(v.string()),
    teamSize: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable not set");
    }

    const html = createWelcomeEmailHtml({
      projectName: args.projectName,
      projectType: args.projectType,
      teamSize: args.teamSize,
    });

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SUPATENT <noreply@supatent.ai>",
        to: args.email,
        subject: "You're on the SUPATENT waitlist! 🎉",
        html,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Failed to send welcome email:", error);
      return { success: false, error };
    }

    return { success: true, data: await response.json() };
  },
});

/**
 * Send launch announcement to all waitlist users
 */
export const sendLaunchAnnouncement = action({
  args: {
    product: v.string(),
    subject: v.string(),
    html: v.string(),
  },
  handler: async (ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable not set");
    }

    // Get all unnotified waitlist entries
    const { internal } = await import("./_generated/api");
    const entries = await ctx.runQuery(internal.waitlists.getUnnotifiedEmails, {
      product: args.product,
    });

    const results = [];
    for (const email of entries) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "SUPATENT <noreply@supatent.ai>",
            to: email,
            subject: args.subject,
            html: args.html,
          }),
        });

        if (response.ok) {
          results.push({ email, success: true });
        } else {
          results.push({ email, success: false, error: await response.text() });
        }
      } catch (error) {
        results.push({ email, success: false, error: String(error) });
      }
    }

    return {
      total: entries.length,
      sent: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length,
      results,
    };
  },
});
