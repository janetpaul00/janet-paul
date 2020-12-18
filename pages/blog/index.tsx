import dayjs from 'dayjs'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { fetchPosts } from '../../lib'
import { Post } from '../../types'

type Props = {
  posts: Post[]
}

const Blog: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Blog / Janet Paul</title>
    </Head>

    <main>
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <a className="flex flex-col items-start lg:flex-row lg:items-center mt-16 text-black">
            <Image height={150} src={post.image} width={200} />
            <article className="flex-1 mt-4 lg:mt-0 lg:ml-8">
              <p className="text-gray-400">
                {dayjs(post.date).format('MMMM, YYYY')}
              </p>
              <h2 className="text-2xl font-semibold my-2">{post.title}</h2>
              <p className="text-gray-500">{post.excerpt}</p>
            </article>
          </a>
        </Link>
      ))}
    </main>
  </>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await fetchPosts()

  return {
    props: {
      posts
    }
  }
}

export default Blog
