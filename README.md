# APIOps Cycles Method Website

This project contains the source for the APIOps Cycles Method site built with
[Astro](https://astro.build/) and Tailwind CSS.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the development server

Start a local dev server that automatically rebuilds when files change:

```bash
npm run dev
```

## Import content from CSV

Place `APIOps Cycles - Methods.csv`, `APIOps Cycles - Lines.csv` and
`APIOps Cycles - Resources.csv` in the project root. Then run:

```bash
npm run import:csv
```

This command parses the CSV files with `papaparse` and generates Markdown
files under `src/content`.

## Deployment to Netlify

Deploy the site using the included Netlify adapter:

1. Build the site using `npm run build`. This compiles Tailwind using
   `tailwind.config.cjs` and outputs the final `dist` folder.
2. Push the repository to a connected Netlify project.

Netlify reads `netlify.toml` to run the build command and serve the contents
of the `dist` directory.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).
