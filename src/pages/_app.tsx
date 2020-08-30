import React from 'react'
import { AppProps } from 'next/app'
import GlobelStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import themeDark from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={themeDark}>
      <Component {...pageProps} />
      <GlobelStyle />
    </ThemeProvider>
  )
}

export default MyApp
