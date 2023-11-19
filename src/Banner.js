import React from "react";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "		#c9c9c9", padding: "18px", borderRadius: "100%",justifyContent: 'center', alignItems: 'center', right: '5%', zIndex: "100" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "		#c9c9c9", padding: "18px", borderRadius: "100%",justifyContent: 'center', alignItems: 'center', left: '5%', zIndex: "100"}}
      onClick={onClick}
    />
  );
}
const Banner = () => {
  const settings = {
    // autoplay: true,
    speed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-11/12 mx-auto">
      <Slider {...settings}> 
        <div className="focus:outline-none">
          <img
            className="w-full h-96 rounded-[40px]"
            src="https://www.rentharlow.com/wp-content/uploads/2018/06/Harlow-Hoboken-Apartments-06.jpg"
            alt=""
          />
        </div>
        <div className="focus:outline-none">
          <img
            className="w-full h-96 rounded-[40px]"
            src="https://www.rentharlow.com/wp-content/uploads/2018/06/Harlow-Hoboken-apartments-08.jpg"
            alt=""
          />
        </div>
        <div className="focus:outline-none">
          <img
            className="w-full h-96 rounded-[40px]"
            src="https://www.rentharlow.com/wp-content/uploads/2018/09/harlow-09_residences.jpg"
            alt=""
          />
        </div>
        <div className="focus:outline-none">
          <img
            className="w-full h-96 rounded-[40px]"
            src="https://www.rentharlow.com/wp-content/uploads/2018/05/harlow-10.jpg"
            alt=""
          />
        </div>
        <div className="focus:outline-none">
          <img
            className="w-full h-96 rounded-[40px]"
            src="https://www.rentharlow.com/wp-content/uploads/2018/09/Harlow_Int_ModelBed_Sept2016_residences.jpg"
            alt=""
          />
        </div>
        <div className="focus:outline-none">
          <img
            className="w-full h-96 rounded-[40px]"
            src="https://www.rentharlow.com/wp-content/uploads/2018/06/Harlow-Hoboken-Apartments-11.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};
export default Banner;
