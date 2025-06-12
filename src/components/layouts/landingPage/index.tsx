import { ReactNode } from "react";

interface LandingLayoutProps {
  children: ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div className="flex flex-col relative min-h-screen bg-white overflow-hidden">
      {children}
    </div>
  );
};

export default LandingLayout;
