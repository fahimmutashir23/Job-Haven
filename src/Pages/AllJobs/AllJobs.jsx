import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import CategoryJob from "../Home/CategoryJob";
import { HashLoader } from "react-spinners";

const AllJobs = () => {
  const [data, setData] = useState(null);
  const axios = useAxios();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios.get(`/jobs`).then((res) => setData(res.data));
    setLoading(false)
  }, [axios]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const search = e.target.value.toLowerCase();
    const filterData = data?.filter(item => item.job_title.toLowerCase().includes(search))
    setData(filterData)
    setLoading(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mt-4 bg-gradient-to-r from-base-200 px-2 rounded-md">
        <h1 className=" text-3xl font-bold">All Jobs Here</h1>

        <div className="form-control">
          <form className="input-group">
            <input
              type="text"
              name="search"
              onChange={handleSubmit}
              placeholder="Search…"
              className="input input-bordered"
            />
          </form>
        </div>
      </div>

      
      <div className="flex justify-center mt-7">
        {loading? <HashLoader color="#7752FE" />: ""}
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
