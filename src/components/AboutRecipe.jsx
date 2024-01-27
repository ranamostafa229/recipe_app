import { FiClock } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { GiFireBowl } from "react-icons/gi";

const AboutRecipe = ({ recipe }) => {
  return (
    <div
      className="flex flex-col border lg:ml-10  p-10 shadow-md 
      bg-white h-full pb-10 lg:w-fit md:w-full "
    >
      <h3 className=" flex flex-col font-semibold text-3xl p-5">
        About the recipe
      </h3>
      <div className="flex flex-col p-4 gap-6">
        <div className="flex w-full  items-center gap-2">
          <FiClock className="text-3xl text-[#F89223]" />
          <span className="text-2xl">
            {" "}
            preparation:{` ${recipe?.totalTime || 60} min`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <GoPerson className="text-3xl text-[#F89223]" />
          <span className="text-2xl">
            {" "}
            portions:{` ${recipe?.yield} servings`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <GiFireBowl className="text-3xl text-[#F89223]" />
          <span className="text-2xl">
            calories:{` ${recipe?.calories?.toFixed(2)}`}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutRecipe;
