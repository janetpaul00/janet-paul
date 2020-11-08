import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class Janet extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Janet
