import Image from "next/image";
import React from "react";
import Logo from '@/public/assets/logo.png'

const SidebarPage = () => {
  return (
    <aside className="fixed top-0 left-0 w-64 h-full bg-purple-700 p-5  ">
      <ul className="">
        <Image src={Logo} alt="SpacexLogo"></Image>
        <h1 className="bg-amber-300 min-w-fit m-2.5">succesful Launches</h1>
        <h1 className="bg-amber-300 min-w-fit m-2.5">succesful Launches</h1>
        <h1 className="bg-amber-300 min-w-fit m-2.5">succesful Launches</h1>
        <h1 className="bg-amber-300 min-w-fit m-2.5">succesful Launches</h1>
      </ul>
    </aside>
  );
};

export default SidebarPage;
