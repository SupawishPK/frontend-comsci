/* eslint-disable require-jsdoc */
/* eslint-disable react/react-in-jsx-scope */
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { AppProps } from 'next/app'

function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <div className="font-body">
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
