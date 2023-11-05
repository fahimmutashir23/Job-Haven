import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { Tab, Tabs, TabList, } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryJob from "./CategoryJob";

const Home = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryJob, setCategoryJob] = useState(null);
  const axios = useAxios();

  console.log(categoryJob);
  useEffect(() => {
    axios.get(`/category`).then((res) => setCategory(res.data));
  }, [axios]);

  useEffect(() => {
    axios.get(`/jobs?category=${data}`).then((res) => setCategoryJob(res.data));
  }, [axios, data]);

  return (
    <div>
      <h1 className="text-3xl">total data: {category?.length}</h1>
      <div className="flex justify-center gap-6">
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
    </div>
  );
};

export default Home;
