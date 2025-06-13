const TheLatestSectoin = () => {
  return (
    <div className="flex justify-center mt-28">
      <div className="he-wrapper-content flex flex-col w-[96%]">
        <h1 className="text-3xl text-neutral-900">The Latest</h1>
        <div className="flex flex-col items-center mt-5">
          <img src="./img-23.jpg" />
          <div className="he-wrapper-text flex flex-col items-center gap-2  text-neutral-900  mt-9  font-medium">
            <h3>Air Jordan 4 RM</h3>
            <h1 className="text-7xl font-black">RIDE EASY</h1>
            <p className="font-normal  text-center">
              With this new spin on the AJ4 icon, tomorrow will be even after.
            </p>
          </div>
          <button className="mt-5 px-4 py-1 bg-neutral-900 hover:bg-neutral-500 rounded-full text-white">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheLatestSectoin;
