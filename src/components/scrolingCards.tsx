import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ScrollingProps } from "../interface/interface";

export default function ScrolingCards({
  children,
  speed,
  title,
  url,
}: ScrollingProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: speed,
  };
  return (
    <div className='flex flex-col w-full py-4'>
      <div className='flex justify-between items-center font-[Poppins]'>
        <h4 className='text-[#E8E8E8] font-semibold tex-[22px] '>{title}</h4>
        <span className='text-[#666666] text-sm'>
          <Link to={url}>See all</Link>
        </span>
      </div>
      <div className='overflow-hidden h-[380px] mt-6'>
        <div className=' overflow-x-scroll w-full h-[400px] overflow-y-hidden  px-6'>
          <div className='flex gap-6'>
            <Slider {...settings} className='flex lg:w-[1248px] '>
              {children}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
