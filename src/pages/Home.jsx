import Intro from "../components/Intro";
import RecentRecipes from "../components/RecentRecipes";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col relative md:mb-72 max-sm:mb-[1200px]">
      <Header />
      <Intro />
      <RecentRecipes />
    </div>
  );
};

export default Home;
