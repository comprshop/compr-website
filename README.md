# COMPR website

Static landing page for COMPR. This folder is the flattened GitHub upload copy; the structured source remains in `website`.

## Before publishing

1. Replace the `chrome`, `edge` and `contact` placeholders at the top of `main.js`.
2. Add a real demonstration video and update the placeholder in `index.html`.
3. Add real COMPR screenshots and replace the illustrative `.comparison-demo` block when available.
4. After the final GitHub Pages URL is known, use an absolute URL for `og:image` in `index.html` for the most reliable social previews.

## Local preview

Opening `index.html` directly works. For a local web server, run this command from the repository root when Python is installed:

```powershell
python -m http.server 8000 --directory website
```

Then visit `http://localhost:8000`.

## GitHub Pages

The workflow at `../.github/workflows/pages.yml` publishes only this `website` directory. In the GitHub repository settings, choose **GitHub Actions** as the Pages source. The workflow currently expects the default branch to be named `main`; change it if the repository uses another branch.
