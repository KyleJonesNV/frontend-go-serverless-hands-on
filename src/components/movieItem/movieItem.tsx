import { Movie } from '@/pages'

type Props = {
  movie: Movie
}

function MovieItem(props: Props) {
  return (
    <div className="max-w-m rounded overflow-hidden shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="object-cover rounded-t-lg w-fit h-max" src={props.movie.Cover} alt="movie title" />
      </a>
      <div className="p-5 flex flex-col mt-auto">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.movie.Name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.movie.Description}</p>
        <div className="">
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Rent
          </a>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
