import "../Styles/Swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import Picture_0 from "../../../Common/Pictures/Swiper/0.png";
import Picture_1 from "../../../Common/Pictures/Swiper/1.jpg";
import Picture_2 from "../../../Common/Pictures/Swiper/2.jpg";
import Picture_3 from "../../../Common/Pictures/Swiper/3.jpg";
import Picture_4 from "../../../Common/Pictures/Swiper/4.jpg";
import Picture_5 from "../../../Common/Pictures/Swiper/5.jpg";
import Picture_6 from "../../../Common/Pictures/Swiper/6.jpg";
import Picture_7 from "../../../Common/Pictures/Swiper/7.jpg";
import Picture_8 from "../../../Common/Pictures/Swiper/8.jpg";
import Picture_9 from "../../../Common/Pictures/Swiper/9.jpg";
import { useEffect, useState } from "react";

export const SwiperBlock = () => {
  const [windowor, setwindowor] = useState(4);
  const [windowsp, setwindowsp] = useState(10);

  useEffect(() => {
    console.log("asd");
    if (window.innerHeight > window.innerWidth) {
      setwindowor(1);
      setwindowsp(100)
    } else {
      setwindowor(4);
      setwindowsp(10)

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <div className="SwiperBlock">
      <Swiper
        slidesPerView={windowor}
        spaceBetween={100}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Picture_0} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Picture_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Picture_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Picture_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Picture_4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Picture_5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Picture_6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Picture_7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Picture_8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Picture_9} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
