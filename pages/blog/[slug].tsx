import dayjs from 'dayjs'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import React from 'react'

import { fetchPost } from '../../lib'
import { Post } from '../../types'

type Props = {
  post: Post
}

const Blog: NextPage<Props> = ({ post }) => (
  <>
    <Head>
      <title>{post.title} / Blog / Janet Paul</title>
    </Head>

    <main>
      <p className="text-gray-400">{dayjs(post.date).format('MMMM, YYYY')}</p>
      <h1 className="text-4xl font-semibold my-2">{post.title}</h1>
      <p className="text-gray-500">{post.excerpt}</p>
      <figure className="my-8">
        <Image height={1500} priority src={post.image} width={2000} />
      </figure>
      <div className="post">
        <RichText render={post.content} />
      </div>
    </main>
  </>
)

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug }
}) => {
  const post = await fetchPost(slug as string)

  return {
    props: {
      post
    }
  }
}

export default Blog
