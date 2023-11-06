import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Addjobs = () => {
    const {user} = useContext(AuthContext);
    const axios = useAxios()


  const handleSubmit = (e) => {
    e.preventDefault();
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
    console.log(formData);

    axios.post(`/jobs`, formData)
    .then(res => {
        if(res.data.insertedId){
            Swal.fire({
                title: "Added Successfully",
                text: "Thank You for contribution us",
                icon: "success",
                confirmButtonText: "Cool",
              });
              e.target.reset()
        }
    })
  };
  return (
    <div>
      <Helmet><title>Job Heaven | Add Jobs</title></Helmet>
      <h1 className="text-center font-bold text-3xl bg-base-200 py-2 px-8 rounded-b-lg max-w-fit mx-auto mb-5">
        Add your job here
      </h1>
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
                  defaultValue={user.displayName}
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
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  required>
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
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:shadow-sm-light"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-5">
            <button type="submit" className="btn btn-primary w-1/2">
              Submit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addjobs;
