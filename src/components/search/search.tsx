import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
type Props = {};

export default function Search({}: Props) {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className=' w-full flex  justify-between items-center md:px-6 lg:px-10 md:pb-2  sm:pt-14 md:pt-16'>
        <div className='flex justify-start gap-4 md:flex-[.7]  flex-1 md:mx-0 sm:mx-10 mx-6 my-5 md:my-0 items-center bg-[#212121] outline-none rounded-[30px] px-8 py-[19px] w-full'>
          <span className=' text-[#666666]'>
            <BiSearch size={24} />
          </span>
          <input
            type='search'
            name='search'
            id=''
            value={searchText}
            placeholder='Search for movies, TV shows...'
            onChange={(e) => setSearchText(e.target.value)}
            className=' text-[#666666] w-full bg-transparent h-[inherit] border-0 outline-none text-lg leading-[20px]'
          />
        </div>
        <div className='  md:justify-end justify-around flex md:py-0 py-2 sm:pr-32 md:pr-0  md:relative fixed bottom-0 md:bg-inherit bg-[#191919] w-full gap-7 items-center md:flex-[.25] flex-1 '>
          <div className='notification w-[70px] h-[70px] rounded-[50%] bg-[#212121] text-[#666666]  flex justify-center items-center'>
            <IoMdNotificationsOutline size={24} />
          </div>
          <div className='profile w-[70px] h-[70px] rounded-[50%] bg-[#212121] text-[#666666]  flex justify-center items-center'>
            <img
              className='rounded-[50%]'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdWpgMnntaATYMdiMoT4OXW6x13gUAJYugQ&usqp=CAU'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
}
