import { v } from "convex/values";
import { mutation, query, internalQuery } from "./_generated/server";

/**
 * Join the waitlist - public mutation (no auth required)
 */
export const join = mutation({
  args: {
    email: v.string(),
    product: v.string(),
    source: v.optional(v.string()),
    metadata: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(args.email)) {
      throw new Error("Invalid email format");
    }

    // Normalize email
    const normalizedEmail = args.email.toLowerCase().trim();

    // Check if already on waitlist for this product
    const existing = await ctx.db
      .query("waitlists")
      .withIndex("by_email_product", (q) =>
        q.eq("email", normalizedEmail).eq("product", args.product)
      )
      .first();

    if (existing) {
      return { success: true, alreadyOnWaitlist: true };
    }

    // Add to waitlist
    await ctx.db.insert("waitlists", {
      email: normalizedEmail,
      product: args.product,
      source: args.source,
      metadata: args.metadata,
      createdAt: Date.now(),
    });

    return { success: true, alreadyOnWaitlist: false };
  },
});

/**
 * List all waitlist entries for a product
 */
export const listByProduct = query({
  args: { product: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("waitlists")
      .withIndex("by_product", (q) => q.eq("product", args.product))
      .collect();
  },
});

/**
 * Get waitlist statistics
 */
export const getStats = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("waitlists").collect();

    const byProduct: Record<string, number> = {};
    for (const entry of all) {
      byProduct[entry.product] = (byProduct[entry.product] || 0) + 1;
    }

    return {
      total: all.length,
      byProduct,
    };
  },
});

/**
 * Mark entries as notified (for launch announcements)
 */
export const markNotified = mutation({
  args: {
    product: v.string(),
  },
  handler: async (ctx, args) => {
    const entries = await ctx.db
      .query("waitlists")
      .withIndex("by_product", (q) => q.eq("product", args.product))
      .filter((q) => q.eq(q.field("notifiedAt"), undefined))
      .collect();

    const now = Date.now();
    for (const entry of entries) {
      await ctx.db.patch(entry._id, { notifiedAt: now });
    }

    return { notifiedCount: entries.length };
  },
});

/**
 * Export emails for a product
 */
export const exportEmails = query({
  args: {
    product: v.string(),
    unnotifiedOnly: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    let query = ctx.db
      .query("waitlists")
      .withIndex("by_product", (q) => q.eq("product", args.product));

    const entries = await query.collect();

    if (args.unnotifiedOnly) {
      return entries
        .filter((e) => !e.notifiedAt)
        .map((e) => e.email);
    }

    return entries.map((e) => e.email);
  },
});

/**
 * Internal query to get unnotified emails (for actions)
 */
export const getUnnotifiedEmails = internalQuery({
  args: {
    product: v.string(),
  },
  handler: async (ctx, args) => {
    const entries = await ctx.db
      .query("waitlists")
      .withIndex("by_product", (q) => q.eq("product", args.product))
      .filter((q) => q.eq(q.field("notifiedAt"), undefined))
      .collect();

    return entries.map((e) => e.email);
  },
});
