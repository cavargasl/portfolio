import path from 'path'
import { fileURLToPath } from 'url'

export function getDirectoryPath() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  return path.join(__dirname, '../data/markdown')
}