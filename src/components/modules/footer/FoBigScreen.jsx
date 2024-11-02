import React from "react";
import EachUtils from "../../../utils";
import { FOOTER_LIST } from "../../../constant/Footer";
import { CiGlobe } from "react-icons/ci";

const FoBigScreen = () => {
  return (
    <div className="flex justify-between w-full items-start">
      <EachUtils
        of={FOOTER_LIST}
        render={(item, index) => (
          <ul className="flex flex-col gap-7 w-full" key={index}>
            <li className="text-neutral-900">{item.title}</li>
            <div className="flex flex-col gap-2">
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
          </ul>
        )}
      />
      <div className="flex items-center gap-1 text-neutral-500 w-full justify-end">
        <CiGlobe size={15} />
        <h3 className="">Indonesia</h3>
      </div>
    </div>
  );
};

export default FoBigScreen;
