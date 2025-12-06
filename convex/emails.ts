import { v } from "convex/values";
import { action, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";

/**
 * Send a single email via Resend
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
 * Send welcome email to a new waitlist signup
 */
export const sendWaitlistWelcome = action({
  args: {
    email: v.string(),
    projectName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable not set");
    }

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px;">
    <h1 style="background: linear-gradient(135deg, #7c3aed, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin: 0;">SUPATENT</h1>
  </div>

  <h2 style="color: #1a1a1a;">You're on the list!</h2>

  <p>Thanks for signing up for early access to SUPATENT${args.projectName ? ` for <strong>${args.projectName}</strong>` : ''}.</p>

  <p>We're building the AI-powered patent management platform that helps inventors and IP professionals streamline their workflow.</p>

  <p>Here's what happens next:</p>
  <ul>
    <li>We'll notify you as soon as early access opens</li>
    <li>You'll be among the first to try new features</li>
    <li>Early users get priority support and special pricing</li>
  </ul>

  <p>In the meantime, feel free to reply to this email if you have any questions.</p>

  <p style="margin-top: 30px;">
    Best,<br>
    <strong>The SUPATENT Team</strong>
  </p>

  <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

  <p style="font-size: 12px; color: #666; text-align: center;">
    SUPATENT - AI-Powered Patent Management<br>
    <a href="https://supatent.ai" style="color: #7c3aed;">supatent.ai</a>
  </p>
</body>
</html>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SUPATENT <noreply@supatent.ai>",
        to: args.email,
        subject: "You're on the SUPATENT waitlist!",
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
    // Note: In a real app, you'd want to batch this and use Resend's batch API
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
