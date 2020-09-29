import Prismic from 'prismic-javascript'

import { Education, Experience, Meta } from '../types'

class Content {
  client = Prismic.client('https://janetpaul.cdn.prismic.io/api/v2')

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
