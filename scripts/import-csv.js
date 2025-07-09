import fs from 'fs/promises';
import path from 'path';
import Papa from 'papaparse';
import matter from 'gray-matter';

function slugify(str = '') {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function importCsv(csvFile, outDir) {
  let csv;
  try {
    csv = await fs.readFile(csvFile, 'utf8');
  } catch (err) {
    console.error(`Could not read ${csvFile}: ${err.message}`);
    return;
  }
  const result = Papa.parse(csv, { header: true, skipEmptyLines: true });
  await fs.mkdir(path.join('src', 'content', outDir), { recursive: true });

  for (const row of result.data) {
    const body = row.body || row.content || row.Content || '';
    const slug = row.slug || row.Slug || slugify(row.title || row.Title || '');
    const data = { ...row, slug };
    delete data.body;
    delete data.content;
    delete data.Content;

    const markdown = matter.stringify(body, data);
    const filePath = path.join('src', 'content', outDir, `${slug}.md`);
    await fs.writeFile(filePath, markdown, 'utf8');
    console.log(`Wrote ${filePath}`);
  }
}

async function main() {
  await importCsv('APIOps Cycles - Methods.csv', 'methods');
  await importCsv('APIOps Cycles - Lines.csv', 'lines');
  await importCsv('APIOps Cycles - Resources.csv', 'resources');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});