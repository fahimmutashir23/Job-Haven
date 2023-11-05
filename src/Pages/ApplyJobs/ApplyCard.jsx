import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/Bs";

const ApplyCard = ({ job }) => {
  const { user } = useContext(AuthContext);
  const { job_title, salary, jobNumber } = job;

  return (
    <div>
      <div className="flex justify-between items-end p-6 bg-base-300 border border-black rounded-lg shadow">
        <div className="text-xl font-semibold">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {job_title}
          </h5>
          <h2 className="flex items-center gap-2">
            <BsPersonCircle></BsPersonCircle> Posted by : {user?.displayName}
          </h2>
          <h2 className="flex items-center gap-2">
            <FaHandHoldingUsd></FaHandHoldingUsd> Salary Range : {salary}
          </h2>
          <h2>Number of apply : {jobNumber}</h2>
        </div>
      </div>
    </div>
  );
};

ApplyCard.propTypes = {
  job: PropTypes.object,
};

export default ApplyCard;
