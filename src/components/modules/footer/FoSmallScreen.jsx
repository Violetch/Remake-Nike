import { useState } from "react";
import { FOOTER_LIST } from "../../../constant/Footer";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FoSmallScreen = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleTitleClick = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full items-start">
      {FOOTER_LIST.map((item, index) => (
        <ul
          className="flex flex-col gap-6 w-full"
          key={index}
          onClick={() => handleTitleClick(index)}
        >
          <div className="flex justify-between items-center  mt-6">
            <li className="text-neutral-900 cursor-pointer">{item.title}</li>
            <MdOutlineKeyboardArrowDown
              className={`text-neutral-900 ${
                activeIndexes.includes(index) && "-rotate-180"
              } duration-300`}
              size={25}
            />
          </div>
          {activeIndexes.includes(index) && (
            <div className="flex flex-col gap-2 mb-3">
              {item.subList &&
                item.subList.length > 0 &&
                item.subList.map((subList, indexSubList) => (
                  <li
                    className="text-neutral-500 cursor-pointer"
                    key={indexSubList}
                  >
                    <a href="#">{subList.title}</a>
                  </li>
                ))}
            </div>
          )}
          <hr className="hr w-[96%]" />
        </ul>
      ))}
      <div className="flex items-center gap-1 text-neutral-500 w-full mt-6">
        <CiGlobe size={15} />
        <h3 className="">Indonesia</h3>
      </div>
      <hr />
    </div>
  );
};

export default FoSmallScreen;
