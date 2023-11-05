import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { AiOutlineCalendar, AiOutlineClockCircle, } from "react-icons/ai";
import { FaHandHoldingUsd, } from "react-icons/fa";
import { BsPersonCircle, } from "react-icons/Bs";

const CategoryJob = ({ job }) => {
  const { user } = useContext(AuthContext);
  const { job_title, posting_date, deadline, salary_range, apply_number } = job;

  return (
    <div>
      <div className="flex justify-between items-end p-6 bg-base-300 border border-black rounded-lg shadow">
        <div className="text-xl font-semibold">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {job_title}
          </h5>
          <h2 className="flex items-center gap-2"><BsPersonCircle></BsPersonCircle> Posted by : {user?.displayName}</h2>
          <h2 className="flex items-center gap-2"><FaHandHoldingUsd></FaHandHoldingUsd> Salary Range : {salary_range}</h2>
          <h2>Number of apply : {apply_number}</h2>
          <h2 className="flex items-center gap-2"><AiOutlineCalendar></AiOutlineCalendar> Posting Date : {posting_date}</h2>
          <h2 className="flex items-center gap-2"><AiOutlineClockCircle></AiOutlineClockCircle> Deadline : {deadline}</h2>
        </div>
        <div className="flex justify-end">
          <Link
            to=""
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

CategoryJob.propTypes = {
  job: PropTypes.object,
};

export default CategoryJob;
