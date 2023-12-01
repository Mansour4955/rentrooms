import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import headerTitles from "../../maps";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-3">
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
          <Link to="/login">
          <button className="text-base font-medium bg-buttonColor p-3 rounded-md text-white  active:bg-orange-500 ">
            Login
          </button>
          </Link>
          <Link to="/register">
          <button className="text-base font-medium bg-buttonColor p-3 rounded-md text-white  active:bg-orange-500 ">
            Register
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
