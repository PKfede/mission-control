import Image from "next/image";
import Logo from "@/public/assets/logo.png";

const Sidebar = ({ handleSetFilter }: any) => {
  return (
    <aside className="fixed top-0 left-0 z-10 sm:h-fit sm:w-screen xl:h-full xl:w-82 border-r-4 bg-black text-blue p-5  ">
      <div className="flex flex-col justify-center items-center sm:w-full sm:flex-col xl:flex-col ">
        <Image src={Logo} alt="SpacexLogo" className="h-30 w-50 sm:h-30 sm:w-50"></Image>
        <div className="flex xl:flex-col md:justify-between md:w-1/2 xl:w-full">
         <button
            onClick={() => handleSetFilter("https://api.spacexdata.com/v5/launches")}
            className="flex justify-center items-center sm:mt-2 sm:w-fit sm:h-16 xl:w-64 mt-10  rounded-md border-2 t m-2.5  p-2"
          >
            All Launches
          </button>
          <button
            onClick={() => handleSetFilter("success")}
            className="flex justify-center items-center sm:mt-2 sm:w-fit sm:h-16 xl:w-64 mt-10  rounded-md border-2 t m-2.5  p-2"
          >
            Succesful Launches
          </button>
          <button
            onClick={() => handleSetFilter("failure")}
            className="flex justify-center items-center sm:mt-2 sm:w-fit sm:h-16 xl:w-64 mt-10  rounded-md border-2 t m-2.5  p-2"
          >
            Failed Launches
          </button>
          <button
            onClick={() =>
              handleSetFilter("https://api.spacexdata.com/v5/launches/upcoming")
            }
            className="flex justify-center items-center sm:mt-2 sm:w-fit sm:h-16 xl:w-64 mt-10  rounded-md border-2 t m-2.5  p-2"
          >
            Upcoming Launches
          </button>
          <button
            onClick={() =>
              handleSetFilter("https://api.spacexdata.com/v5/launches/past")
            }
            className="flex justify-center items-center sm:mt-2 sm:w-fit sm:h-16 xl:w-64 mt-10  rounded-md border-2 t m-2.5  p-2"
          >
            Past Launches
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
