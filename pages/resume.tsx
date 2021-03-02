import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Markdown from 'react-markdown'

import { Dates } from '../components'
import { getResume } from '../lib'
import { ResumeType } from '../types'

const Resume: NextPage<ResumeType> = ({ educations, experiences, meta }) => (
  <>
    <Head>
      <title>
        Resume / {meta.name} / {meta.subtitle}
      </title>
    </Head>

    <main className="bg-white rounded-xl p-8" id="resume">
      <header className="flex justify-between">
        <div>
          <Link href="/">
            <a>
              <h1 className="font-body font-semibold text-3xl">{meta.name}</h1>
            </a>
          </Link>
          <div className="font-medium mt-1">{meta.subtitle}</div>
          <Markdown className="text-xs text-gray-500">{meta.bio}</Markdown>
        </div>
        <div className="text-xs text-right ml-8">
          <div>
            <a className="text-gray-500" href={`tel:${meta.phone}`}>
              {meta.phone}
            </a>
          </div>
          <div className="mt-1">
            <a className="text-gray-500" href={meta.linkedin}>
              {meta.linkedin.slice(12)}
            </a>
          </div>
          <div className="mt-1">
            <a className="text-gray-500" href={`mailto:${meta.email}`}>
              {meta.email}
            </a>
          </div>
        </div>
      </header>

      <section className="flex mt-8">
        <h2 className="font-body font-medium text-gray-500 w-32">Experience</h2>

        <div className="flex-1">
          {experiences.map(({ company, content, from, id, position, to }) => (
            <article className="mt-4 first:mt-0" key={id}>
              <div className="flex items-center">
                <h3 className="font-body font-medium text-teal-700">
                  {position}
                </h3>
                <div className="ml-2 font-medium">{company}</div>
                <Dates
                  className="ml-2 text-gray-500 text-xs"
                  from={from}
                  to={to}
                  type="experience"
                />
              </div>
              <Markdown className="text-xs">{content}</Markdown>
            </article>
          ))}
        </div>
      </section>

      <section className="flex mt-8">
        <h2 className="font-body font-medium text-gray-500 w-32">Education</h2>

        <div className="flex-1 grid gap-4 grid-cols-2">
          {educations.map(({ degree, from, id, school, to }) => (
            <article key={id}>
              <h3 className="font-body font-medium text-teal-700">{degree}</h3>
              <div className="text-sm font-medium my-1">{school}</div>
              <Dates
                className="text-gray-500 text-xs"
                from={from}
                to={to}
                type="education"
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  </>
)

export const getStaticProps: GetStaticProps<ResumeType> = async () => {
  const resume = await getResume()

  return {
    props: {
      ...resume
    }
  }
}

export default Resume
