import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="mt-16 text-gray-500 text-sm">
    &copy; {new Date().getFullYear()} / Janet Paul
  </footer>
)
