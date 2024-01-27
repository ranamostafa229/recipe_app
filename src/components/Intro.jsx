import { useNavigate } from "react-router-dom";
import HomeBt from "../images/home-bottom.jpg";
import ImagesCard from "../images/images.jpg";
import Background from "./Background";
import Button from "./Button";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full  justify-center items-center mb-5 ">
      <Background image={HomeBt}>
        <div
          className="absolute lg:flex md:flex max-sm:flex:flex-col justify-center items-center 
          lg:pt-48 max-lg:pt-96 max-sm:pt-20 h-full  gap-10 "
        >
          <img
            src={ImagesCard}
            alt=""
            className="2xl:w-[500px] xl:w-[450px] lg:w-[400px] md:w-[400px]   lg:mx-5 md:mx-5 
            max-sm:w-[250px] max-sm:mx-auto max-sm:mb-4 "
          />
          <div className="flex flex-col w-fit xl:space-y-8 max-lg:space-y-8 max-sm:space-y-6 max-sm:pl-5 ">
            <h4 className="text-[#F89223] xl:text-2xl lg:text-2xl md:text-2xl max-sm:text-lg font-['Lobster'] ">
              Thatix Introduction
            </h4>
            <h1 className="flex flex-col text-[#2E2F31] xl:text-6xl lg:text-4xl md:text-4xl  max-sm:text-3xl font-extrabold ">
              Give yourself a lifetime
              <span>of cooking confidence</span>
            </h1>
            <p className=" xl:w-[700px]  lg:w-auto  max-sm:w-auto text-xl leading-8 text-[#A67F82] ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, words which don’t look even slightly believable.
              If you are going to use a passage you need to be sure text.
            </p>
            <Button
              label={"Discover More"}
              handleClick={() => navigate("#discover")}
            />
          </div>
        </div>
      </Background>
    </section>
  );
};

export default Intro;
