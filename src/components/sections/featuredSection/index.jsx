import React from "react";

const FeaturedSection = () => {
  return (
    <div className="flex justify-center h-fit text-neutral-900 mt-14">
      <div className="fe-wrapper-content relative flex flex-col gap-7  w-[96%]">
        <h1 className="text-3xl">Featured</h1>
        <div className="fe-wrapper-img flex gap-3">
          <div className="flex flex-col gap-8">
            <div className="cursor-pointer bg-center bg-cover">
              <img src="./img-24.avif" />
            </div>
            <h1 className="cursor-pointer text-2xl">Nike Free Metcon 6</h1>
          </div>
          <div className="flex flex-col gap-7 ">
            <div className="  cursor-pointer bg-center bg-cover">
              <img src="./img-24.avif" />
            </div>
            <h1 className="cursor-pointer text-2xl">Nike Free Metcon 6</h1>
          </div>
          <div className="flex flex-col gap-7 ">
            <div className="  cursor-pointer bg-center bg-cover">
              <img src="./img-24.avif" />
            </div>
            <h1 className="cursor-pointer text-2xl">Nike Free Metcon 6</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
