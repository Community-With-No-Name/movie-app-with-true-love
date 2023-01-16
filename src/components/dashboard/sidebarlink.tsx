import React from "react";
import { NavLink } from "react-router-dom";
import { SideBarProps } from "../../interface/interface";
export default function SidebarLink({ to, children, Icon }: SideBarProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `min-w-full flex sm:block text-left text-[#666666] text-base font-semibold border-r-4 py-5 hover:border-[#3DD2CC75] ${
          isActive
            ? "bg-[#3DD2CC40] border-[#3DD2CC75] text-[#3DD2CC75] hover:border-[#3DD2CC75]"
            : "text-slate-700 border-[#5D387F00]"
        } transition ease-in `
      }
    >
      <div className='max-w-10 pr-10 pl-8 sm:pl-16 space-y-4 flex items-center space-x-6'>
        <Icon size={20} />
        <span className='sm:hidden md:block'>{children}</span>
      </div>
    </NavLink>
  );
}
