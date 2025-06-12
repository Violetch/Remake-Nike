import { MdKeyboardArrowDown } from "react-icons/md";

const Copyright = () => {
  return (
    <div className="fo-wrapper-copyright flex text-neutral-500 gap-5">
      <h2>© 2024 Nike, Inc. All rights reserved</h2>
      <ul className="flex gap-5">
        <li className="flex items-center">
          <a href="">Guides</a>
          <MdKeyboardArrowDown size={23} />
        </li>
        <li className="hover:text-neutral-900 hover:font-medium">
          <a href="">Terms of Sale </a>
        </li>
        <li className="hover:text-neutral-900 hover:font-medium">
          <a href="">Terms of Use</a>
        </li>
        <li className="hover:text-neutral-900 hover:font-medium">
          <a href="">Nike Privacy Policy</a>
        </li>
      </ul>
    </div>
  );
};

export default Copyright;
