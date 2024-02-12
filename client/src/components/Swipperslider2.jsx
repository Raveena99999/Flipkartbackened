import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Swipperslider1 from "./Swipperslider1";
import Asset26 from "../assets/flipkartAssets/asset 26.jpeg";
import Asset28 from "../assets/flipkartAssets/asset 28.jpeg";
import Asset30 from "../assets/flipkartAssets/asset 30.jpeg";
import Asset32 from "../assets/flipkartAssets/asset 32.jpeg";
import { Box } from "@chakra-ui/react";

export default function Swipperslider2() {
  return (
    <Box w="96%" m="auto" mt="1.5%">
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        direction={"horizontal"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Swipperslider1 images={Asset26} />
        </SwiperSlide>
        <SwiperSlide>
          <Swipperslider1 images={Asset28} />
        </SwiperSlide>
        <SwiperSlide>
          <Swipperslider1 images={Asset30} />
        </SwiperSlide>
        <SwiperSlide>
          <Swipperslider1 images={Asset32} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
