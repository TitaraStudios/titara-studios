/**
 * Resolves a public asset path against Vite's configured base URL.
 *
 * Image paths in our data files are stored as absolute (`/assets/...`). On a
 * sub-path deploy like GitHub Pages (`/<repo>/`), a bare `/assets/...` would
 * resolve to the domain root and 404. Prefixing with `import.meta.env.BASE_URL`
 * makes them resolve correctly in dev (`/`) and in production (`./`).
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${base}/${path.replace(/^\//, '')}`
}
