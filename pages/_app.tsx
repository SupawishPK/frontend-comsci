import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { AppProps } from 'next/app'

// eslint-disable-next-line require-jsdoc
function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />
}
export default MyApp
