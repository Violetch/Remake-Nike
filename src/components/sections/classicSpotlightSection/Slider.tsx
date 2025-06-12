import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Left = () => {
  return (
    <button className="cs-slider absolute left-12 z-10 bg-white p-2 rounded-full text-neutral-900 cursor-pointer">
      <MdKeyboardArrowLeft size={25} />
    </button>
  );
};

const Right = () => {
  return (
    <button className="cs-slider absolute right-12 z-10 bg-white p-2 rounded-full text-neutral-900 cursor-pointer">
      <MdKeyboardArrowRight size={25} />
    </button>
  );
};

export { Left, Right };
