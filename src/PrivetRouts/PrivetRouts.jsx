import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import Swal from "sweetalert2";
import { HashLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return <div className="flex justify-center my-7">
        <HashLoader color="#7752FE" />
    </div>
  } 
  else if (user) {
    return children;
  } 
  else {
    return Swal.fire({
      title: "You are not Logged in",
      text: "Please Login first to use this service",
      icon: "warning",
      confirmButtonText: "Cool",
    }) && <Navigate state={location.pathname} to="/login"></Navigate>
  }
};

PrivetRouts.propTypes = {
  children: PropTypes.node,
};

export default PrivetRouts;
