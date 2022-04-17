import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
   <Component {...pageProps} />
  </div>
  )
}

export default MyApp
