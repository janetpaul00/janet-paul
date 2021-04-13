import 'tailwindcss/tailwind.css'
import '../styles/global.scss'

import { AppProps } from 'next/app'
import { usePanelbear } from 'next-use-panelbear'
import React, { FunctionComponent } from 'react'

const Janet: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  usePanelbear('F6zxf3qdC5y')

  return <Component {...pageProps} />
}

export default Janet
