import { ChildrenParm } from "../interface/interface";
import { useLocation } from "react-router-dom";
import DashboardLayout from "./dashboard/dashboard";
import Search from "./search";
import ImageSlider from "./carousel";
export default function Layout({ children }: ChildrenParm) {
  let location = useLocation();
  const path = location.pathname;
  const displayPath =
    path === "/" ||
    path === "/movies" ||
    path === "/tv-series" ||
    path === "/upcoming";

  return (
    <>
      <div className=' bg-[#191919] w-full flex sm:flex-row flex-col'>
        {displayPath && <DashboardLayout />}
        <div className='flex flex-col w-full p-8'>
          <div className=' w-full'>{displayPath && <Search />}</div>

          <div className='py-6 mt-10'>{displayPath && <ImageSlider />}</div>
          {children}
        </div>
      </div>
    </>
  );
}
