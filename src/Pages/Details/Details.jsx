import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import moment from "moment/moment";

const Details = () => {
  const [data, setData] = useState(null);
  const axios = useAxios();
  const id = useParams();
  const { user } = useContext(AuthContext);
  const currentDate = moment().format("YYYY-MM-DD");

  const {
    _id,
    name,
    email,
    category,
    deadline,
    description,
    jobNumber,
    job_title,
    photo,
    postingDate,
    salary,
  } = data ? data : "";

  useEffect(() => {
    axios.get(`/jobs/${id.id}`).then((res) => setData(res.data));
  }, [axios, id]);

  const handleApply = () => {
    if (email === user.email) {
      return Swal.fire({
        title: "You are not apply this job",
        text: "this job is posting you",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else if (currentDate > deadline) {
      return Swal.fire({
        title: "Sorry !",
        text: "Deadline is over this job",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      document.getElementById("my_modal_5").showModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const resume = e.target.resume.value;
    const applyInfo = {name, email, resume};
    console.log(applyInfo);
    axios.post("/applyJob", applyInfo)
    .then(res => {
        if(res.data.insertedId){
            Swal.fire({
                title: "Well Done",
                text: "Your apply is successful",
                icon: "success",
                confirmButtonText: "Cool",
              });
              e.target.reset()
        }
    })
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl bg-base-200 py-2 px-8 rounded-b-lg max-w-fit mx-auto mb-5">
        {job_title}
      </h1>
      <div>
        <div className="card mb-5 bg-neutral text-neutral-content">
          <div className="">
            <div className="flex gap-8">
              <img src={photo} alt="" className="w-1/2 rounded-l-2xl" />
              <div className="w-1/2 pr-5 mt-5">
                <div>
                  <span className="text-xl font-semibold text-orange-500">
                    Job Description :
                  </span>{" "}
                  <br /> {description}
                </div>
                <h1 className="mt-10">
                  <span className="text-orange-400 font-semibold text-xl">
                    Salary Range :
                  </span>{" "}
                  {salary}
                </h1>
                <h1 className="mt-2">
                  <span className="text-orange-400 font-semibold text-xl">
                    Apply Number :
                  </span>{" "}
                  {jobNumber}
                </h1>
                <h1 className="mt-2">
                  <span className="text-orange-400 font-semibold text-xl">
                    Deadline :
                  </span>{" "}
                  {deadline}
                </h1>
                <div className="card-actions justify-center my-5">
                  <button
                    onClick={handleApply}
                    className="btn w-full bg-orange-400 border-none"
                  >
                    Apply Job
                  </button>
                </div>
              </div>
            </div>
          </div>

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">

              <form onSubmit={handleSubmit} className="">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Resume Link</span>
                  </label>
                  <input
                    type="text"
                    name="resume"
                    placeholder="Resume URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    <input type="submit" value="Submit" />
                  </button>
                </div>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Details;
