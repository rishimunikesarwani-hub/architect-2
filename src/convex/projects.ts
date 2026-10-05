import { ConvexError, v } from 'convex/values';
import { mutation, query, type MutationCtx, type QueryCtx } from './_generated/server';
import type { Id } from './_generated/dataModel';
import { authComponent } from './auth';
import { framework, stage } from './schema';

const MAX_WORKSPACE_BYTES = 600_000;

function validTitle(title: string) {
  const result = title.trim();
  if (result.length < 1 || result.length > 120) throw new ConvexError('Project title must be 1–120 characters.');
  return result;
}

function validDescription(description: string) {
  if (description.length > 12_000) throw new ConvexError('Description is too long.');
  return description;
}

function validState(stateJson: string) {
  if (new TextEncoder().encode(stateJson).length > MAX_WORKSPACE_BYTES) {
    throw new ConvexError('Workspace is too large to save (600 KB maximum). Export a backup before reducing its contents.');
  }
  try {
    const parsed = JSON.parse(stateJson);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('Expected an object');
  } catch {
    throw new ConvexError('Workspace must be a valid JSON object.');
  }
  return stateJson;
}

async function ownedProject(ctx: QueryCtx | MutationCtx, id: Id<'projects'>) {
  const user = await authComponent.getAuthUser(ctx);
  const project = await ctx.db.get(id);
  // A uniform response does not reveal whether another user's ID exists.
  if (!project || project.ownerId !== user._id || project.archived) throw new ConvexError('Project not found.');
  return project;
}

export const list = query({
  args: {},
  handler: async (ctx) => {
    const user = await authComponent.getAuthUser(ctx);
    return await ctx.db.query('projects')
      .withIndex('by_owner_updated', (q) => q.eq('ownerId', user._id))
      .filter((q) => q.eq(q.field('archived'), false))
      .order('desc').take(100);
  },
});

export const get = query({
  args: { id: v.id('projects') },
  handler: async (ctx, { id }) => await ownedProject(ctx, id),
});

export const create = mutation({
  args: { title: v.string(), description: v.string(), framework, stateJson: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const user = await authComponent.getAuthUser(ctx);
    return await ctx.db.insert('projects', {
      ownerId: user._id,
      title: validTitle(args.title),
      description: validDescription(args.description),
      framework: args.framework,
      stateJson: validState(args.stateJson ?? '{}'),
      stage: 'draft', updatedAt: Date.now(), archived: false,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id('projects'), title: v.optional(v.string()), description: v.optional(v.string()),
    framework: v.optional(framework), stage: v.optional(stage), stateJson: v.optional(v.string()),
  },
  handler: async (ctx, { id, ...args }) => {
    await ownedProject(ctx, id);
    const changes: Record<string, string | number> = { updatedAt: Date.now() };
    if (args.title !== undefined) changes.title = validTitle(args.title);
    if (args.description !== undefined) changes.description = validDescription(args.description);
    if (args.framework !== undefined) changes.framework = args.framework;
    if (args.stage !== undefined) changes.stage = args.stage;
    if (args.stateJson !== undefined) changes.stateJson = validState(args.stateJson);
    await ctx.db.patch(id, changes);
    return id;
  },
});

export const archive = mutation({
  args: { id: v.id('projects') },
  handler: async (ctx, { id }) => {
    await ownedProject(ctx, id);
    await ctx.db.patch(id, { archived: true, updatedAt: Date.now() });
    return id;
  },
});
