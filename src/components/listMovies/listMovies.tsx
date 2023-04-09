import { Movie } from '@/pages'
import MovieItem from '../movieItem/movieItem'

type Props = {
    movies: Movie[]
}

function listMovies(props: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 px-3 py-3">
        {props.movies?.map((movie) => (
            <>
                <MovieItem movie={movie} />
            </>
        ))}
    </div>
  )
}

export default listMovies
