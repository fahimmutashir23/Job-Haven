import PropTypes from "prop-types";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const Table = ({ item }) => {
  return (
    
      <tr>
        <td>{item.name}</td>
        <td>{item.job_title}</td>
        <td>{item.category}</td>
        <td className="flex flex-col md:flex-row gap-1 items-center">
            <Link
            to={`/update/${item._id}`}
             className="bg-blue-600 text-white w-16 text-xs py-1 text-center rounded-md flex items-center gap-1 justify-center cursor-pointer">
                Update
                <AiFillEdit></AiFillEdit>
            </Link>
            <div className="bg-blue-600 text-white w-16 text-xs py-1 text-center rounded-md flex items-center gap-1 justify-center cursor-pointer">
                Delete
                <AiFillDelete></AiFillDelete>
            </div>
        </td>
      </tr>
  );
};

Table.propTypes = {
  item: PropTypes.node,
};

export default Table;
