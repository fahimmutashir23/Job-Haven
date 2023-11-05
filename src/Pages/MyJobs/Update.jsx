import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";

const Update = () => {
  const axios = useAxios();
  const id = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext);
  
  const {_id, name, category, deadline, description, jobNumber, job_title, photo, postingDate, salary} = data?data : "";

  useEffect(() => {
    setLoading();
    axios.get(`/jobs/${id.id}`).then((res) => setData(res.data));
    setLoading(false);
  }, [axios, id]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const job_title = e.target.job_title.value;
    const salary = e.target.salary.value;
    const category = e.target.category.value;
    const jobNumber = e.target.jobNumber.value;
    const postingDate = e.target.postingDate.value;
    const deadline = e.target.deadline.value;
    const photo = e.target.photo.value;
    const description = e.target.description.value;
    const formData = {email:user?.email, name, job_title, jobNumber, salary, category, deadline, photo, description, postingDate}

    axios.put(`/jobs/${_id}`, formData)
    .then(res => {
        if(res.data.modifiedCount){
            Swal.fire({
                title: "Update Successfully",
                text: "Thank You for contribution us",
                icon: "success",
                confirmButtonText: "Cool",
              });
        }
    })
  }


  return (
    <div>
      <h1 className="text-center font-bold text-3xl bg-base-200 py-2 px-8 rounded-b-lg max-w-fit mx-auto mb-5">
        Update Your Job
      </h1>
      <div className="flex justify-center mt-7">
        {loading ? <HashLoader color="#7752FE" /> : ""}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-3 px-10 py-4">
            <div className="w-1/2">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Job Title
                </label>
                <input
                  type="text"
                  name="job_title"
                  defaultValue={job_title}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Salary range
                </label>
                <input
                  type="text"
                  name="salary"
                  defaultValue={salary}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Job Category
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  required
                >
                  <option value="Part Time">Part Time</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="On Site Job">On Site Job</option>
                  <option value="Remote Job">Remote Job</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Job Applicants Number
                </label>
                <input
                  type="text"
                  name="jobNumber"
                  defaultValue={jobNumber}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  required
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Posting Date
                </label>
                <input
                  type="date"
                  name="postingDate"
                  defaultValue={postingDate}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium ">
                  Job Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  defaultValue={deadline}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Job Banner Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Salary range
                </label>
                <textarea
                  rows="5"
                  name="description"
                  defaultValue={description}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <button type="submit" className="btn btn-primary font-bold w-1/2">
              Update Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
