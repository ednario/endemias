import type { RichTextContent } from '@graphcms/rich-text-types'

export type Acoes = {
  imagem: {
    url: string
  }
  titulo: string
  descricao: {
    raw: RichTextContent
  }
}