// Base path utility for GitHub Pages deployment
export const basePath = process.env.NODE_ENV === 'production' ? '/plushie-store' : ''

// Helper function to create paths with base path
export const createPath = (path: string): string => {
  if (path.startsWith('http')) return path // External links
  return `${basePath}${path}`
}

// Helper function for asset paths
export const createAssetPath = (path: string): string => {
  if (path.startsWith('http')) return path // External assets
  return `${basePath}${path}`
}