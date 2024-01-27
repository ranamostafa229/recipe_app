import React, { useState } from "react";
import Button from "./Button";
import { BsPatchCheck } from "react-icons/bs";

const DetailsCard = ({ recipe }) => {
  const [open, setOpen] = useState(0);
  return (
    <div
      key={recipe?.label}
      className=" flex flex-col border h-fit  shadow-md md:w-full pb-10  bg-white  lg:pl-10 lg:w-1/2"
    >
      <h1 className="font-semibold lg:text-5xl max-md:text-4xl md:text-5xl p-5 pt-10">
        {" "}
        {recipe?.label}
      </h1>
      <div className="lg:flex md:flex   max-md::flex:flex-col   gap-10 m-10 items-center max-md:space-y-5  ">
        <Button
          label={"ingredients"}
          color={open === 0 ? "black" : "white"}
          textColor={open === 0 ? "text-white" : "text-black"}
          roundSize="rounded-sm"
          fontWeight="font-semibold"
          shadow={"shadow-md"}
          width={"lg:w-fit max-md:w-full "}
          textSize=" lg:text-2xl max-md:text-lg"
          handleClick={() => setOpen(0)}
        />
        <Button
          label={"Health Labels"}
          color={open === 1 ? "black" : "white"}
          textColor={open === 1 ? "text-white" : "text-black"}
          textSize=" lg:text-2xl max-md:text-lg"
          roundSize="rounded-sm"
          fontWeight="font-semibold"
          shadow={"shadow-md"}
          width={"lg:w-fit max-md:w-full"}
          handleClick={() => setOpen(1)}
        />
      </div>
      {open === 0 ? (
        <div className="flex flex-col  pl-10 pt-4 pb-4 pr-10 h-96 overflow-y-auto ">
          <ul className="flex flex-col gap-4">
            {recipe?.ingredientLines.map((item, index) => (
              <li className="flex text-[#5F5F5F] text-xl " key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex  p-10 h-96 overflow-y-auto ">
          <ul className="flex flex-wrap gap-4 ">
            {recipe?.healthLabels.map((item, index) => (
              <li
                key={index}
                className="flex  items-center  gap-2 bg-[#F89223] text-white rounded-md 
                max-lg:p-4 lg:p-4 max-md:p-2 
                font-semibold max-lg:text-xl lg:text-xl max-md:text-md max-md:w-fit"
              >
                <BsPatchCheck />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetailsCard;
