"use client";

import LaunchGrid from "./components/launch/launch-grid";
import { LaunchType } from "@/types/types";
import Sidebar from "./components/sidebar/sidebar";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<LaunchType[]>([]);
  const [filteredData, setFilteredData] = useState<LaunchType[]>([]);
  const [missionFilter, setMissionFilter] = useState<string>("all");

  const filtered = () => {};

  const handleSetFilter = (value: string) => {
    setMissionFilter(value);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("https://api.spacexdata.com/v5/launches");
      const launches: LaunchType[] = await res.json();
      setData(launches);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const filteredLaunches = data.filter((launch) => {
      if (launch.success !== null) {
        switch (missionFilter) {
          case "success":
            return launch.success === true;
          case "failure":
            return launch.success === false;
          default:
            return true;
        }
      }
    });
    console.log(filteredLaunches);

    setFilteredData(filteredLaunches);
  }, [missionFilter, data]);

  return (
    <>
      {/* <Sidebar setRoute={setRoute} /> */}

      <main className="flex min-h-screen w-screen flex-col items-center  justify-around py-32 px-16  ">
        <Sidebar handleSetFilter={handleSetFilter} />
        <LaunchGrid launches={filteredData} />
      </main>
    </>
  );
}
