import moment from 'moment'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { content } from '../lib'
import { Education, Experience, Meta } from '../types'

interface Props {
  education: Education[]
  experience: Experience[]
  meta: Meta
}

const Home: NextPage<Props> = ({ education, experience, meta }) => (
  <>
    <Head>
      <title>
        {meta.name} / {meta.subtitle}
      </title>
    </Head>

    <header className="relative">
      <h1 className="text-blue-500 text-4xl font-semibold">{meta.name}</h1>
      <p className="text-xl font-medium">{meta.subtitle}</p>
      <Link href="/blog">
        <a className="absolute top-0 right-0 text-green-500 font-medium">
          Blog
        </a>
      </Link>
    </header>

    <main className="my-auto">
      <section className="mt-8">
        <h2 className="text-purple-500 text-2xl font-semibold">Education</h2>
        <div className="cards">
          {education.map((education, index) => (
            <article key={index} className="card">
              <h4 className="text-lg text-gray-700">{education.school}</h4>
              <h3 className="text-xl font-medium">{education.degree}</h3>
              <p className="text-gray-600">
                {moment(education.graduation).format('MMM YYYY')}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-orange-500 text-2xl font-semibold">Experience</h2>
        <div className="cards">
          {experience.map((experience, index) => (
            <article
              key={index}
              className="card"
              style={{
                flexBasis: `calc((100% / 3) * ${
                  experience.type === 'List' ? 2 : 1
                })`
              }}>
              <div className="experience">
                <h3 className="text-xl font-medium">{experience.title}</h3>
                <h4 className="text-lg text-gray-700">{experience.company}</h4>
                <p className="text-gray-600">
                  {moment(experience.from).isSame(experience.to)
                    ? moment(experience.to).format('MMM YYYY')
                    : `${moment(experience.from).format('MMM YYYY')}–${moment(
                        experience.to
                      ).format('MMM YYYY')}`}
                </p>
              </div>
              {experience.type === 'List' ? (
                <ul className="list">
                  {experience.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              ) : (
                <div>
                  {experience.description.map((description, index) => (
                    <p className="mt-2" key={index}>
                      {description}
                    </p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-red-500 text-2xl font-semibold">
          Skills and qualities
        </h2>
        <ul className="mt-2">
          {meta.skills.map((skill, index) => (
            <li key={index}>
              <span className="font-medium">{skill.title} </span>
              <span className="text-gray-700">{skill.description}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-8 text-gray-700">{meta.recommendation}</div>
    </main>

    <footer>
      <a href={meta.linkedin} className="mt-4 lg:mt-0">
        <span className="font-medium">{meta.linkedin.split('/').pop()}</span>
        <span className="text-gray-600 block">LinkedIn</span>
      </a>
      <a href="mailto:hi@janetpaul.com" className="mt-4 lg:mt-0">
        <span className="font-medium">hi@janetpaul.com</span>
        <span className="text-gray-600 block">Email</span>
      </a>
      <a href={`tel:${meta.phone}`} className="mt-4 lg:mt-0">
        <span className="font-medium">
          {`${meta.phone.slice(0, 4)} ${meta.phone.slice(
            4,
            6
          )} ${meta.phone.slice(6, 9)} ${meta.phone.slice(9)}`}
        </span>
        <span className="text-gray-600 block">Phone</span>
      </a>
      <a href={meta.website} className="mt-4 lg:mt-0">
        <span className="font-medium">{meta.website.split('/').pop()}</span>
        <span className="text-gray-600 block">Web</span>
      </a>
    </footer>
  </>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const meta = await content.meta()
  const education = await content.education()
  const experience = await content.experience()

  return {
    props: {
      education,
      experience,
      meta
    }
  }
}

export default Home
