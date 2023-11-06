import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/Provider";
import { HashLoader } from "react-spinners";
import Table from "./Table";
import { Helmet } from "react-helmet-async";

const MyJobs = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading();
    axios.get(`/jobs?email=${user.email}`).then((res) => setData(res.data));
    setLoading(false);
  }, [axios, user]);

  return (
    <div>
        <Helmet><title>Job Heaven | My Jobs</title></Helmet>
      <h1 className="text-center font-bold text-3xl bg-base-200 py-2 px-8 rounded-b-lg max-w-fit mx-auto mb-5">
        Your Added Jobs
      </h1>
      <div className="flex justify-center mt-7">
        {loading ? <HashLoader color="#7752FE" /> : ""}
      </div>

        <div className="overflow-x-auto">
          <table className="table text-lg font-semibold">
            <thead>
              <tr className="text-xl">
                <th>Name</th>
                <th>Job</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <Table key={item._id} item={item} data={data}></Table>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default MyJobs;
