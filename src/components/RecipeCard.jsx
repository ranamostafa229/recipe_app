import { FiClock } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const id = recipe?.recipe.uri?.split("#")[1];
  const navigate = useNavigate();
  console.log(recipe?.recipe.uri?.split("#")[1]);
  return (
    <div
      className="flex flex-col border rounded-xl max-sm:w-80 lg:w-96
       transition delay-150 group hover:scale-95 cursor-pointer shadow-sm hover:shadow-md h-auto "
      onClick={() => navigate(`/${id}`)}
    >
      <div className="overflow-hidden ">
        <img
          src={recipe?.recipe.image}
          alt={recipe?.recipe.label}
          className="rounded-t-xl h-96  w-full group-hover:scale-110 ease-in duration-500 object-cover"
        />
      </div>

      <div className="flex flex-col px-5 pt-5 pb-5">
        <h4 className="font-bold  text-[#2E2F31] text-xl ">
          {recipe?.recipe.label.substring(0, 30)}...
        </h4>
        <hr className="mt-2" />
        <div className="flex justify-around items-center ">
          <span className="flex items-center gap-2 pt-2 px-3">
            <FiClock className="text-[#F89223] text-xl" />
            <span className="text-[#7D7F82]">
              {recipe?.recipe.totalTime || 60} min
            </span>
          </span>
          <div className="flex border text-[#7D7F82] h-12"></div>
          <span className="flex items-center gap-2 pt-2">
            <GoPerson className="text-[#F89223] text-xl" />
            <span className="text-[#7D7F82]">
              {recipe?.recipe.yield} servings
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
