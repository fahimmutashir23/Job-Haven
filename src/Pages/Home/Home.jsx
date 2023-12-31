import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { Tab, Tabs, TabList, } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryJob from "./CategoryJob";
import { HashLoader } from "react-spinners";
import Banner from "../../Components/Banner/Banner";
import { Helmet } from "react-helmet-async";
import ContactUs from "./ContactUs";
import HappyCustomer from "./HappyCustomer";
// import { useQuery } from "@tanstack/react-query";


const Home = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryJob, setCategoryJob] = useState();
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    setLoading(true)
    axios.get(`/category`).then((res) => setCategory(res.data));
    setLoading(false)
  }, [axios]);

  useEffect(() => {
    setLoading(true)
    axios.get(`/jobs?category=${data}`).then((res) => setCategoryJob(res.data));
    setLoading(false)
  }, [axios, data]);

  // const tanStackFunc = async() => {
  //   const response = await axios.get(`/jobs?category=${data}`);
  //   return response
  // }

  // const {data: categoryJob, isLoading} = useQuery({
  //   queryKey: ["jobData"],
  //   queryFn: tanStackFunc
  // })

  // if(isLoading){
  //   <div className="flex justify-center my-7">
  //       <HashLoader color="#7752FE" />
  //     </div>
  // }
  // console.log(categoryJob);

  return (
    <div>
      <Helmet><title>Job Heaven | Home</title></Helmet>
      <Banner></Banner>
      <div className="flex justify-center gap-6 mt-5">
      <div className="flex justify-center mt-7">
        {loading? <HashLoader color="#7752FE" />: ""}
        </div>
          <Tabs>
            <TabList>
              {
                category?.map(item => <Tab key={item._id} onClick={() => setData(item?.Category_name)}>
                {item?.Category_name}
              </Tab>)
              }
            </TabList>
          </Tabs>
      </div>

      <div className="md:grid grid-cols-2 gap-3 my-5">
        {categoryJob?.map((item) => (
          <CategoryJob key={item._id} job={item}></CategoryJob>
        ))}
      </div>
      <HappyCustomer></HappyCustomer>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
