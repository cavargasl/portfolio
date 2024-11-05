import { type Params } from '@core/shared/domain'

import { type Http } from '@core/client/domain/http'
import { DEFAULT_LANG } from '@core/shared/const/infrastructure'

import { unifiedRemarkProcessor } from './unifiedRemarkProcessor'
import fs from 'fs-extra'
import path from 'path'

export const loadTechnicalTestsMarkdown: Http = {
  get: async <T>(_url: string, params?: Params) => {
    const lang = params?.lang ?? DEFAULT_LANG
    const directoryPath = path.join(process.cwd(), '../../../core/technicalTests/infrastructure/data/markdown', lang)

    try {
      const files = await fs.readdir(directoryPath)

      const technicalTest = Promise.all(
        files
          .filter((file) => file.endsWith('.md'))
          .map(async (file) => {
            const filePath = path.join(directoryPath, file)
            const fileContent = await fs.readFile(filePath, 'utf-8')

            const processedContent = await unifiedRemarkProcessor.process(fileContent)
            const frontMatterData = processedContent.data.frontmatter as Partial<T>
            const markdownContent = String(processedContent)
            return { ...frontMatterData, description: markdownContent, isMarkdown: true } as T
          })
      )
      return (await technicalTest) as T
    } catch (error) {
      console.error('Error reading files:', error)
      throw error
    }
  },
  delete: <T>() => Promise.reject('method delete of loadTechnicalTestsMarkdown is not configured') as Promise<T>,
  post: <T>() => Promise.reject('method post of loadTechnicalTestsMarkdown is not configured') as Promise<T>,
  put: <T>() => Promise.reject('method put of loadTechnicalTestsMarkdown is not configured') as Promise<T>,
}
