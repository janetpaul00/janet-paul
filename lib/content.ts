import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { Post } from '../types'

const client = Prismic.client('https://janetpaul.cdn.prismic.io/api/v2')

export const fetchPosts = async (): Promise<Post[]> => {
  const { results } = await client.query(
    Prismic.Predicates.at('document.type', 'post'),
    {
      orderings: '[document.first_publication_date desc]'
    }
  )

  return results.map(({ data, first_publication_date, tags, uid }) => ({
    ...data,
    date: first_publication_date,
    image: data.image.url,
    slug: uid,
    tags,
    title: RichText.asText(data.title)
  }))
}

export const fetchPost = async (slug: string): Promise<Post> => {
  const { data, first_publication_date, tags, uid } = await client.getByUID(
    'post',
    slug,
    {}
  )

  return {
    ...data,
    date: first_publication_date,
    image: data.image.url,
    slug: uid,
    tags,
    title: RichText.asText(data.title)
  }
}
