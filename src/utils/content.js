import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getEntryBySlug(collection, slug) {
  const filePath = path.join(process.cwd(), 'src', 'content', collection, `${slug}.md`);
  const raw = await fs.readFile(filePath, 'utf-8');

  const { data, content } = matter(raw);
  const html = marked(content); // Parse markdown to HTML

  return { data, content: html };
}
