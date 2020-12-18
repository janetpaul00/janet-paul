import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => {
  const { asPath } = useRouter()

  return (
    <header className="flex items-center justify-between lg:mt-8 mb-16">
      <Link href="/">
        <a className="text-teal-600 text-2xl lg:text-3xl font-semibold">
          Janet Paul
        </a>
      </Link>
      <nav className="font-medium">
        <a className="text-gray-700" href="/docs/resume.pdf">
          Resume
        </a>
        <NavLink href="/blog" path={asPath}>
          Blog
        </NavLink>
      </nav>
    </header>
  )
}

type NavLinkProps = {
  href: string
  path: string
}

const NavLink: FunctionComponent<NavLinkProps> = ({ children, href, path }) => (
  <Link href={href}>
    <a
      className={`font-medium ml-4 first:ml-0 ${
        (href === '/' ? path === href : path.startsWith(href))
          ? 'text-teal-500'
          : 'text-gray-700'
      }`}>
      {children}
    </a>
  </Link>
)
