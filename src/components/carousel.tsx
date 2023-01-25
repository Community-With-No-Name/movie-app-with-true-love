import React, { useState, useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import Carousel from "react-material-ui-carousel";
import { SliderProps } from "../interface/interface";
import { carousel_url } from "../libs/endpoints";
import axios from "axios";

export default function ImageSlider() {
  const [data, setData] = useState<SliderProps[]>([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(carousel_url)
        .then((res) => setData(res.data.results))
        .catch((error) => alert("please reload the page"));
    };
    return fetchData();
  }, []);
  return (
    <div>
      <Carousel
        animation='fade'
        interval={6000}
        swipe={true}
        cycleNavigation={true}
        fullHeightHover={true}
        indicatorContainerProps={{
          className: "sr-only",
          style: {
            display: "none", // 5
          },
        }}
      >
        {data?.map((hero, i) => (
          <div
            key={hero.id}
            className='w-full bg-cover bg-top bg-no-repeat h-[390px] rounded-md'
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${hero?.backdrop_path})`,
            }}
          >
            <div className='bg-[#1d1d1d]/45 h-full w-full relative  flex flex-col justify-end p-12'>
              <div className='more-info  flex  xsm:items-end items-center gap-6 xsm:justify-end justify-center align-bottom'>
                <button className=' bg-[#E8E8E810] text-white py-[10px] flex gap-2 justify-center items-center px-[20px] rounded-[15px] shadow-[0px_2px_4px_[#00025]] backdrop-saturate-200'>
                  <span className=''>
                    <BsFillPlayFill size={24} />
                  </span>
                  Play
                </button>
                <button className='bg-[#E8E8E810] text-white py-[10px] flex gap-2 justify-center whitespace-nowrap items-center px-[14px] rounded-[15px] shadow-[0px_2px_4px_[#00025]] backdrop-saturate-200'>
                  <span className=''>
                    <HiInformationCircle size={24} />
                  </span>
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
