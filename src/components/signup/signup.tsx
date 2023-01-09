import { useState } from "react";
import { UserFormState } from "../../interface/interface";
import Input from "../input/input";

function SignUp() {
  const [formDetails, setFormDetails] = useState<UserFormState>({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  return (
    <div className='w-full sm:grid grid-cols-5 '>
      <div
        className='md:col-span-3 col-span-2 md:block hidden w-full h-screen bg-cover bg-right bg-no-repeat'
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg")`,
        }}
      >
        <div className='bg-[#1d1d1d]/75 h-full w-full relative'>
          <div className='logo py-12 md:px-12 px-6'>
            <img src={`${require("../../images/logo.png")}`} alt='' />
          </div>
          <div className='more-info text-[#FEFEFE] absolute bottom-2 py-10 md:px-12 px-2  flex flex-col items-start justify-end align-bottom'>
            <h3 className='text-[30px] font-semibold mb-3'>
              Benefits of your free IMDb account
            </h3>
            <div className='sub mb-8'>
              <h6 className='text-[18px] leading-6 font-medium'>
                Personalized Recommendations
              </h6>
              <p className='text-base'>Discover shows you'll love.</p>
            </div>
            <div className='sub mb-8'>
              <h6 className='text-[18px] leading-6 font-medium'>
                Your Ratings
              </h6>
              <p className='text-base'>
                Rate and remember everything you've seen.
              </p>
            </div>
            <div className='sub mb-8'>
              <h6 className='text-[18px] leading-6 font-medium'>
                Contribute to IMDb
              </h6>
              <p className='text-base'>
                {" "}
                Add data that will be seen by millions of people and get cool
                badges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black w-full min-h-screen md:col-span-2 col-span-full flex flex-col justify-center items-center font-[Poppins]'>
        <div className='flex flex-col justify-center px-2 items-center'>
          <h3 className='lg:text-[35px] xsm:text-[30px] text-[26px] font-medium leading-10 text-[#FEFEFE]'>
            Create an account{" "}
          </h3>
          <p className='lg:text-base sm:text-sm text-center text-[#BABABA] font-medium leading-6 mt-2'>
            Let’s get started with your 30 days free trial.
          </p>
        </div>
        <div className='mt-5 md:w-[85%] lg:w-[65%] sm:w-[65%] xsm:w-[80%]  w-[90%] mx-auto'>
          <form action='' className='w-full'>
            <Input
              type='text'
              placeholder='Name'
              value={formDetails.username}
              name='username'
              handleChange={handleChange}
            />
            <Input
              type='email'
              placeholder='Email'
              value={formDetails.email}
              name='email'
              handleChange={handleChange}
            />
            <Input
              type='password'
              placeholder='Password'
              value={formDetails.password}
              name='password'
              handleChange={handleChange}
            />
            <button className='create text-[#191919] bg-[#FEFEFE] rounded-[15px] text-base font-semibold p-[11px] mt-6 w-full'>
              Create account
            </button>
          </form>
          <div className='social-auth'>
            <button className='create text-[#FEFEFE] bg-transparent rounded-[15px] text-sm border-[1px] border-[#4D4B4B] font-normal p-[6px] mt-6 w-full flex justify-center items-center gap-3'>
              <span>
                {" "}
                <img src={`${require("../../images/Google.png")}`} alt='' />
              </span>
              Sign up with Google
            </button>
            <p className='text-[#BABABA] text-[13px] font-normal mt-12 text-center'>
              Already have an account ?{" "}
              <button className='text-[#FEFEFE] font-medium'> Log in</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
