import path from 'path'
import { fileURLToPath } from 'url'

export function getDirectoryPath() {
  const env = process.env.NODE_ENV
  if (env === 'development') return path.join(path.dirname(fileURLToPath(import.meta.url)), '../data/markdown')
  return path.join(process.cwd(), '../../../core/technicalTests/infrastructure/data/markdown')
}
