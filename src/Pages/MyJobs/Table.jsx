import PropTypes from "prop-types";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";
import Swal from "sweetalert2";

const Table = ({ item, data }) => {
    const axios = useAxios()
    const [tableData, setTableData] = useState(item)

    const handleDelete = (e) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/jobs/${e}`)
                .then(res => {
                    if(res.data.deletedCount){
                        const filterData = data?.filter(item => item._id !== e);
                        setTableData(filterData)
                        Swal.fire({
                            title: "Delete Successfully",
                            text: "Thank You for contribution us",
                            icon: "success",
                            confirmButtonText: "Cool",
                          });
                    }
                })
            }
          })
    }
  return (
    
      <tr>
        <td>{tableData.name}</td>
        <td>{tableData.job_title}</td>
        <td>{tableData.category}</td>
        <td className="flex flex-col md:flex-row gap-1 items-center">
            <Link
            to={`/update/${tableData._id}`}
             className="bg-blue-600 text-white w-16 text-xs py-1 text-center rounded-md flex items-center gap-1 justify-center cursor-pointer">
                Update
                <AiFillEdit></AiFillEdit>
            </Link>
            <div onClick={()=> handleDelete(tableData._id)} className="bg-blue-600 text-white w-16 text-xs py-1 text-center rounded-md flex items-center gap-1 justify-center cursor-pointer">
                Delete
                <AiFillDelete></AiFillDelete>
            </div>
        </td>
      </tr>
  );
};

Table.propTypes = {
  item: PropTypes.object,
  data: PropTypes.array
};

export default Table;
