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
  posts: Post[]
}

const Blog: NextPage<Props> = ({ meta, posts }) => (
  <>
    <Head>
      <title>
        Blog / {meta.name} / {meta.subtitle}
      </title>
    </Head>

    <header className="relative">
      <h1 className="text-blue-500 text-2xl font-semibold">{meta.name}</h1>
      <p className="font-medium">{meta.subtitle}</p>
      <p className="text-3xl text-green-500 font-semibold mt-2">Blog</p>
      <Link href="/">
        <a className="absolute top-0 right-0 text-blue-500 font-medium">
          Resume
        </a>
      </Link>
    </header>

    <main>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <a className="flex items-center mt-8">
            <img src={post.image} className="h-40 w-40 mr-4" />
            <article>
              <h2 className="text-3xl font-medium leading-tight">
                {RichText.asText(post.title)}
              </h2>
              <p className="my-2">{post.excerpt}</p>
              <p className="text-gray-600 text-sm">
                {moment(post.date).format('lll')}
              </p>
            </article>
          </a>
        </Link>
      ))}
    </main>
  </>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const meta = await content.meta()
  const posts = await content.posts()

  return {
    props: {
      meta,
      posts
    }
  }
}

export default Blog
