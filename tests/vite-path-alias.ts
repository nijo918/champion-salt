// Ensures Vitest can resolve Next.js-style @/ alias without relying on Next's resolver
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const aliasRoot = fileURLToPath(new URL('.', import.meta.url))

export function resolveAlias(p: string) {
  const root = path.join(aliasRoot, '..')
  if (p.startsWith('@/')) return path.join(root, p.slice(2))
  return p
}

