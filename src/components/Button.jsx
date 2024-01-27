import React from "react";

const Button = ({
  label,
  handleClick,
  px = "py-5",
  py = "px-5 ",
  color,
  roundSize = "rounded-md",
  fontWeight = "font-bold",
  hover,
  textColor = "text-white",
  shadow,
  width,
  textSize = "text-lg",
}) => {
  return (
    <button
      className={`text-start ${textColor} bg-[#F89223] w-fit ${px} ${py} ${roundSize} ${fontWeight} ${textSize}
      transition ease-in delay-100 duration-300   
       ${hover} bg-${[color]} ${shadow} ${width} items-center justify-center  `}
      onClickCapture={handleClick}
      // onBlur={handleClick}
      id="discover"
    >
      <span className="flex items-center justify-center">{label}</span>
    </button>
  );
};

export default Button;
