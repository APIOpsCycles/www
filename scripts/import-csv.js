import fs from 'fs/promises';
import path from 'path';
// Minimal CSV and front matter utilities to avoid external dependencies

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        field += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      row.push(field);
      field = '';
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += ch;
    }
  }
  if (field !== '' || inQuotes || row.length) {
    row.push(field);
    rows.push(row);
  }
  const headers = rows.shift();
  return rows.map((r) => {
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = r[idx] || '';
    });
    return obj;
  });
}

function toFrontMatter(body, data) {
  let yaml = '---\n';
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      yaml += `${key}:\n`;
      for (const item of value) {
        yaml += `  - ${item}\n`;
      }
    } else {
      yaml += `${key}: ${JSON.stringify(value)}\n`;
    }
  }
  yaml += '---\n\n';
  return yaml + body;
}

function stripHtml(html = '') {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

function parseHtmlList(html = '') {
  const items = [];
  const regex = /<li[^>]*>(.*?)<\/li>/gis;
  let match;
  while ((match = regex.exec(html))) {
    const text = stripHtml(match[1]);
    if (text) items.push(text);
  }
  return items;
}

function slugify(str = '') {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function importCsv(csvFile, outDir, transformRow) {
  let csv;
  try {
    csv = await fs.readFile(csvFile, 'utf8');
  } catch (err) {
    console.error(`Could not read ${csvFile}: ${err.message}`);
    return;
  }
  const result = parseCSV(csv);
  await fs.mkdir(path.join('src', 'content', outDir), { recursive: true });

  for (const row of result) {
    const { body = '', ...data } = transformRow(row);
    const slug = data.slug || slugify(data.title || '');
    data.slug = slug;
    const markdown = toFrontMatter(body, data);
    const filePath = path.join('src', 'content', outDir, `${slug}.md`);
    await fs.writeFile(filePath, markdown, 'utf8');
    console.log(`Wrote ${filePath}`);
  }
}

function transformMethod(row) {
  const data = {
    title: row['Name'] || row['Title'],
    slug: row['Slug'],
    entry_criteria: parseHtmlList(row['Step 1']),
    enabling_the_work: stripHtml(row['Step 2'] || ''),
    exit_criteria: parseHtmlList(row['Step 3']),
    previous_phase: row['Previous phase'] || undefined,
    next_phase: row['Next phase'] || undefined,
  };
  // Remove empty values
  for (const key of Object.keys(data)) {
    if (data[key] === undefined || data[key] === '') {
      delete data[key];
    }
  }
  return data;
}

function transformLine(row) {
  const data = {
    title: row['Name'],
    slug: row['Slug'],
    stations: row['Stations'],
    'line-color': row['line-color'],
  };
  for (const key of Object.keys(data)) {
    if (data[key] === undefined || data[key] === '') delete data[key];
  }
  return data;
}

function transformResource(row) {
  const data = {
    title: row['Name'],
    slug: row['Slug'],
  };
  for (const key of Object.keys(data)) {
    if (data[key] === undefined || data[key] === '') delete data[key];
  }
  return data;
}

async function main() {
  await importCsv('APIOps Cycles - Methods.csv', 'methods', transformMethod);
  await importCsv('APIOps Cycles - Lines.csv', 'lines', transformLine);
  await importCsv('APIOps Cycles - Resources.csv', 'resources', transformResource);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);});