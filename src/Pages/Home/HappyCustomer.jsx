import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { HashLoader } from "react-spinners";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";



const HappyCustomer = () => {
    const axios = useAxios();
    const tanStackFunc = async() => {
        const response = await axios.get('/customer');
        return response
    }

    const {data, isLoading} = useQuery({
        queryKey: ["customer"],
        queryFn: tanStackFunc
    })

    if(isLoading){
        return <div className="flex justify-center my-7">
        <HashLoader color="#7752FE" />
    </div>
    }
    console.log(data.data);

    return (
        <div>
            <section className="col-span-2" data-aos="fade-left">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            loop={true}
            slidesPerView={2.5}
          >
            {data.map((oneData) => (
              <SwiperSlide key={oneData.id} className="p-2">
                <Link
                  onClick={() => handleClick(oneData.id)}
                  className="hero h-[340px] rounded-2xl relative hover:scale-[1.05] transition 1s"
                  style={{
                    backgroundImage: `url(${oneData.vertical_banner_image})`,
                  }}
                >
                  <div className="h-20 w-full bg-black absolute bottom-0 bg-opacity-70 rounded-b-2xl font-babe text-3xl p-3">
                    {oneData.spot_name}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            <SwiperBtn></SwiperBtn>
          </Swiper>
        </section>
        </div>
    );
};

export default HappyCustomer;