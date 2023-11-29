import { useState } from "react";
import Slider from "react-slick";

const CardBanner = ({ photo }) => {
  const [dotActive,setDotActive] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev,next)=>{
      setDotActive(next)
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10%",
        }}>
        <ul style={{ display: "flex", gap: "1px", justifyContent: "center" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={ i === dotActive ? {
          width: "20px",
          height: "20px",
          backgroundColor: "white",
          color: "#ff9900",
          border: "1px #ff9900 solid",
          borderRadius: "100%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
        } : {
          width: "20px",
          height: "20px",
          backgroundColor: "#ff9900",
          color: "white",
          border: "1px white solid",
          borderRadius: "100%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
        }}>
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {photo.map((img, index) => (
          <div key={index}>
            <img className="w-full h-36 rounded-lg" src={img} alt={index} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CardBanner;
