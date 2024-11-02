import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import "../../../index.css";
import Menu from "./Menu";
import { useAtom } from "jotai";
import { menuAtom } from "../../../jotai";

const Navbar = () => {
  const [menu] = useAtom(menuAtom);

  return (
    <nav>
      <Top />
      <Middle />
      <Bottom />
      {menu && <Menu />}
    </nav>
  );
};

export default Navbar;
