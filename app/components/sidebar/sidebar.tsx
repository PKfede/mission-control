import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo.png";


const Sidebar = ({ handleSetFilter}: any) => {

  return (
    <aside className="fixed  top-0 left-0 w-72  min-h-full border-r-4 bg-purple-950 p-5  ">
      <Image src={Logo} alt="SpacexLogo"></Image>
      <div className="flex flex-col mt-64">    
      <button onClick={() => handleSetFilter('success')} className="flex justify-center mt-10 font-black rounded-md border-2 min-w-fit m-2.5  p-2">
        Succesful Launches
      </button>
      <button onClick={() => handleSetFilter('failure')} className="flex justify-center mt-10 font-black rounded-md border-2 min-w-fit m-2.5  p-2">
        Failed Launches
      </button>
      <button className="flex justify-center mt-10 font-black rounded-md border-2 min-w-fit m-2.5  p-2">
        Upcoming Launches
      </button>
      <button className="flex justify-center mt-10 font-black rounded-md border-2 min-w-fit m-2.5  p-2">
        Latest Launches
      </button>
      <button className="flex justify-center mt-10 font-black rounded-md border-2 min-w-fit m-2.5  p-2">
        Past Launches
      </button>
      </div>
    </aside>
  );
};

export default Sidebar;
