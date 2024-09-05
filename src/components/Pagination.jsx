import PropTypes from "prop-types";

const Pagination = ({ totalPages: pages, setStartItem, startItem }) => {
  const totalPages = [...Array(pages).keys()].map((item) => item + 1);
  return (
    <div className="flex mx-auto mt-8">
      <button
        disabled={startItem === 1}
        onClick={() => setStartItem(startItem - 1)}
        className="px-4 py-2 mx-1 text-gray-700 disabled:cursor-not-allowed transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200  hover:bg-blue-500 font-semibold  disabled:text-gray-400 hover:text-white dark:hover:text-gray-200"
      >
        <div className="flex items-center -mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1 rtl:-scale-x-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>

          <span className="mx-1 font-semibold">Previous</span>
        </div>
      </button>

      {totalPages.map((item) => (
        <button
          key={item}
          onClick={() => setStartItem(item)}
          className={`hidden px-4 py-2 mx-1 border rounded-md font-bold text-gray-700 transition-colors duration-300 transform bg-white  sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${
            startItem === item && "bg-blue-500 text-white"
          }`}
        >
          {item}
        </button>
      ))}

      <button
        disabled={startItem === pages}
        onClick={() => setStartItem(startItem + 1)}
        className="px-4 py-2 mx-1 text-gray-700 disabled:cursor-not-allowed transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200  hover:bg-blue-500  disabled:text-gray-400 hover:text-white dark:hover:text-gray-200"
      >
        <div className="flex items-center -mx-1">
          <span className="mx-1 font-semibold">Next</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1 rtl:-scale-x-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  setStartItem: PropTypes.func,
  startItem: PropTypes.number,
};

export default Pagination;
