import React from "react";
import Logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="flex  w-full h-fit items-center lg:justify-start max-sm:justify-center bg-transparent 
      shadow-lg shadow-black absolute z-10 lg:px-16  "
    >
      <div className="flex w-fit cursor-pointer" onClick={() => navigate("/")}>
        <img
          src={Logo}
          alt=""
          className={`lg:w-72 max-md:w-48 md:w-48   max-sm:w-40  p-5 filter  contrast-200`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
