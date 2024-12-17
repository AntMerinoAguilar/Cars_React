import React from "react";

const Car = ({img, title, caption}) => {
  return (
    <div className="car">
      <img className="car_img"
        src={img}
        alt=""
      />
      <h3 className="car_title">{title}</h3>
      <p className="car_caption">{caption}</p>
    </div>
  );
};

export default Car;