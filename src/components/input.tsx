import React from "react";
import { InputProps } from "../interface/interface";

export default function Input({
  name,
  type,
  placeholder,
  value,
  handleChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
      className='border-0 outline-0 border-b-[1px] mb-8 w-full text-[#BABABA] text-[16px] font-normal py-3 bg-transparent border-[#4D4B4B]'
    />
  );
}
