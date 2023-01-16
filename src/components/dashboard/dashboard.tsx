import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import SidebarLink from "./sidebarlink";
import { AiOutlineHome } from "react-icons/ai";
import {
  BiMoviePlay,
  BiCameraMovie,
  BiCalendarEvent,
  BiLogOut,
} from "react-icons/bi";
import { useMediaQuery } from "@mui/material";
import { Drawer, IconButton } from "@mui/material";
import { BsList } from "react-icons/bs";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isTabletOrMobile = useMediaQuery("(max-width: 640px)");
  return (
    <div className='flex flex-col sm:flex-row  sm:min-h-screen bg-[#191919] font-[Poppins]'>
      <div className='lg:w-72  md:w-64 sm:w-32 rounded-tr-[45px] rounded-br-[45px] h-full bg-[#212121] max-h-full min-h-screen z-[40] hidden sm:block sticky left-0 top-0 '>
        <div className='w-[110px] mb-8 mx-auto py-10 '>
          <Link to='/'>
            <img src={`${require("../../images/logoo.png")}`} alt='' />
          </Link>
        </div>
        <div className='w-full h-full space-y-1'>
          <SidebarLink Icon={AiOutlineHome} to='/me/home'>
            Home
          </SidebarLink>
          <SidebarLink Icon={BiCameraMovie} to='/me/import'>
            Movies
          </SidebarLink>
          <SidebarLink Icon={BiMoviePlay} to='/me/history'>
            TV Series
          </SidebarLink>
          <SidebarLink Icon={BiCalendarEvent} to='/me/history'>
            Upcoming
          </SidebarLink>

          <button className='mt-10 absolute bottom-12 flex w-full text-base font-semibold text-[#666666] pl-16 border-r-4 py-5 border-[#5D387F00] hover:border-[#3DD2CC75]  items-center gap-6 m-auto'>
            <BiLogOut size={20} />
            <span className='sm:hidden md:block'>Log out</span>
          </button>
        </div>
      </div>
      <div className='w-full h-full block sm:hidden min-h-screen flex flex-col pb-4 md:pb-0'>
        <div>
          <div className='py-4 border-b  border-[#0000000d] bg-[#212121] w-full sm:sticky top-0 z-30'>
            <div className='max-w-[1050px] mx-auto flex justify-between items-center px-6'>
              <div>
                <div className='h-10 mx-auto block md:hidden'>
                  <Link to='/me/home'>
                    <img
                      src={`${require("../../images/logoo.png")}`}
                      alt=''
                      className='h-full'
                    />
                  </Link>
                </div>
              </div>
              {isTabletOrMobile ? (
                <IconButton onClick={() => setDrawerOpen(true)}>
                  <BsList size={20} className='text-[#3DD2CC]' />
                </IconButton>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
