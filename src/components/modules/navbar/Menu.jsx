import { useAtom } from "jotai";
import React from "react";
import { RxCross2, RxQuestionMarkCircled } from "react-icons/rx";
import { menuAtom } from "../../../jotai";
import { motion } from "framer-motion";
import { MdArrowForwardIos, MdInbox, MdOutlineStore } from "react-icons/md";
import EachUtils from "../../../utils";
import { MENU_LIST, MENU_LIST_1 } from "../../../constant/Navbar";
import { SiJordan } from "react-icons/si";
import { IoBagOutline } from "react-icons/io5";

const Menu = () => {
  const [menu, setMenu] = useAtom(menuAtom);

  return (
    <motion.div
      className="nm-container flex flex-col px-9 py-4 fixed right-0 bottom-0 h-full w-[350px] bg-white z-50"
      initial={{ translateX: menu ? "100%" : "0%" }}
      animate={{ translateX: menu ? "0%" : "100%" }}
      transition={{
        duration: 0.2,
      }}
    >
      <div
        className="ml-auto hover:bg-neutral-200 rounded-full p-2 cursor-pointer w-fit"
        onClick={() => setMenu(false)}
      >
        <RxCross2 size={25} />
      </div>
      <div className="flex flex-col gap-3 mt-9 text-neutral-900">
        <EachUtils
          of={MENU_LIST}
          render={(item, index) => (
            <ul className="flex justify-between items-center" key={index}>
              <li
                className={`text-2xl ${
                  item.icon && "hover:text-neutral-500"
                } cursor-pointer`}
              >
                {item.title}
              </li>
              {item.icon && <MdArrowForwardIos size={20} />}
            </ul>
          )}
        />
      </div>
      <div className="flex items-center text-neutral-900 gap-3 mt-14 mb-14">
        <SiJordan size={25} />
        <h1 className="text-lg">jordan</h1>
      </div>
      <div className="flex flex-col mb-14 gap-5">
        <p className="text-xl text-neutral-500">
          Become a Nike Member for <br /> the best product, <br /> inspiration
          and stories in <br />
          sport.
          <span className="text-neutral-900 font-medium">Learn More</span>
        </p>
        <div className="flex gap-2">
          <button className="rounded-full font-medium bg-neutral-900 hover:bg-neutral-500 text-white px-5 py-2">
            Join Us
          </button>
          <button className="rounded-full font-medium border border-neutral-500 hover:bg-neutral-500 text-neutral-900 hover:text-white px-5 py-2">
            Sign In
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <EachUtils
          of={MENU_LIST_1}
          render={(item, index) => (
            <ul key={index}>
              <li className="flex items-center gap-3 text-neutral-900 text-lg font-medium cursor-pointer">
                {item.help && <RxQuestionMarkCircled size={20} />}
                {item.bag && <IoBagOutline size={20} />}
                {item.orders && <MdInbox size={20} />}
                {item.find && <MdOutlineStore size={20} />}
                {item.title}
              </li>
            </ul>
          )}
        />
      </div>
    </motion.div>
  );
};

export default Menu;
