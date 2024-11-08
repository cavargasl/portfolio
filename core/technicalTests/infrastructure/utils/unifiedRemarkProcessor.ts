import remarkFrontmatter from 'remark-frontmatter'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import remarkParseFrontmatter from 'remark-parse-frontmatter'
import { unified } from 'unified'

export const unifiedRemarkProcessor = unified().use(remarkParse).use(remarkFrontmatter).use(remarkParseFrontmatter).use(remarkHtml)
