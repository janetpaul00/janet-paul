import dayjs from 'dayjs'
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

    <main>
      <h1 className="text-4xl font-semibold">Blog</h1>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <a className="flex flex-col lg:flex-row lg:items-center mt-16">
            <img src={post.image} className="h-40 w-40" />
            <article className="mt-4 lg:mt-0 lg:ml-8">
              <h2 className="text-2xl font-semibold leading-tight">
                {RichText.asText(post.title)}
              </h2>
              <p className="my-2">{post.excerpt}</p>
              <p className="text-gray-600 text-sm">
                {dayjs(post.date).format('MMMM, YYYY')}
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
