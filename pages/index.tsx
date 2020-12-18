import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Janet Paul / ACCA affiliate, CIMA certified</title>
    </Head>

    <main className="flex flex-col-reverse lg:flex-row items-start lg:items-center">
      <h1 className="flex-1 text-5xl lg:text-6xl font-semibold leading-tight mt-8">
        ACCA affiliated accountant from Dubai
      </h1>
      <Image
        className="rounded-full"
        height={200}
        src="/img/janet.jpg"
        width={200}
      />
    </main>
  </>
)

export default Home
