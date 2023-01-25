import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  return (
    <div
      className='bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg")`,
      }}
    >
      <div className='flex flex-col justify-center items-center m-auto bg-[#1d1d1d]/90 min-h-screen font-[Poppins px-8'>
        <div className='heading text-center'>
          <h3 className='lg:text-[35px] xsm:text-[30px] text-[22px] font-medium  text-[#FEFEFE]'>
            Forgot Password?
          </h3>
          <p className='lg:text-base sm:text-sm text-center text-[#BABABA] font-medium leading-6 mt-2'>
            Don’t worry! It happens. Please enter your email address, we will
            send you a code.
          </p>
          <form action='' className='my-12'>
            <input
              name='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className='text-[#FEFEFE] bg-transparent rounded-[15px] text-sm border-[1px] border-[#fffffd50] font-normal px-5 outline-none py-3 w-full flex justify-center items-center gap-3'
            />
            <button className='mt-8 text-[#191919] bg-[#FEFEFE] rounded-[15px] text-base font-semibold p-[11px]  px-8'>
              Send Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
