import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import Swal from "sweetalert2";
import { HashLoader } from "react-spinners";

const PrivetRouts = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

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
    });
  }
};

PrivetRouts.propTypes = {
  children: PropTypes.node,
};

export default PrivetRouts;
