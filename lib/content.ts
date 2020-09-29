import Prismic from 'prismic-javascript'

import { Education, Experience, Meta, Post } from '../types'

class Content {
  client = Prismic.client('https://janetpaul.cdn.prismic.io/api/v2')

  async posts(): Promise<Post[]> {
    const { results } = await this.client.query(
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
      tags
    }))
  }

  async post(slug: string): Promise<Post> {
    const {
      data,
      first_publication_date,
      tags,
      uid
    } = await this.client.getByUID('post', slug, {})

    return {
      ...data,
      date: first_publication_date,
      image: data.image.url,
      slug: uid,
      tags
    }
  }

  async meta(): Promise<Meta> {
    const { results } = await this.client.query(
      Prismic.Predicates.at('document.type', 'meta')
    )

    return results[0].data
  }

  async education(): Promise<Education[]> {
    const { results } = await this.client.query(
      Prismic.Predicates.at('document.type', 'education'),
      {
        orderings: '[my.education.graduation desc]'
      }
    )

    return results.map(({ data }) => data)
  }

  async experience(): Promise<Experience[]> {
    const { results } = await this.client.query(
      Prismic.Predicates.at('document.type', 'experience'),
      {
        orderings: '[my.experience.to desc]'
      }
    )

    return results.map(({ data }) => ({
      ...data,
      description: data.description.map(
        ({ description }: { description: string }) => description
      )
    }))
  }
}

export const content = new Content()
