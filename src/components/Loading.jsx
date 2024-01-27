import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className={"flex flex-col   top-5 items-center justify-center "}>
      <svg
        className=" animate-spin h-10 w-10 mr-3 mt-40 items-center justify-center text-[#F89223] "
        viewBox="0 0 24 24"
      >
        <AiOutlineLoading3Quarters />
      </svg>
    </div>
  );
};

export default Loading;
