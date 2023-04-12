import { Movie } from '@/pages'
import MovieItem from '../movieItem/movieItem'

type Props = {
    movies: Movie[]
}

function listMovies(props: Props) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 px-5 py-5">
        {props.movies?.map((movie) => (
            <>
                <MovieItem movie={movie} />
            </>
        ))}
    </div>
  )
}

export default listMovies
