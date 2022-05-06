
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.css'
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import "fonts/line-awesome-1.3.0/css/line-awesome.min.css";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()
console.log('url',process.env.NEXT_PUBLIC_BACKEND_URL)
console.log('key',process.env.NEXT_PUBLIC_BACKEND_API_KEY)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="rtl:text-right bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
       <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
       </QueryClientProvider>
  </div>
  )
}

export default appWithTranslation(MyApp)
