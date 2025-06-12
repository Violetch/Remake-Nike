import { CgSearch } from "react-icons/cg";
import { IoBagRemoveOutline, IoHeartHalfOutline } from "react-icons/io5";
import { SiNike } from "react-icons/si";
import Search from "./Search";
import { useAtom } from "jotai";
import { menuAtom, searchAtom } from "../../../jotai";
import { motion } from "framer-motion";
import { NAVBAR_LIST } from "../../../constant/Navbar";
import { HiBars3 } from "react-icons/hi2";
import { useEffect, useState } from "react";

const Middle = () => {
  const [search, setSearch] = useAtom(searchAtom);
  const [, setMenu] = useAtom(menuAtom);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 175) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isFixed ? (
        <>
          <motion.div
            className={`nm-container flex justify-between items-center px-12 py-2 w-full z-40 ${
              isFixed ? "fixed bg-white top-0" : "relative"
            }`}
            initial={{ y: isFixed ? "-150%" : "0" }}
            animate={{ y: isFixed ? "0" : "-150%" }}
            transition={{ duration: 0.3 }}
          >
            <SiNike className="text-neutral-900 cursor-pointer" size={55} />
            <ul className="nm-wrapper-list flex absolute left-1/2 -translate-x-1/2 gap-6 font-medium text-neutral-900">
              {NAVBAR_LIST.map((item, index) => (
                <ul className="dropdown dropdown-hover" key={index}>
                  <a role="button" tabIndex={0} href="#">
                    {item.title}
                  </a>
                  {/* <ul
                  tabIndex={0}
                  className="dropdown-content flex  justify-center gap-24 -left-[577.5px] bg-neutral-900 w-screen py-5"
                >
                  {item.desc &&
                    Array.isArray(item.desc) &&
                    item.desc.length > 0 &&
                    item.desc.map((itemDesc, indexDesc) => (
                      <li
                        className="text-neutral-900 hover:text-neutral-500"
                        key={indexDesc}
                      >
                        {itemDesc.title}
                        <ul className="mt-3 flex flex-col gap-2">
                          {itemDesc.subTitle.map((itemSub, indexSub) => (
                            <li
                              className="w-[200px] text-sm text-neutral-500 hover:text-neutral-900 cursor-pointer "
                              key={indexSub}
                            >
                              {itemSub}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                </ul> */}
                </ul>
              ))}
            </ul>
            <div className="nm-wrapper-icon flex gap-5 items-center">
              <motion.div
                className={`nm-wrapper-search flex items-center rounded-full w-fit bg-neutral-200 hover:bg-neutral-300 cursor-pointer`}
                onClick={() => setSearch(true)}
                initial={{ translateX: search ? "0" : "-70px" }}
                animate={{ translateX: search ? "-70px" : "0" }}
                transition={{ duration: 0.3 }}
              >
                <div className="nm-wrapper-icon-search relative flex justify-center items-center text-neutral-900 bg-neutral-200/30 hover:bg-neutral-200 rounded-full p-[20px]">
                  <CgSearch className="absolute left-[6px]" size={23} />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="nm-input text-neutral-400 font-medium px-1 py-[6px] bg-transparent border-none outline-none w-[140px]"
                />
              </motion.div>
              <div className="flex text-neutral-900 gap-1">
                <div className="hover:bg-neutral-200 rounded-full p-2 cursor-pointer">
                  <IoHeartHalfOutline size={25} />
                </div>
                <div className="hover:bg-neutral-200 rounded-full p-2 cursor-pointer">
                  <IoBagRemoveOutline size={25} />
                </div>
                <div
                  className="hidden nm-icon-bars hover:bg-neutral-200 rounded-full p-2 cursor-pointer"
                  onClick={() => setMenu(true)}
                >
                  <HiBars3 size={25} />
                </div>
              </div>
            </div>
          </motion.div>
          {search && <Search />}
        </>
      ) : (
        <>
          <div className="nm-container flex justify-between items-center px-12 py-2 w-full z-40">
            <SiNike className="text-neutral-900 cursor-pointer" size={55} />
            <ul className="nm-wrapper-list flex absolute left-1/2 -translate-x-1/2 gap-6 font-medium text-neutral-900">
              {NAVBAR_LIST.map((item, index) => (
                <ul className="dropdown dropdown-hover" key={index}>
                  <a role="button" tabIndex={0} href="#">
                    {item.title}
                  </a>
                  {/* <ul
                  tabIndex={0}
                  className="dropdown-content flex  justify-center gap-24 -left-[577.5px] bg-neutral-900 w-screen py-5"
                >
                  {item.desc &&
                    Array.isArray(item.desc) &&
                    item.desc.length > 0 &&
                    item.desc.map((itemDesc, indexDesc) => (
                      <li
                        className="text-neutral-900 hover:text-neutral-500"
                        key={indexDesc}
                      >
                        {itemDesc.title}
                        <ul className="mt-3 flex flex-col gap-2">
                          {itemDesc.subTitle.map((itemSub, indexSub) => (
                            <li
                              className="w-[200px] text-sm text-neutral-500 hover:text-neutral-900 cursor-pointer "
                              key={indexSub}
                            >
                              {itemSub}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                </ul> */}
                </ul>
              ))}
            </ul>
            <div className="nm-wrapper-icon flex gap-5 items-center">
              <motion.div
                className={`nm-wrapper-search flex items-center rounded-full w-fit bg-neutral-200 hover:bg-neutral-300 cursor-pointer`}
                onClick={() => setSearch(true)}
                initial={{ translateX: search ? "0" : "-70px" }}
                animate={{ translateX: search ? "-70px" : "0" }}
                transition={{ duration: 0.3 }}
              >
                <div className="nm-wrapper-icon-search relative flex justify-center items-center text-neutral-900 bg-neutral-200/30 hover:bg-neutral-200 rounded-full p-[20px]">
                  <CgSearch className="absolute left-[6px]" size={23} />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="nm-input text-neutral-400 font-medium px-1 py-[6px] bg-transparent border-none outline-none w-[140px]"
                />
              </motion.div>
              <div className="flex text-neutral-900 gap-1">
                <div className="hover:bg-neutral-200 rounded-full p-2 cursor-pointer">
                  <IoHeartHalfOutline size={25} />
                </div>
                <div className="hover:bg-neutral-200 rounded-full p-2 cursor-pointer">
                  <IoBagRemoveOutline size={25} />
                </div>
                <div
                  className="hidden nm-icon-bars hover:bg-neutral-200 rounded-full p-2 cursor-pointer"
                  onClick={() => setMenu(true)}
                >
                  <HiBars3 size={25} />
                </div>
              </div>
            </div>
          </div>
          {search && <Search />}
        </>
      )}
    </>
  );
};

export default Middle;
