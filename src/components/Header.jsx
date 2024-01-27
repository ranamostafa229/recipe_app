import BackgroundImage from "../images/cook.jpg";
import Background from "./Background";

const Header = () => {
  return (
    <section className="w-full h-['100vh']  ">
      <Background image={BackgroundImage} height={"max-sm:h-[250px]"}>
        <div className="bg-black opacity-30 object-cover  w-full h-full absolute" />
        <div
          className="flex flex-col w-full h-full justify-center items-center absolute lg:gap-7 md:gap-2 pt-6
        max-sm:gap-3"
        >
          <h4 className="lg:text-3xl max-sm:text-lg md:text-lg  text-[#F89223] font-['Lobster'] ">
            Do you like cooking?
          </h4>
          <h1 className="text-white font-extrabold flex flex-col items-center lg:text-7xl  md:text-3xl sm:text-5xl">
            The Thatix
            <span> Recipe Community</span>
          </h1>
        </div>
      </Background>
    </section>
  );
};

export default Header;
