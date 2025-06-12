const HeroSection = () => {
  return (
    <div className="flex justify-center  h-fit">
      <div className="he-wrapper-content flex flex-col items-center w-[96%]">
        <img src="./img-23.jpg" />
        <div className="he-wrapper-text flex flex-col items-center gap-2  text-neutral-900  mt-9  font-medium">
          <h3>Tatum 3</h3>
          <h1 className="text-7xl font-black">ZERO PRESSURE</h1>
          <p className="font-normal  text-center">
            Greatness happens when you're focused on your flight path. This
            newest colorway 'Zero Days Off' speaks to jayson's love of the grind
            and is here to help you elevate your game.
          </p>
        </div>
        <button className="mt-5 px-4 py-1 bg-neutral-900 hover:bg-neutral-500 rounded-full text-white">
          Shop
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
