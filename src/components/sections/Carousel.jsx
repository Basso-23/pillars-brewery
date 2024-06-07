import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import ArrowOrange from "../icons/ArrowOrange";
const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [squaresView, setSquaresView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const getSquaresView = (width) => {
      if (width > 1500) return 5;
      if (width > 1200) return 4;
      if (width > 950) return 3;
      if (width > 700) return 2;
      return 1;
    };

    setSquaresView(getSquaresView(windowWidth));
  }, [windowWidth]);

  const Square = ({ image }) => {
    return (
      <SwiperSlide>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="square sm:w-full w-[90%]"
        ></div>
      </SwiperSlide>
    );
  };

  return (
    <section className="flex gap-10 mt-[60px]">
      <div className="w-fit px-16 my-auto sm:block hidden">
        <div className="benguiat text-[36px] leading-[32px]">
          BEER <br />
          REVIEWS
        </div>
        <div className="flex justify-end mt-3">
          <ArrowOrange />
        </div>
      </div>

      <Swiper
        slidesPerView={squaresView}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="cursor-grab flex-1"
      >
        <SwiperSlide>
          <Square image={"https://i.imgur.com/GUxZXqQ.jpeg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Square image={"https://i.imgur.com/Ofo2Q34.jpeg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Square image={"https://i.imgur.com/YzEy1sx.jpeg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Square image={"https://i.imgur.com/UpmJLEH.jpeg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Square image={"https://i.imgur.com/DVrNAKT.jpeg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Square image={"https://i.imgur.com/O25Kbr6.jpeg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Square image={"https://i.imgur.com/vJD0VCp.jpeg"} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
