import FoBigScreen from "./FoBigScreen";
import FoSmallScreen from "./foSmallScreen";
import { useMediaQuery } from "react-responsive";
import Copyright from "./Copyright";

const Footer = () => {
  const isScreen = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <div className="flex justify-center h-fit py-24">
      <div className="fo-wrapper-content flex flex-col justify-between items-start w-[96%] gap-16">
        {isScreen ? <FoSmallScreen /> : <FoBigScreen />}
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
