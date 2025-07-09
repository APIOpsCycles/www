import { defineCollection, z } from 'astro:content';

const lines = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    stations: z.string().optional(),
    'line-color': z.string().optional(),
  }),
});

const methods = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    entry_criteria: z.array(z.string()).optional(),
    exit_criteria: z.array(z.string()).optional(),
    doing_the_work: z.string().optional(),
    enabling_the_work: z.string().optional(),
    previous_phase: z.string().optional(),
    next_phase: z.string().optional(),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
  }),
});

export const collections = { lines, methods, resources };
