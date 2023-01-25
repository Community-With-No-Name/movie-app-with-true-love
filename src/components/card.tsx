import { CardProps } from "../interface/interface";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Skeleton } from "@mui/material";

export default function Card({ data, type }: CardProps) {
  return (
    <Link to={type === "movie" ? `/movie/${data?.id}` : `/tv/${data?.id}`}>
      <div
        className='bg-cover bg-no-repeat bg-center font-[Poppins] h-[315px] w-[200px] relative rounded-[20px] shadow'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`,
        }}
      >
        <div className='rounded-l-[20px] rounded-r-[20px] absolute top-0 right-0'>
          <div className='flex justify-center items-center px-3 py-2 bg-[#E8E8E810]  gap-2  rounded-bl-[20px] rounded-tr-[20px] shadow-[0px_2px_4px_[#00025]] backdrop-saturate-200'>
            <span className='text-[yellow]'>
              <AiFillStar size={16} />
            </span>
            <span className='text-[#E8E8E8] text-sm'>{data.vote_average}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
