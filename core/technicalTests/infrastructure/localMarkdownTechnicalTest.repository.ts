import { DEFAULT_LANG } from '@core/locale/domain'

import { type TechnicalTest } from '../domain/technicalTest'
import { type TechnicalTestRepository } from '../domain/technicalTestRepository'
import { getDirectoryPath } from './utils/getDirectoryPath'
import { unifiedRemarkProcessor } from './utils/unifiedRemarkProcessor'
import fs from 'fs-extra'
import path from 'path'

export const localMarkdownTechnicalTest = (): TechnicalTestRepository => ({
  getAll: async (params) => {
    const lang = params?.lang ?? DEFAULT_LANG
    const basePath = getDirectoryPath()
    const directoryPath = path.join(basePath, lang)

    const files = await fs.readdir(directoryPath)

    const technicalTests = Promise.all(
      files
        .filter((file) => file.endsWith('.md'))
        .map(async (file) => {
          const filePath = path.join(directoryPath, file)
          const fileContent = await fs.readFile(filePath, 'utf-8')

          const processedContent = await unifiedRemarkProcessor.process(fileContent)
          const frontMatterData = processedContent.data.frontmatter as Partial<TechnicalTest>
          const markdownContent = String(processedContent)
          return { ...frontMatterData, description: markdownContent, isMarkdown: true } as TechnicalTest
        })
    )
    return technicalTests
  },
})
