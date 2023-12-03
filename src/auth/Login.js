import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/userSlice";

const Login = () => {
  ///////////////
  const user = useSelector((state) => state.theUser.userInfo);
  console.log(user);
  ////////////////
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ///////////////////
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  ////////////////////
  const emailHandler = (e) => {
    setEmail(e.target.value);
    setErrorEmail("");
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setErrorPassword("");
  };
  ////////////////////
  const emailValidation = (email) => {
    return email.match(/\w+([-]\w+)?@\w+[.]\w{2,}$/);
  };
  ////////////////////
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  //////////////////////////
  async function loginHandler(e) {
    e.preventDefault();

    if (!email) {
      setErrorEmail("enter your email");
    } else if (!emailValidation(email)) {
      setErrorEmail("enter a valid email");
    }
    if (!password) {
      setErrorPassword("enter your password");
    } else if (password.length < 6) {
      setErrorPassword("enter a valid password");
    }

    if (email && emailValidation(email) && password.length >= 6) {
      // setEmail("");
      // setPassword("");
      // console.log("login is cool");
      try {
        setLoading(true);
        await axios
          .post("http://localhost:5000/api/auth/login", {
            email,
            password,
          })
          .then((res) => dispatch(setUserInfo(res.data)));
        setTimeout(() => {
          setLoading(false);
          setSuccessMsg("Logged in Successfully!");
        }, 1000);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (err) {
        setLoading(false);
        err.response.data.message === "invalid email"
          ? setErrorEmail(err.response.data.message)
          : err.response.data.message === "invalid password"
          ? setErrorPassword(err.response.data.message)
          : setErrorEmail(err.response.data.message);
      }
    }
  }
  ////////////////////
  return (
    <div className="w-10/12 mx-auto py-20">
      <div className="border-2 border-buttonColor  w-80 mx-auto p-1 rounded-xl shadow-shadowOne shadow-buttonColor">
        <div className=" flex items-center justify-center my-4">
          <Link to="/">
            <h2 className="uppercase font-titleFont font-semibold ">
              <span>
                <HomeIcon />
              </span>
              rentrooms
            </h2>
          </Link>
        </div>
        <div className="border-2 border-buttonColor flex flex-col p-2 rounded-lg gap-5">
          <p className="font-semibold text-2xl text-buttonColor">Login :</p>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col ">
              <label className="pl-1" htmlFor="email">
                Email :
              </label>
              <input
                className="border border-buttonColor outline-none py-1 px-2 caret-buttonColor rounded-md"
                type="email"
                placeholder="enter email"
                id="email"
                value={email}
                onChange={emailHandler}
              />
              {errorEmail && (
                <p className="text-red-600 text-sm mx-2 font-semibold">
                  <span className="italic">! </span>
                  {errorEmail}
                </p>
              )}
            </div>
            <div className="flex flex-col ">
              <label className="pl-1" htmlFor="password">
                Password :
              </label>
              <input
                className="border border-buttonColor outline-none py-1 px-2 caret-buttonColor rounded-md"
                type="password"
                placeholder="enter password"
                id="password"
                value={password}
                onChange={passwordHandler}
              />
              {errorPassword && (
                <p className="text-red-600 text-sm mx-2 font-semibold">
                  <span className="italic">! </span>
                  {errorPassword}
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="py-2 mx-auto ">
          <button
            onClick={loginHandler}
            type="submit"
            className="flex items-center justify-center  w-full rounded-md p-1 text-white text-lg font-semibold duration-500 bg-gradient-to-tr from-buttonColor to-orange-600 active:bg-gradient-to-bl">
            Continue
          </button>
          {loading && (
            <div className="mx-2 flex justify-center">
              <p>
                <RotatingLines
                  strokeColor="#ff9900"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="50"
                  visible={true}
                />
              </p>
            </div>
          )}
          {successMsg && (
            <div className=" flex justify-center">
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-600 w-full p-1 mt-1 text-white flex justify-center font-semibold rounded-md">
                {successMsg}
              </motion.p>
            </div>
          )}
          <div className="mx-2 flex justify-center">
            <p className=" text-gray-600 text-xs mt-1">
              if you're not registered yet click on
              <Link to="/register">
                <span className="text-buttonColor font-semibold underline-offset-2 hover:underline text-sm cursor-pointer">
                  <ArrowRightIcon />
                  Register
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
