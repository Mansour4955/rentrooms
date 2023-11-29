import React, { useState, useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CategoryIcon from "@mui/icons-material/Category";
import {
  getCountry,
  getCategory,
  getMinPrice,
  getMaxPrice,
  theClickButton,
} from "../src/redux/filtterSlice";
import { useDispatch } from "react-redux";
const Filtter = () => {
  const dispatch = useDispatch();


  const [locItems, setLocitems] = useState(false);
  const [locationValue, setLocationValue] = useState("All");
  const [priceFiltter, setpriceFiltter] = useState(false);
  const [catetems, setcateitems] = useState(false);
  const [categoryValue, setcategoryValue] = useState("All");
  const locationItems = () => {
    setLocitems(!locItems);
  };
  const priceItems = () => {
    setpriceFiltter(!priceFiltter);
  };
  const categoryItems = () => {
    setcateitems(!catetems);
  };

  return (
    <div className="w-4/6 mx-auto flex shadow-shadowOne rounded-xl bg-transparent -translate-y-2/4">
      <div className="flex items-center gap-10 w-[75%] justify-around rounded-l-xl py-2 bg-white">
        <div className="flex justify-center gap-y-1 py-3 relative">
          <span className="text-buttonColor">
            <LocationOnIcon />
          </span>
          <div className="">
            <p className="font-titleFont font-semibold tracking-tight ">
              Location
            </p>
            <div className="flex justify-between">
              <span className="text-gray-500 w-full">{locationValue}</span>
              <span onClick={locationItems} className="text-buttonColor">
                <KeyboardArrowDownIcon />
              </span>
            </div>
          </div>
          {locItems && (
            <ul
              onClick={(e) => setLocationValue(e.target.innerHTML)}
              className="z-50 absolute top-[100%] mt-2 bg-buttonColor flex flex-col text-white rounded-b-lg text-base ">
              <li
                onClick={(e) => dispatch(getCountry(e.target.innerHTML))}
                className="hover:text-black duration-100 py-[2px] px-2 cursor-pointer">
                All
              </li>
              <li
                onClick={(e) => dispatch(getCountry(e.target.innerHTML))}
                className="hover:text-black duration-100 py-[2px] px-2 cursor-pointer">
                Morocco
              </li>
              <li
                onClick={(e) => dispatch(getCountry(e.target.innerHTML))}
                className="hover:text-black duration-100 py-[2px] px-2 cursor-pointer">
                Spain
              </li>
              <li
                onClick={(e) => dispatch(getCountry(e.target.innerHTML))}
                className="hover:text-black duration-100 pt-[2px] px-2 pb-1 cursor-pointer">
                France
              </li>
            </ul>
          )}
        </div>

        <div className="flex justify-center gap-y-1 py-3 relative">
          <span className="text-buttonColor">
            <CategoryIcon />
          </span>
          <div>
            <p className="font-titleFont font-semibold tracking-tight ">
              Categories
            </p>
            <div className="flex justify-between">
              <span className="text-gray-500">{categoryValue}</span>
              <span onClick={categoryItems} className="text-buttonColor">
                <KeyboardArrowDownIcon />
              </span>
            </div>
          </div>
          {catetems && (
            <ul
              onClick={(e) => setcategoryValue(e.target.innerHTML)}
              className="z-50 absolute top-[100%] mt-2 bg-buttonColor flex flex-col text-white rounded-b-lg text-base ">
              <li
                onClick={(e) => dispatch(getCategory(e.target.innerHTML))}
                className="hover:text-black duration-100 cursor-pointer py-[2px] px-2">
                All
              </li>
              <li
                onClick={(e) => dispatch(getCategory(e.target.innerHTML))}
                className="hover:text-black duration-100 cursor-pointer py-[2px] px-2">
                Villa
              </li>
              <li
                onClick={(e) => dispatch(getCategory(e.target.innerHTML))}
                className="hover:text-black duration-100 cursor-pointer py-[2px] px-2">
                Riad
              </li>
              <li
                onClick={(e) => dispatch(getCategory(e.target.innerHTML))}
                className="hover:text-black duration-100 cursor-pointer py-[2px] px-2">
                Hotel
              </li>
              <li
                onClick={(e) => dispatch(getCategory(e.target.innerHTML))}
                className="hover:text-black duration-100 cursor-pointer py-[2px] px-2">
                House
              </li>
              <li
                onClick={(e) => dispatch(getCategory(e.target.innerHTML))}
                className="hover:text-black duration-100 cursor-pointer pt-[2px] px-2 pb-1">
                Apartment
              </li>
            </ul>
          )}
        </div>

        <div className="flex justify-center gap-y-1 py-3 relative">
          <span className="text-buttonColor">
            <AttachMoneyIcon />
          </span>
          <div>
            <p className="font-titleFont font-semibold tracking-tight ">
              Price
            </p>
            <div className="flex justify-center">
              <span onClick={priceItems} className="text-buttonColor">
                <KeyboardArrowDownIcon />
              </span>
            </div>
          </div>
          {priceFiltter && (
            <div className="z-50 absolute top-[100%] mt-2 bg-white flex flex-col gap-1 text-black rounded-b-lg text-base left-2/4 -translate-x-2/4">
              <div className="flex flex-col">
                <label htmlFor="maxprice" className="pl-2 text-buttonColor">
                  Max Price
                </label>
                <input
                  id="maxprice"
                  className="py-1 px-2 outline-none border border-buttonColor"
                  type="number"
                  placeholder="0.00"
                  onChange={(e) => dispatch(getMaxPrice(e.target.value))}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="minprice" className="pl-2 text-buttonColor">
                  Min Price
                </label>
                <input
                  id="minprice"
                  className="py-1 px-2 outline-none border border-buttonColor"
                  type="number"
                  placeholder="0.00"
                  onChange={(e) => dispatch(getMinPrice(e.target.value))}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-[25%] bg-buttonColor flex justify-center items-center text-white rounded-r-xl">
        <button onClick={()=> dispatch(theClickButton(1))}
          className="font-semibold w-full h-full font-titleFont text-xl border-none outline-none active:bg-orange-500 rounded-r-xl duration-200">
          Search
        </button>
      </div>
    </div>
  );
};

export default Filtter;
