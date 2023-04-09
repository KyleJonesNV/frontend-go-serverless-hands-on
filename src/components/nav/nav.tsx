type Props = {

}

function Nav(props: Props) {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center mx-auto p-4">
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className=""></span>
        </button>
        <a href="#">Movies</a>
        <div className="w-full flex ml-2 items-center" id="navbar-default">
          <ul className="mr-auto">
            <li>
              <a href="#">
                New <span>(current)</span>
              </a>
            </li>
          </ul>
          <form className="inline-flex">
            <input type="text" placeholder="Search ..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <div className="ml-2"></div>
            <button className="text-white bg-transparent px-3 rounded border outline-blue-500 border-blue-500 dark:outline-blue-500 dark:border-blue-500" >GO!</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Nav
