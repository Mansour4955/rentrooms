import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const rPasswordHandler = (e) => {
    setRPassword(e.target.value);
  };
  return (
    <div className="w-10/12 mx-auto py-20">
      <div className="border-2 border-buttonColor  w-80 mx-auto p-1 rounded-xl">
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
          <p className="font-semibold text-2xl text-buttonColor">Register :</p>
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
            </div>
            <div className="flex flex-col ">
              <label className="pl-1" htmlFor="username">
                Username :
              </label>
              <input
                className="border border-buttonColor outline-none py-1 px-2 caret-buttonColor rounded-md"
                type="text"
                placeholder="enter username"
                id="username"
                value={username}
                onChange={usernameHandler}
              />
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
            </div>
            <div className="flex flex-col ">
              <label className="pl-1" htmlFor="re-password">
                Repeat Password :
              </label>
              <input
                className="border border-buttonColor outline-none py-1 px-2 caret-buttonColor rounded-md"
                type="password"
                placeholder="enter password again"
                id="re-password"
                value={rPassword}
                onChange={rPasswordHandler}
              />
            </div>
          </form>
        </div>
        <div className="py-2 mx-auto ">
          <button
            type="submit"
            className="flex items-center justify-center  w-full rounded-md p-1 text-white text-lg font-semibold duration-500 bg-gradient-to-tr from-buttonColor to-orange-600 active:bg-gradient-to-bl">
            Submit
          </button>
          <div className="mx-2 flex justify-center">
            <p className="text-gray-600 text-xs mt-1 ">
              if you're already registered click on
              <Link to="/login">
                <span className="text-buttonColor font-semibold underline-offset-2 hover:underline text-sm cursor-pointer">
                  <ArrowRightIcon />
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
