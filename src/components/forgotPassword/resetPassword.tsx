import { useState } from "react";
import { ResetPassword } from "../../interface/interface";
import Modal from "./modal";
export default function ResetPword() {
  const [password, setPassword] = useState<ResetPassword>({
    newPassword: "",
    confirmPassword: "",
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

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
            Create new password
          </h3>
          <p className='lg:text-base sm:text-sm text-center text-[#BABABA] font-medium leading-6 mt-2'>
            Your new password must be different from your previously used
            passwords
          </p>
          <form action='' className='my-12'>
            <input
              name='password'
              type='password'
              placeholder='New Password'
              value={password.newPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword({ ...password, newPassword: e.target.value })
              }
              className='text-[#FEFEFE] bg-transparent rounded-[15px] text-sm border-[1px] my-3 border-[#fffffd50] font-normal px-5 outline-none py-3 w-full flex justify-center items-center gap-3'
            />
            <div className='flex flex-col items-start'>
              <input
                name='password'
                type='password'
                placeholder='Confirm Password'
                value={password.confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword({ ...password, confirmPassword: e.target.value })
                }
                className='text-[#FEFEFE] mt-8 bg-transparent rounded-[15px] text-sm border-[1px] border-[#fffffd50] font-normal px-5 outline-none py-3 w-full flex justify-center items-center gap-3'
              />
              <span className='text-[#fefefe] text-[13px] px-4 mt-2'>
                Passwords must match
              </span>
            </div>

            <button className='mt-8 text-[#191919] bg-[#FEFEFE] rounded-[15px] outline-none text-base font-semibold p-[11px]  px-8'>
              Reset Password
            </button>
          </form>
          <button onClick={() => setOpenModal(true)}>yoo!</button>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
