import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { HashLoader } from "react-spinners";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import SwiperBtn from "../../Components/SwiperBtn/SwiperBtn";
import { useState } from "react";
import { motion } from "framer-motion";

const HappyCustomer = () => {
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const axios = useAxios();

  const tanStackFunc = async () => {
    const response = await axios.get("/customer");
    return response;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["customer"],
    queryFn: tanStackFunc,
  });
  

  if (isLoading) {
    return (
      <div className="flex justify-center my-7">
        <HashLoader color="#7752FE" />
      </div>
    );
  }

  const handleReview = (review, name) => {
    setReview(review);
    setName(name);
  };

  return (
    <div className="">
      <hr />
      <h1 className="text-center font-bold text-3xl bg-base-200 py-2 px-8 rounded-b-lg max-w-fit mx-auto mb-5">
        Review who got job
      </h1>
      <section className="max-w-3xl mx-auto">
        <div className="h-44 max-w-2xl mx-auto bg-base-200 border-2 border-double border-orange-400 p-4 relative overflow-y-auto">
          <p>{review}</p>
          <p className="text-sm font-semibold max-w-fit absolute bottom-0 right-0 border-t-2 border-l-2 border-double border-orange-400 p-2">
            {name}
          </p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={0}
            loop={true}
            slidesPerView={4}
          >
            {data.data.map((oneData) => (
              <SwiperSlide key={oneData.id} className="p-2">
                <div
                  onClick={() =>
                    handleReview(oneData.short_review, oneData.name)
                  }
                  className="rounded-2xl cursor-pointer"
                >
                  <motion.div
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                   className="flex flex-col items-center">
                    <img
                      src={oneData.photo}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                    {oneData.name}
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
            <div className="flex justify-center mb-5">
              <SwiperBtn></SwiperBtn>
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default HappyCustomer;
