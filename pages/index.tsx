import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Janet Paul / ACCA affiliate, CIMA certified</title>
    </Head>

    <header className="m-8">
      <h1 className="text-blue text-5xl font-semibold">Janet Paul</h1>
      <p className="text-2xl font-medium">ACCA affiliate, CIMA certified</p>
    </header>

    <main>
      <section className="m-8">
        <h2 className="text-orange text-3xl font-medium">Experience</h2>
        <article className="my-4">
          <h4 className="text-xl text-gray-700">Restrata</h4>
          <h3 className="text-2xl font-medium">Junior Accountant</h3>
          <p className="text-gray-600">Oct 2017—Jul 2020</p>
          <ul className="mt-2 list-disc ml-5">
            <li>Carried out trend review of costs </li>
            <li>Created dashboards for review against budgets and KPIs</li>
            <li>Responsible for employee utilization reports to management</li>
          </ul>
        </article>
        <article className="my-4">
          <h4 className="text-xl text-gray-700">KPMG</h4>
          <h3 className="text-2xl font-medium">Intern</h3>
          <p className="text-gray-600">Aug 2016</p>
          <ul className="mt-2 list-disc ml-5">
            <li>Worked for the consultancy department</li>
            <li>Reported to head of KPMG Business School</li>
            <li>
              Worked on a major customer experience improvement client project
            </li>
          </ul>
        </article>
      </section>
      <section className="m-8">
        <h2 className="text-purple text-3xl font-medium">Education</h2>
        <article className="my-4">
          <h4 className="text-xl text-gray-700">ACCA</h4>
          <h3 className="text-2xl font-medium">Affiliate</h3>
          <p className="text-gray-600">Sep 2019</p>
        </article>
        <article className="my-4">
          <h4 className="text-xl text-gray-700">CIMA</h4>
          <h3 className="text-2xl font-medium">Diploma</h3>
          <p className="text-gray-600">Sep 2017</p>
        </article>
        <article className="my-4">
          <h4 className="text-xl text-gray-700">
            University of Wollongong in Dubai
          </h4>
          <h3 className="text-2xl font-medium">Bachelor of Commerce</h3>
          <p className="text-gray-600">Oct 2014—Oct 2017</p>
        </article>
      </section>
      <section className="m-8">
        <h2 className="text-red text-3xl font-medium">Achievements</h2>
        <ul className="mt-2 list-disc ml-5">
          <li>Top graduate, University of Wollongong in Dubai, 2017</li>
          <li>
            Started and finished ACCA exams while being employed full-time
          </li>
          <li>
            Played key role in data migration to new finance software closely
            after joining
          </li>
          <li>
            Took over accounts payable function of UK subsidiary after staff
            changes
          </li>
          <li>
            Implemented improvements to internal processes that saved time and
            money
          </li>
          <li>
            Played key role in intern recruitment process, from creating
            assessment to interviewing
          </li>
          <li>
            Named employee of the month shortly after the program was
            introducted
          </li>
          <li>
            One of the first members of Quality Steering Committee at Restrata
          </li>
        </ul>
      </section>
    </main>

    <footer className="m-8">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Janet Paul
      </p>
      <a
        href="https://www.linkedin.com/in/janetpaul0"
        className="flex items-center mt-4">
        <span className="text-gray-600 mr-2">LinkedIn</span>
        <span>janetpaul0</span>
      </a>
      <a href="mailto:hi@janetpaul.com" className="flex items-center mt-4">
        <span className="text-gray-600 mr-2">Email</span>
        <span>hi@janetpaul.com</span>
      </a>
      <a href="tel:+971501818566" className="flex items-center mt-4">
        <span className="text-gray-600 mr-2">Phone</span>
        <span>+971 50 1818 566</span>
      </a>
    </footer>
  </>
)

export default Home
