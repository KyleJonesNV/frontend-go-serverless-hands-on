import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import awsExports from '../../aws-exports'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ApplicationContextProvider } from '@/components/useApplicationContext/useApplicationContext'

Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
  },
})

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationContextProvider>
        <Component {...pageProps} />
      </ApplicationContextProvider>
    </QueryClientProvider>
  )
}
