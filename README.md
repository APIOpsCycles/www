# www
APIOps Cycles Method website

## Import content from CSV

Place `APIOps Cycles - Methods.csv`, `APIOps Cycles - Lines.csv` and
`APIOps Cycles - Resources.csv` in the project root. Then run:

```bash
npm run import:csv
```

This command parses the CSV files with `papaparse` and generates Markdown
files under `src/content`.