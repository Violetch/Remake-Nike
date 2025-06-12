import { NAV_LIST } from "../../../constant/mb";

const NavList = () => {
  return (
    <div className="flex justify-center gap-32">
      {NAV_LIST.map((item, index) => (
        <ul key={index}>
          <li className="text-neutral-900 text-2xl">{item.title}</li>
          <div className="flex flex-col gap-4 mt-7">
            {item.subTitle &&
              item.subTitle.length > 0 &&
              item.subTitle.map((subTitle, subIndex) => (
                <li
                  className="text-neutral-500 hover:text-neutral-900 duration-200 text-lg "
                  key={subIndex}
                >
                  <a href="#">{subTitle.title}</a>
                </li>
              ))}
          </div>
        </ul>
      ))}
    </div>
  );
};

export default NavList;
