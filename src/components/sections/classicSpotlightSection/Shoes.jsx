import { SHOES_IMAGE } from "../../../constant/Shoes";

const Shoes = () => {
  return (
    <>
      {SHOES_IMAGE.map((item, index) => (
        <div
          className="relative flex flex-col w-[500px] h-[500px] bg-red-600 text-neutral-900 overflow-hidden mx-2 cursor-pointer"
          key={index}
        >
          <img className="absolute -top-16" src={item.img} alt={item.title} />
          <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-tighter text-4xl font-black">
            {item.title}
          </h1>
        </div>
      ))}
    </>
  );
};

export default Shoes;
