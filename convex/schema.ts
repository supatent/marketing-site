import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlists: defineTable({
    email: v.string(),
    product: v.string(),
    source: v.optional(v.string()),
    notifiedAt: v.optional(v.number()),
    metadata: v.optional(v.any()),
    createdAt: v.number(),
  })
    .index("by_product", ["product"])
    .index("by_email_product", ["email", "product"]),
});
