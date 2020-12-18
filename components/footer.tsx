import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="text-gray-500 lg:mb-8 mt-16">
    &copy; {new Date().getFullYear()}
  </footer>
)
