import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  feeds: defineTable({ name: v.string(), url: v.string() }),
});