import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import { MetaType } from '../types'

type Props = {
  meta: MetaType
}

export const Header: FunctionComponent<Props> = ({ meta }) => (
  <header className="flex items-center justify-between lg:mt-8 mb-16">
    <Link href="/">
      <a className="text-teal-600 text-2xl lg:text-3xl font-display font-semibold">
        {meta.name}
      </a>
    </Link>
    <nav className="font-medium">
      <Link href="/resume">
        <a className="text-black">Resume</a>
      </Link>
    </nav>
  </header>
)
