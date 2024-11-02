import Shoes from "./Shoes";
import { Left, Right } from "./Slider";

const ClassicSpotlightSection = () => {
  return (
    <div className="flex justify-center h-fit  mt-28">
      <div className="w-[96%]">
        <h1 className="text-3xl text-neutral-900">Image Carousel</h1>
        <div className="relative flex items-center">
          <Left />
          <div className="relative flex items-center mt-7 overflow-x-scroll">
            <div className="flex gap-1">
              <Shoes />
              {/* <div className="relative flex flex-col w-[500px] h-[500px] text-neutral-900 overflow-hidden mx-2 cursor-pointer">
                <img className="absolute -top-16" src="./shoe-1.png" />
                <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-tighter text-4xl font-black">
                  SHOE
                </h1>
              </div>
              <div className="relative flex flex-col w-[500px] h-[500px] text-neutral-900 overflow-hidden mx-2 cursor-pointer">
                <img className="absolute -top-16" src="./shoe-2.png" />
                <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-tighter text-4xl font-black">
                  SHOE
                </h1>
              </div>
              <div className="relative flex flex-col w-[500px] h-[500px] text-neutral-900 overflow-hidden mx-2 cursor-pointer">
                <img className="absolute -top-16" src="./shoe-3.png" />
                <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-tighter text-4xl font-black">
                  SHOE
                </h1>
              </div>
              <div className="relative flex flex-col w-[500px] h-[500px] text-neutral-900 overflow-hidden mx-2 cursor-pointer">
                <img className="absolute -top-16" src="./shoe-4.png" />
                <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-tighter text-4xl font-black">
                  SHOE
                </h1>
              </div>
              <div className="relative flex flex-col w-[500px] h-[500px] text-neutral-900 overflow-hidden mx-2 cursor-pointer">
                <img className="absolute -top-16" src="./shoe-5.png" />
                <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-tighter text-4xl font-black">
                  SHOE
                </h1>
              </div>
              <div className="relative flex flex-col w-[500px] h-[500px] text-neutral-900 overflow-hidden mx-2 cursor-pointer">
                <img className="absolute -top-16" src="./shoe-6.png" />
                <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-tighter text-4xl font-black">
                  SHOE
                </h1>
              </div>
              <div className="relative flex flex-col w-[500px] h-[500px] text-neutral-900 overflow-hidden mx-2 cursor-pointer">
                <img className="absolute -top-16" src="./shoe-7.png" />
                <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-tighter text-4xl font-black">
                  SHOE
                </h1>
              </div>
              <div className="relative flex flex-col w-[500px] h-[500px] text-neutral-900 overflow-hidden mx-2 cursor-pointer">
                <img className="absolute -top-16" src="./shoe-8.png" />
                <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-tighter text-4xl font-black">
                  SHOE
                </h1>
              </div>
              <div className="relative flex flex-col w-[500px] h-[500px] text-neutral-900 overflow-hidden mx-2 cursor-pointer">
                <img className="absolute -top-16" src="./shoe-9.png" />
                <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-tighter text-4xl font-black">
                  SHOE
                </h1>
              </div> */}
            </div>
          </div>
          <Right />
        </div>
      </div>
    </div>
  );
};

export default ClassicSpotlightSection;
