import banner from "../../assets/image/jobsbnnner.jpg";
import person from "../../assets/image/jobPerson.png";
import { FaMicrophone, FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-fit overflow-hidden rounded-xl"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-blue-900 bg-opacity-80"></div>
        <div className="hero-content text-center flex flex-col md:flex-row text-neutral-content">
          <div className="md:w-1/2 md:pl-10">
            <h1 className="mb-5 text-4xl font-bold">Welcome to <br /> <span className="text-orange-500  text-6xl">Job Heaven</span></h1>
            <p className="mb-5">
              Explore endless career possibilities on our job portal. Find the
              perfect job that matches your skills and aspirations. Start your
              journey to success today!
            </p>
            <div>
              <form className="flex items-center">
                <label className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 21 21"
                    >
                      <path
                        stroke="currentColor"
                        d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search here..."
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <FaMicrophone></FaMicrophone>
                  </button>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-orange-500 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none"
                >
                 <FaSearch className="mr-2"></FaSearch>
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2">
            <img src={person} alt="" className="w-2/3 -mb-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
