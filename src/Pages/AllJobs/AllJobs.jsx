import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import CategoryJob from "../Home/CategoryJob";
import { HashLoader } from "react-spinners";
import { Helmet } from "react-helmet-async";
// import { useQuery } from "@tanstack/react-query";

const AllJobs = () => {
  const [data, setData] = useState(null);
  const axios = useAxios();
  const [loading, setLoading] = useState(true)

  // const jobsFunc = async () => {
  //   const response = await axios.get("/jobs");
  //   return response;
  // };

  // const {data : jobs, isLoading, status} = useQuery({
  //   queryKey: ["allJobs"],
  //   queryFn: jobsFunc,
  // })

  // if(isLoading){
  //   return <div className="flex justify-center my-7">
  //   <HashLoader color="#7752FE" />
  // </div>
  // }
  // else if(status === "success"){
  //   setData(jobs.data)
  // }

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
  }

  return (
    <div>
        <Helmet><title>Job Heaven | All Jobs</title></Helmet>
      <div className="flex justify-between items-center mt-4 bg-gradient-to-r from-base-200 px-2 rounded-md">
        <h1 className=" text-3xl font-bold">All Jobs Here</h1>
        <div className="flex justify-center mt-7">
        {loading? <HashLoader color="#7752FE" />: ""}
        </div>
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

      
      

      <div className="md:grid grid-cols-2 gap-3 my-5">
        {data?.map((item) => (
          <CategoryJob key={item._id} job={item}></CategoryJob>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
