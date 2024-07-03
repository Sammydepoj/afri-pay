import React from "react";
import Logo from "../../assets/logo.png";

const LazyLoader: React.FC = () => {
  return (
    <div className="grid place-content-center h-[100svh]">
      <img src={Logo} alt="" className="w-[50%] mx-auto loader" />
      <p className="text-center font-medium text-lg mt-5">Loading...</p>
    </div>
  );
};

export default LazyLoader;
