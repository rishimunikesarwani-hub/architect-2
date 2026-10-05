import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export const framework = v.union(
  v.literal('Auto-select'), v.literal('LangGraph'), v.literal('CrewAI'),
  v.literal('OpenAI Agents'), v.literal('Lyzr'), v.literal('Custom'),
);
export const stage = v.union(v.literal('draft'), v.literal('ready'), v.literal('deployed'));

export default defineSchema({
  projects: defineTable({
    ownerId: v.string(),
    title: v.string(),
    description: v.string(),
    framework,
    stage,
    // Workspace contains prototype files/settings; never credentials.
    stateJson: v.string(),
    updatedAt: v.number(),
    archived: v.boolean(),
  }).index('by_owner_updated', ['ownerId', 'updatedAt']),
});
