import { IMG_LIST } from "../../../constant/Mb.js";

const Img = () => {
  return (
    <>
      {IMG_LIST.map((item, index) => (
        <div
          className="relative flex flex-col justify-end items-start p-12 h-[700px] w-[600px] gap-4 overflow-hidden cursor-pointer"
          key={index}
        >
          <img
            className="absolute inset-0 object-cover h-full w-full"
            src={item.img}
            alt=""
          />
          <h2 className="text-white z-10">{item.subTitle}</h2>
          <h1 className="text-white text-3xl z-10">{item.title}</h1>
          <button className="text-neutral-900 font-medium bg-white hover:bg-neutral-200 rounded-full px-4 py-[8px] z-10">
            {item.buttonTitle}
          </button>
        </div>
      ))}
    </>
  );
};

export default Img;
