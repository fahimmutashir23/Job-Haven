import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router-dom";

const Details = () => {
    const [data, setData] = useState(null);
    const axios = useAxios();
    const id = useParams();

    useEffect(()=> {
        axios.get(`/jobs/${id.id}`)
        .then(res => setData(res.data))
    }, [axios, id])

    return (
        <div>
            <div>
                {data?.job_title}
            </div>
        </div>
    );
};

export default Details;