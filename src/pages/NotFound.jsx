import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col relative pt-48 items-center h-[500px] justify-center gap-4">
      <h1 className="font-semibold text-2xl">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/" className="link-button">
        <Button label={"Return to Home"} />
      </Link>
    </div>
  );
};

export default NotFound;
