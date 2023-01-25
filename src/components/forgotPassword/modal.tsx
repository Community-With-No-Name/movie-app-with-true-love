import { ModalProps } from "../../interface/interface";
import { useNavigate } from "react-router-dom";

export default function Modal({ open, onClose }: ModalProps) {
  const navigate = useNavigate();
  if (!open) return null;
  return (
    <div className='overlay bg-[white] fixed w-full h-full top-0 left-0 right-0 bottom-0'>
      <div className='modal bg-white sm:rounded-[16px] max-w-[600px] w-full font-[Poppins flex-col sm:h-[unset] py-8 px-6 justify-center items-center h-screen fixed sm:top-[50%] sm:left-[50%] flex sm:translate-x-[-50%] sm:translate-y-[-50%]'>
        <h3 className='lg:text-[35px] xsm:text-[30px] text-[22px] font-medium  text-[#1d1d1d]'>
          Set A New Password
        </h3>
        <p className='font-medium'>
          Your password has been reset successfully, hit continue to proceed.
        </p>
        <button
          className='mt-6 border-[1px] border-[#1d1d1d] font-medium text-[14px] px-6 py-3 rounded-lg'
          onClick={() => navigate("/login")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
