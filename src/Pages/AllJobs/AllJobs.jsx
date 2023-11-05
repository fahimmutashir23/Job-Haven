import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import CategoryJob from "../Home/CategoryJob";

const AllJobs = () => {
  const [data, setData] = useState(null);
  const axios = useAxios();

  useEffect(() => {
    axios.get(`/jobs`).then((res) => setData(res.data));
  }, [axios]);

  return (
    <div>
      <div className="flex justify-between items-center mt-4 bg-gradient-to-r from-base-200 px-2 rounded-md">
        <h1 className=" text-3xl font-bold">All Jobs Here</h1>

        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-2 gap-3 my-5">
        {data?.map((item) => (
          <CategoryJob key={item._id} job={item}></CategoryJob>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
