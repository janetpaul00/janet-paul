import { gql, GraphQLClient } from 'graphql-request'

import { MetaType, ResumeType } from '../types'

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL)

export const getMeta = async (): Promise<MetaType> => {
  const { meta } = await graphcms.request<{
    meta: MetaType
  }>(
    gql`
      query meta($metaId: ID!) {
        meta(where: { id: $metaId }) {
          name
          subtitle
          bio
          email
          linkedin
          phone
          photo {
            height
            width
            url
          }
        }
      }
    `,
    {
      metaId: process.env.GRAPHCMS_META_ID
    }
  )

  return meta
}

export const getResume = async (): Promise<ResumeType> => {
  const resume = await graphcms.request<ResumeType>(
    gql`
      query resume($metaId: ID!) {
        meta(where: { id: $metaId }) {
          name
          subtitle
          bio
          email
          linkedin
          phone
          photo {
            height
            width
            url
          }
        }
        educations(orderBy: from_DESC) {
          id
          degree
          school
          from
          to
        }
        experiences(orderBy: from_DESC) {
          id
          position
          company
          from
          to
          content
        }
        skills {
          id
          title
          description
        }
      }
    `,
    {
      metaId: process.env.GRAPHCMS_META_ID
    }
  )

  return resume
}
