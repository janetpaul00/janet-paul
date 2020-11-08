import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { content } from '../lib'
import { Meta } from '../types'

interface Props {
  meta: Meta
}

const Home: NextPage<Props> = ({ meta }) => (
  <>
    <Head>
      <title>
        {meta.name} / {meta.subtitle}
      </title>
    </Head>

    <main>
      <img className="w-full" src="/resume.png" />
    </main>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const meta = await content.meta()

  return {
    props: {
      meta
    }
  }
}

export default Home
