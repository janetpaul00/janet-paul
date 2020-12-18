import { RichTextBlock } from 'prismic-reactjs'

export type Post = {
  title: string
  slug: string
  image: string
  excerpt: string
  content: RichTextBlock[]
  date: string
  tags: string[]
}
