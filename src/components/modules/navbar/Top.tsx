import { SiJordan } from "react-icons/si";

const Top = () => {
  return (
    <div className="nt-container flex justify-between items-center bg-neutral-200/60 px-12 py-3 text-neutral-900">
      <div>
        <SiJordan size={19} />
      </div>
      <ul className="flex items-center gap-3 text-sm">
        <li>
          <a className="hover:text-neutral-500" href="#">
            Find a Store
          </a>
        </li>
        <div className="h-[15px] w-[1px] bg-neutral-900"></div>
        <li>
          <a className="hover:text-neutral-500" href="#">
            Help
          </a>
        </li>
        <div className="h-[15px] w-[1px] bg-neutral-900"></div>
        <li>
          <a className="hover:text-neutral-500" href="#">
            Join Us
          </a>
        </li>
        <div className="h-[15px] w-[1px] bg-neutral-900"></div>
        <li>
          <a className="hover:text-neutral-500" href="#">
            Sign In
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Top;
