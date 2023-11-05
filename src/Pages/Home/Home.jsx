import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState(null);
    const [category, setCategory] = useState(null);
    const [categoryJob , setCategoryJob] = useState(null);
    const axios = useAxios()
    
console.log(categoryJob);
    useEffect(() => {
        axios.get(`/category`)
        .then(res => setCategory(res.data))
    }, [axios])

    const handleClick = (name) => {
        setData(name)
        
    }

    useEffect(() => {
        axios.get(`/jobs?category=${data}`)
        .then(res => setCategoryJob(res.data))
    }, [axios, data])


    return (
        <div>
            <h1 className="text-3xl">total data: {category?.length}</h1>
            <div>
            {
                category?.map(item => <NavLink 
                    onClick={()=> handleClick(item?.Category_name)}
                    key={item._id}>{item?.Category_name}</NavLink>)
            }
            </div>

            <div>
            {
                    categoryJob?.map(item => <div key={item._id}>
                        {item?.job_title}
                    </div>)
                }
            </div>

        </div>
    );
};

export default Home;