import React from "react";
import Background from "./Background";
import FooterImg from "../images/footer.jpg";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer
      className=" lg:mt-[1400px]  max-lg:mt-[1000px]  xl:mt-[800px]
    2xl:mt-[750px] max-md:mt-[2000px] md:mt-[2450px] max-sm:mt-[1900px] z-20"
    >
      <Background image={FooterImg} height={"h-[350px]"}>
        <div className="flex bg-[#28292B] w-full text-[#B5B7BA] justify-center font-bold p-4 gap-1">
          <span>All rights reserved.@{date}</span>
          <span className="text-[#F89223] font-extrabold"> Rana Mostafa</span>
        </div>
      </Background>
    </footer>
  );
};

export default Footer;
