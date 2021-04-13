import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Markdown from 'react-markdown'

import { Footer, Header } from '../components'
import { getMeta } from '../lib'
import { MetaType } from '../types'

type Props = {
  meta: MetaType
}

const Home: NextPage<Props> = ({ meta }) => (
  <>
    <Head>
      <title>
        {meta.name} / {meta.subtitle}
      </title>
    </Head>

    <Header meta={meta} />

    <main className="flex flex-col-reverse lg:flex-row items-start lg:items-center">
      <div className="flex-1 mt-8 lg:mt-0 lg:mr-8">
        <h1 className="text-4xl lg:text-6xl font-semibold lg:whitespace-pre">
          {meta.subtitle.split(' | ').map((part) => (
            <span className="block" key={part}>
              {part}
            </span>
          ))}
        </h1>
        <Markdown className="mt-4">{meta.bio}</Markdown>
      </div>

      <Image
        className="bg-gray-50 rounded-full"
        height={meta.photo.height / 2}
        priority
        src={meta.photo.url}
        width={meta.photo.width / 2}
      />
    </main>

    <Footer />
  </>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const meta = await getMeta()

  return {
    props: {
      meta
    }
  }
}

export default Home
