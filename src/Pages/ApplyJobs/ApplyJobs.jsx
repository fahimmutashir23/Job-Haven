import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/Provider";
import ApplyCard from "./ApplyCard";


const ApplyJobs = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`applyJob?email=${user.email}`).then((res) => {
      setData(res.data);
    });
  }, [axios, user]);

  const handleFilter = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl bg-base-200 py-2 px-8 rounded-b-lg max-w-fit mx-auto mb-5">
        Your Apply
      </h1>
      <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Job Category
                </label>
                <select 
                name="category"
                onChange={handleFilter} 
                className=" text-sm rounded-lg block w-52 p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  required>
                    <option value="Part Time">Part Time</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On Site Job">On Site Job</option>
                    <option value="Remote Job">Remote Job</option>
                  </select>
              </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
       {
        data?.map(item => <ApplyCard key={item._id} job={item}></ApplyCard>)
       }
      </div>
    </div>
  );
};

export default ApplyJobs;
