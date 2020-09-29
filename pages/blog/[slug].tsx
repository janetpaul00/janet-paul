import moment from 'moment'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
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

    <header className="relative">
      <h1 className="text-blue-500 text-2xl font-semibold">{meta.name}</h1>
      <p className="font-medium">{meta.subtitle}</p>
      <nav className="absolute top-0 right-0">
        <Link href="/blog">
          <a className="text-green-500 font-medium">Blog</a>
        </Link>
        <Link href="/">
          <a className="text-blue-500 font-medium ml-4">Resume</a>
        </Link>
      </nav>
    </header>

    <main className="mt-8">
      <img src={post.image} className="block mx-auto mb-4" />
      <h2 className="text-3xl font-medium leading-tight">
        {RichText.asText(post.title)}
      </h2>
      <p className="my-2 text-sm">{post.excerpt}</p>
      <p className="text-gray-600 text-sm">{moment(post.date).format('lll')}</p>
      <div className="post">
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
