import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const Register = () => {
  const navigate = useNavigate();
  ////////////////////////////////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [rPassword, setRPassword] = useState("");
  //////////////////////////////////
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorRPassword, setErrorRPassword] = useState("");
  ////////////////////////////////////
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  //////////////////////////
  const emailHandler = (e) => {
    setEmail(e.target.value);
    setErrorEmail("");
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setErrorPassword("");
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
    setErrorUsername("");
  };
  const rPasswordHandler = (e) => {
    setRPassword(e.target.value);
    setErrorRPassword("");
  };
  //////////////////////////////////
  const emailValidation = (email) => {
    return email.match(/\w+([-]\w+)?@\w+[.]\w{2,}$/);
  };
  //////////////////////////////////

  const registerHandler = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorEmail("email should not be empty");
    } else {
      if (!emailValidation(email)) {
        setErrorEmail("enter a valid email");
      }
    }

    if (!username) {
      setErrorUsername("username should not be empty");
    } else if (username.length < 6) {
      setErrorUsername("username should be at least 6 characters");
    }
    if (!password) {
      setErrorPassword("enter your password");
    } else if (password.length < 6) {
      setErrorPassword("password should be at least 6 characters");
    }
    if (!rPassword) {
      setErrorRPassword("confirm your password");
    } else if (rPassword !== password) {
      setErrorRPassword("password does not matched");
    }
    //////////////////////////
    if (
      email &&
      emailValidation(email) &&
      username.length >= 6 &&
      password.length >= 6 &&
      password === rPassword
    ) {
      setLoading(true);
      axios
        .post("http://localhost:5000/api/auth/register", {
          email,
          username,
          password,
        })
        .then((res) => "")
        .catch((err) => setErrorEmail(err.response.data.message));
      // setEmail("");
      // setPassword("");
      // setRPassword("");
      // setUsername("");
      setLoading(false);
      setSuccessMsg("Account Created Successfully!");
      // setTimeout(() => {
      //   navigate("/login");
      // }, 3000);
    }
  };
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
          <p className="font-semibold text-2xl text-buttonColor">Register :</p>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col ">
              <label className="pl-1" htmlFor="email">
                Email :
              </label>
              <input
                className="border border-buttonColor outline-none py-1 px-2 caret-buttonColor rounded-md lowercase"
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
              {errorUsername && (
                <p className="text-red-600 text-sm mx-2 font-semibold">
                  <span className="italic">! </span>
                  {errorUsername}
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
              {errorRPassword && (
                <p className="text-red-600 text-sm mx-2 font-semibold">
                  <span className="italic">! </span>
                  {errorRPassword}
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="py-2 mx-auto ">
          <button
            onClick={registerHandler}
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
            {
              successMsg && (
                <div className=" flex justify-center">
                <p className="bg-green-600 w-full p-1 mt-1 text-white flex justify-center font-semibold rounded-md">{successMsg}</p>
                </div>
              )
            }
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
