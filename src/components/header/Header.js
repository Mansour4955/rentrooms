import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import headerTitles from "../../maps";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../redux/userSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [confirm, setConfirm] = useState(false);
  const user = useSelector((state) => state.theUser.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  ////////////////
  const logoutHandler = () => {
    setConfirm(true);
  };
  const logoutConfirmation = () => {
    dispatch(setUserInfo());
    setConfirm(false);
    navigate("/");
  };
  ////////////////
  return (
    <header className="bg-white py-3 relative z-50">
      <div className="w-4/5 mx-auto px-5 flex justify-between items-center">
        <Link to="/">
          <h2 className="uppercase font-titleFont font-semibold">
            <span>
              <HomeIcon />
            </span>
            rentrooms
          </h2>
        </Link>
        <div className="flex justify-center items-center gap-10">
          {headerTitles.map((headertitle) => (
            <NavLink
              to={headertitle.to}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ff9900" : "",
                  borderBottom: isActive ? "2px solid #ff9900" : "",
                };
              }}>
              <span className="text-base font-medium" key={headertitle.id}>
                {headertitle.title}
              </span>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center justify-center gap-5">
          {user ? (
            <>
              <Link to="/post">
                <button className="text-base font-medium bg-green-600 p-3 rounded-md text-white  active:bg-green-800 ">
                  Post Category
                </button>
              </Link>
              <Link to="/myaccount">
                <div className="flex gap-2 justify-center items-center text-base font-medium bg-green-600 p-3 rounded-md text-white  active:bg-green-800 ">
                  <span>
                    <AccountCircleIcon />
                  </span>
                  <p>{user.username}</p>
                </div>
              </Link>
              <button
                onClick={logoutHandler}
                className="text-base font-medium bg-buttonColor p-3 rounded-md text-white  active:bg-orange-500 ">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="text-base font-medium bg-buttonColor p-3 rounded-md text-white  active:bg-orange-500 ">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="text-base font-medium bg-buttonColor p-3 rounded-md text-white  active:bg-orange-500 ">
                  Register
                </button>
              </Link>{" "}
            </>
          )}
        </div>
      </div>
      {confirm && (
        <div className="w-4/5 left-2/4 -translate-x-2/4 absolute -bottom-[150px]">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-3 bg-buttonColor flex flex-col w-80 shadow-shadowOne mx-auto rounded-xl  text-white z-50">
            <p className="font-semibold text-xl">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-between items-center mt-3">
              <button
                onClick={logoutConfirmation}
                className="bg-blue-600 px-3 py-1 rounded-lg active:bg-blue-800 duration-200 font-semibold">
                Yes
              </button>
              <button
                onClick={() => setConfirm(false)}
                className="bg-green-600 px-3 py-1 rounded-lg active:bg-green-800 duration-200 font-semibold">
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;
