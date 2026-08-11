export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-23'

// Amankan dataset: pakai env, jika kosong otomatis pakai 'production'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Amankan projectId: pakai env, jika kosong beri string kosong agar build Next.js tidak mogok
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''