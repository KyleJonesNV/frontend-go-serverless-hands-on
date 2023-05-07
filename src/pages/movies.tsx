import AddMovie from '@/components/addMovie/addMovie'
import ListMovies from '@/components/listMovies/listMovies'
import { getToken } from '@/containers/cookies'

import Nav from '@/components/nav/nav'
import { useQuery, useMutation } from 'react-query'
import { environment } from '../../environment.prod'
import { useApplicationContext } from '@/components/useApplicationContext/useApplicationContext'
import LoginDialog from '@/components/login/login'

export type Movie = {
  Name: string
  Cover: string
  Description: string
}

const getMovies = async () => {
  let headers = new Headers()

  const token = await getToken()

  headers.set('Authorization', token)

  return fetch(environment.api + 'getAll', {
    method: 'POST',
    headers,
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.error(err))
}

function useMovies() {
  const { data, status } = useQuery('Movie', getMovies)

  useMutation

  return data?.body as Movie[]
}

function Content() {
  const user = useApplicationContext().cognitoUser
  const movies = useMovies()

  if (!user) return <LoginDialog opened={true} />

  return (
    <main>
      <Nav username={user?.getUsername()} />
      <ListMovies movies={movies} />
      <AddMovie />
    </main>
  )
}

export default function Movies() {
  return <Content />
}
