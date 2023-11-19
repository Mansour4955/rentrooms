import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CategoryIcon from "@mui/icons-material/Category";

const Filtter = () => {
  return (
      <div className="w-4/6 mx-auto flex shadow-shadowOne rounded-xl bg-transparent">
        <div className="flex items-center gap-10 w-[75%] justify-around rounded-l-xl py-2">
          <div className="flex justify-center gap-y-1  py-3">
          <span className="text-buttonColor">
                <LocationOnIcon />
              </span>
            <div>
            <p className="font-titleFont font-semibold tracking-tight ">
              Location
            </p>
            <span className="text-gray-500 text-sm">Morocco, Sale</span>
            </div>
          </div>
          <div className="flex justify-center gap-y-1 py-3">
          <span  className="text-buttonColor"><HomeIcon/></span>
            <div>
            <p className="font-titleFont font-semibold tracking-tight ">
              Property Type
            </p>
            <div className="flex justify-between">
              <span className="text-gray-500">All</span>
              <span className="text-buttonColor">
                <KeyboardArrowDownIcon />
              </span>
            </div>
            </div>
          </div>
          <div className="flex justify-center gap-y-1 py-3">
          <span className="text-buttonColor"><CategoryIcon/></span>
           <div>
           <p className="font-titleFont font-semibold tracking-tight ">
              Categories
            </p>
            <div className="flex justify-between">
              <span className="text-gray-500">All</span>
              <span className="text-buttonColor">
                <KeyboardArrowDownIcon />
              </span>
            </div>
           </div>
          </div>
        </div>
        <div className="w-[25%] bg-buttonColor flex justify-center items-center text-white rounded-r-xl">
          <button className="font-semibold font-titleFont text-xl">Search</button>
        </div>
      </div>
  );
};

export default Filtter;
