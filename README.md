# www
APIOps Cycles Method website

## Import content from CSV

Place `APIOps Cycles - Methods.csv`, `APIOps Cycles - Lines.csv` and
`APIOps Cycles - Resources.csv` in the project root. Then run:

```bash
npm run import:csv
```

This command parses the CSV files with `papaparse` and generates Markdownfiles under `src/content`.

## Deployment

Deploy the site on Netlify using the included adapter:

1. Install dependencies with `npm install`.
2. Build the site using `npm run build`. This compiles Tailwind using
   `tailwind.config.cjs` and outputs the final `dist` folder.
3. Push the repository to a connected Netlify project.

Netlify reads `netlify.toml` to run the build command and serve the
contents of the `dist` directory.
