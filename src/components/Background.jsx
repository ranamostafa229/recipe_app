import React from "react";

const Background = ({ image, children, height }) => {
  return (
    <div className={`flex flex-col relative ${height} items-center w-full `}>
      <img
        src={image}
        alt="background"
        className=" flex object-fill w-full h-full "
      />
      {children}
    </div>
  );
};

export default Background;
