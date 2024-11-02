import { useAtom } from "jotai";
import React from "react";
import { CgSearch } from "react-icons/cg";
import { SiNike } from "react-icons/si";
import { searchAtom } from "../../../jotai";
import EachUtils from "../../../utils/index";
import { POPULAR_SEARCH } from "../../../constant/Navbar";
import { motion } from "framer-motion";

const Search = () => {
  const [, setSearch] = useAtom(searchAtom);

  return (
    <motion.nav
      className="ns-container fixed flex flex-col ustify-between items-center h-[59vh] bg-white inset-0 px-10 z-40"
      initial={{ translateX: "100px", translateY: "50px", opacity: 0 }}
      animate={{ translateX: 0, translateY: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex justify-between items-center w-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      >
        <SiNike
          className="ns-icon-nike text-neutral-900 cursor-pointer"
          size={80}
        />
        <div className="ns-wrapper-search flex items-center rounded-full w-[64%] bg-neutral-200/30 hover:bg-neutral-300 h-[40px]">
          <div className="relative flex justify-center items-center text-neutral-900 bg-neutral-200/30 hover:bg-neutral-400/50 rounded-full p-[20px]">
            <CgSearch className="absolute left-[6px]" size={23} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="text-neutral-900 font-medium px-1 py-[6px] bg-transparent border-none outline-none w-full"
          />
        </div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.2, type: "spring" }}
          className="text-neutral-900 font-medium cursor-pointer"
          onClick={() => setSearch(false)}
        >
          Cancel
        </motion.h1>
      </motion.div>
      <div className="ns-wrapper-list flex flex-col mt-3 w-[63%]">
        <EachUtils
          of={POPULAR_SEARCH}
          render={(item, index) => (
            <ul key={index}>
              <motion.li
                className="text-neutral-600 text-sm"
                initial={{ translateY: "-15px", opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.1 }}
              >
                {item.title}
              </motion.li>
              <li className="flex gap-5 mt-3">
                <motion.a
                  initial={{ translateY: "50px", opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ delay: item.delay, duration: 0.1 }}
                  className="text-neutral-900 text-2xl hover:text-neutral-500"
                  href="#"
                >
                  {item.subTitle}
                </motion.a>
              </li>
            </ul>
          )}
        />
      </div>
    </motion.nav>
  );
};

export default Search;
