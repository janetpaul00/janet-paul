import Link from 'next/link'
import React, { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => (
  <header className="flex items-center justify-between mb-16">
    <Link href="/">
      <a className="text-red-500 font-semibold text-xl mr-8">Janet Paul</a>
    </Link>
    <nav className="font-medium">
      <a href="/Janet Paul.pdf" className="text-indigo-500">
        Resume
      </a>
      <Link href="/blog">
        <a className="text-green-500 ml-4">Blog</a>
      </Link>
    </nav>
  </header>
)
