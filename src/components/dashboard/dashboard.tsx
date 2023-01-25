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
import { FaRegWindowClose } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";
import { Drawer, IconButton } from "@mui/material";
import { BsList } from "react-icons/bs";

export default function DashboardLayout() {
  // const [open, setOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const isTabletOrMobile = useMediaQuery("(max-width: 640px)");
  return (
    <>
      <div className=' flex-col sm:flex-row  sm-h-screen font-[Poppins] lg:w-72  md:w-56 sm:w-32 rounded-tr-[45px] rounded-br-[45px] h-full bg-[#212121] max-h-full min-h-screen z-[40] hidden sm:block sticky left-0 top-0 bottom-0'>
        <div className=''>
          <div className='md:w-[110px] sm:w-[80px] mb-8 mx-auto py-10 '>
            <Link to='/'>
              <img src={`${require("../../images/logoo.png")}`} alt='' />
            </Link>
          </div>
          <div className='w-full h-full space-y-1'>
            <SidebarLink Icon={AiOutlineHome} to='/'>
              Home
            </SidebarLink>
            <SidebarLink Icon={BiCameraMovie} to='/movies'>
              Movies
            </SidebarLink>
            <SidebarLink Icon={BiMoviePlay} to='/tv-series'>
              TV Series
            </SidebarLink>
            <SidebarLink Icon={BiCalendarEvent} to='/upcoming'>
              Upcoming
            </SidebarLink>

            <button className='mt-10 absolute bottom-12 flex w-full text-base font-semibold text-[#666666]  z-[1000] pl-8 border-r-4 py-4 border-[#5D387F00] hover:border-[#3DD2CC75]  items-center gap-6 m-auto'>
              <BiLogOut size={20} />
              <span className='sm:hidden md:block'>Log out</span>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full h-full  sm:hidden  flex flex-col pb-4 md:pb-0 sticky top-0 z-[1000]'>
        <div>
          <div className='py-4 border-b  border-[#0000000d] bg-[#212121] md:z-0 z-[1000] w-full sm:sticky top-0 '>
            <div className='mx-auto flex justify-between items-center px-3'>
              <div>
                <div className='h-10 mx-auto block'>
                  <Link to='/'>
                    <img
                      src={`${require("../../images/logoo.png")}`}
                      alt=''
                      className='h-full'
                    />
                  </Link>
                </div>
              </div>

              <IconButton onClick={() => setDrawerOpen(true)}>
                <BsList size={20} className='text-[#3DD2CC]' />
              </IconButton>
              {isTabletOrMobile && (
                <Drawer
                  open={isDrawerOpen}
                  anchor={"left"}
                  PaperProps={{
                    sx: {
                      backgroundColor: "#212121",
                    },
                  }}
                  onClose={() => setDrawerOpen(false)}
                >
                  <div className='flex justify-between gap-2 w-64 px-4 pt-6'>
                    <Link to='/'>
                      <img
                        src={`${require("../../images/logoo.png")}`}
                        alt=''
                      />
                    </Link>
                    <button onClick={() => setDrawerOpen(false)}>
                      <FaRegWindowClose size={24} className='text-[#3DD2CC]' />
                    </button>
                  </div>
                  <div className='pt-10'>
                    <SidebarLink Icon={AiOutlineHome} to='/'>
                      Home
                    </SidebarLink>
                    <SidebarLink Icon={BiCameraMovie} to='/movies'>
                      Movies
                    </SidebarLink>
                    <SidebarLink Icon={BiMoviePlay} to='/tv-series'>
                      TV Series
                    </SidebarLink>
                    <SidebarLink Icon={BiCalendarEvent} to='/upcoming'>
                      Upcoming
                    </SidebarLink>
                    <SidebarLink Icon={BiLogOut} to='/signout'>
                      Log Out
                    </SidebarLink>
                  </div>
                </Drawer>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
