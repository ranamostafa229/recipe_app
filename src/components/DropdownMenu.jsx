import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropdownMenu = ({ menu, type }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setSelected(type);
  }, [type]);
  return (
    <div className="flex mt-3">
      <button
        className={`flex items-center justify-between xl:w-48 sm:w-full max-sm:w-full 
         ${
           selected ? "bg-[#E68720] text-white " : "bg-[#ECECEC]  text-gray-400"
         }          py-5 px-5 rounded-md text-lg `}
        onClick={handleOpen}
      >
        {!selected ? "Browse" : selected}
        <MdKeyboardArrowDown />
      </button>
      {open ? (
        <ul className="flex flex-col mt-4 border  font-medium rounded-md absolute z-10 bg-white pl-8 pr-10  ">
          <h1 className="pt-4 pb-2 font-bold text-xl text-[#2E2F31]">
            Categories
          </h1>
          <hr />
          {menu.map((menuItem, index) => (
            <li
              key={index}
              value={menuItem}
              className="flex text-[#F89223] w-52  "
            >
              {React.cloneElement(menuItem, {
                onClick: () => {
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropdownMenu;
