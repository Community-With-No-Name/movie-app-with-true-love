import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../interface/interface";
import { login_url } from "../libs/endpoints";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import Input from "./input";
export default function Login() {
  const { addToast } = useToasts();
  const [loginDetails, setLoginDetails] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(login_url, {
        email: loginDetails.email,
        password: loginDetails.password,
      })
      .then((res) => {
        localStorage.setItem("userToken", res.data.token);
        addToast(res.data.message, {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((error) => {
        addToast(error.response.data.message, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };
  const navigate = useNavigate();
  return (
    <div className='w-full sm:grid grid-cols-6'>
      <div className='bg-black w-full min-h-screen md:col-span-3 col-span-full flex flex-col justify-center items-center font-[Poppins]'>
        <div className='bg-black w-full min-h-screen md:col-span-2 col-span-full flex flex-col justify-center items-center font-[Poppins]'>
          <div className='flex flex-col justify-center px-2 items-center'>
            <h3 className='lg:text-[35px] xsm:text-[30px] text-[22px] font-medium  text-[#FEFEFE]'>
              Good To See You Again
            </h3>
            <p className='lg:text-base sm:text-sm text-center text-[#BABABA] font-medium leading-6 mt-2'>
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className='mt-5 md:w-[80%] lg:w-[55%] sm:w-[60%] xsm:w-[80%]  w-[90%] mx-auto'>
            <button className='create text-[#FEFEFE] bg-transparent rounded-[15px] text-sm border-[1px] border-[#4D4B4B] font-normal p-[6px] sm:my-12  my-6 w-full flex justify-center items-center gap-3'>
              <span>
                {" "}
                <img src={`${require("../images/Google.png")}`} alt='' />
              </span>
              Log in with Google
            </button>
            <fieldset className='border-t border-[#4D4B4B]'>
              <legend className='mx-auto px-4 text-[#BABABA] text-sm'>
                Or
              </legend>
            </fieldset>
            <form className='w-full sm:mt-10' onSubmit={handleSubmit}>
              <Input
                type='email'
                placeholder='Email'
                value={loginDetails.email}
                name='email'
                handleChange={handleChange}
              />
              <Input
                type='password'
                placeholder='Password'
                value={loginDetails.password}
                name='password'
                handleChange={handleChange}
              />
              <button className='create text-[#191919] bg-[#FEFEFE] rounded-[15px] text-base font-semibold p-[11px] mt-6 w-full'>
                Log In
              </button>
            </form>
            <div className='forgot flex xsm:flex-row flex-col  justify-between items-center mt-6 leading-8'>
              <span className='text-[#FEFEFE50] text-sm font-normal'>
                <input type='checkbox' name='reminder' id='' /> Remember me for
                30 days
              </span>
              <button
                className='text-[#FEFEFE]  text-sm border-b-[1px] font-normal'
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password
              </button>
            </div>
            <div className='social-auth'>
              <p className='text-[#BABABA] text-[13px] font-normal mt-12 text-center'>
                Don’t have an account ?
                <button
                  className='text-[#FEFEFE] font-medium'
                  onClick={() => navigate("/signup")}
                >
                  Sign up for free
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className='md:col-span-3 col-span-3 md:block hidden w-full h-screen bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg")`,
        }}
      >
        <div className='bg-[#1d1d1d]/75 h-full w-full relative'>
          <div className='logo lg:py-12 lg:px-12 px-6 py-6'>
            <img src={`${require("../images/logo.png")}`} alt='' />
          </div>
          <div className='more-info text-[#FEFEFE] absolute bottom-2 py-10 lg:px-12 md:px-6  flex flex-col items-start justify-end align-bottom'>
            <h2 className='lg:text-[40px] text-[30px] font-semibold'>
              Avatar: The Way of Water (2022)
            </h2>
            <p className='text-lg font-medium mt-2 mb-4'>
              TV Series | 2022 | TV-14
            </p>
            <p className='text-lg font-medium '>
              Genres : Science Fiction, Adventure, Action
            </p>
            <div className='flex justify-center items-center gap-5'>
              <img src={`${require("../images/imbd.png")}`} alt='' />
              <img src={`${require("../images/star.png")}`} alt='' />
              <span>5.4 / 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
