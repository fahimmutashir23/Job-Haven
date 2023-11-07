import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const SwiperBtn = () => {
    const swiper = useSwiper()
    return (
            <div className="mt-2">
                <button className="btn btn-circle btn-sm mr-2" onClick={()=>swiper.slidePrev()}>
                    <FaArrowLeft></FaArrowLeft>
                </button>
                <button className="btn btn-circle btn-sm" onClick={()=>swiper.slideNext()}>
                    <FaArrowRight></FaArrowRight>
                </button>
            </div>
    );
};

export default SwiperBtn;