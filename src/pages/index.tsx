import { Inter } from 'next/font/google'
import Nav from '@/components/nav/nav'
import ListMovies from '@/components/listMovies/listMovies'
import { environment } from '../../environment'
import { QueryClient, QueryClientConfig, QueryClientProvider, useMutation, useQuery } from 'react-query'
import { error } from 'console'
import AddMovie from '@/components/addMovie/addMovie'

const inter = Inter({ subsets: ['latin'] })

export type Movie = {
  Name: string
  Cover: string
  Description: string
}

const getMovies = async () => {
  const res = await fetch(environment.api + 'getAll')
  return res.json()
}

function useMovies() {
  const { data, status } = useQuery('Movie', getMovies, )

  useMutation

  return data?.body as Movie[]
}

function Main() {
  const movies = useMovies()

  return (
    <main>
      <Nav />
      <ListMovies movies={movies} />
      <AddMovie />
    </main>
  )
}

export default function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  )
}
