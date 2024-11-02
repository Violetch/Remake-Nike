import React from "react";

const LandingLayout = ({ children }) => {
  return (
    <div className="flex flex-col relative min-h-screen bg-white overflow-hidden">
      {children}
    </div>
  );
};

export default LandingLayout;
