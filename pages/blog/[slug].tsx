import dayjs from 'dayjs'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'
import React from 'react'

import { content } from '../../lib'
import { Meta, Post } from '../../types'

interface Props {
  meta: Meta
  post: Post
}

const Blog: NextPage<Props> = ({ meta, post }) => (
  <>
    <Head>
      <title>
        {RichText.asText(post.title)} / Blog / {meta.name} / {meta.subtitle}
      </title>
    </Head>

    <main>
      <img src={post.image} className="block w-full" />
      <h1 className="text-4xl font-semibold leading-tight mt-8">
        {RichText.asText(post.title)}
      </h1>
      <p className="my-2">{post.excerpt}</p>
      <p className="text-gray-600 text-sm">
        {dayjs(post.date).format('MMMM, YYYY')}
      </p>
      <div className="post mt-16">
        <RichText render={post.content} />
      </div>
    </main>
  </>
)

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug }
}) => {
  const meta = await content.meta()
  const post = await content.post(slug as string)

  return {
    props: {
      meta,
      post
    }
  }
}

export default Blog
