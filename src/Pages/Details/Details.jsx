import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import moment from "moment/moment";
import { Helmet } from "react-helmet-async";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';

const Details = () => {
  const [data, setData] = useState(null);
  const axios = useAxios();
  const id = useParams();
  const { user } = useContext(AuthContext);
  const currentDate = moment().format("YYYY-MM-DD");

  const {
    email,
    deadline,
    description,
    category,
    jobNumber,
    job_title,
    photo,
    salary,
  } = data ? data : "";

  useEffect(() => {
    axios.get(`/jobs/${id.id}`).then((res) => setData(res.data));
  }, [axios, id, email]);

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
    const applyInfo = { name, email, resume, job_title, salary, category };
    const serviceId = "service_zx23i2o";
    const templateId = "template_q2ik2uu";
    const publicKey = "XgUPYfs_nTgL6BBf8"
    const templateParams = {
        from_email: user?.email,
        to_name : user?.displayName
    };

    axios.post("/applyJob", applyInfo).then((res) => {
      if (res.data.insertedId) {

        emailjs.send(serviceId, templateId, templateParams, publicKey)
          .then((response) => {
            if(response){
                Swal.fire({
                    position: "top-right",
                    title: "Successfully Apply and send email",
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
          }).reset();
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Job Heaven | Details</title>
      </Helmet>
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
            <div className="modal-box relative">
              <div className="modal-action ">
                <form method="dialog">
                  <button className=" absolute top-5 right-5">
                    <AiOutlineClose></AiOutlineClose>
                  </button>
                </form>
              </div>
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
                <div className="form-control mt-6 modal-action">
                  <button className="btn btn-primary">
                    <input type="submit" value="Submit" />
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Details;
