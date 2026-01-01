"use client";

import LaunchGrid from "./components/launch/launch-grid";
import { LaunchType } from "@/types/types";
import Sidebar from "./components/sidebar/sidebar";
import { useEffect, useState } from "react";
import ErrorPage from "./error";

export default function Home() {
  const [data, setData] = useState<LaunchType[]>([]);
  const [filteredData, setFilteredData] = useState<LaunchType[]>([]);
  const [missionFilter, setMissionFilter] = useState<string>("all");
  const [apiRoute, setApiRoute] = useState<string>(
    "https://api.spacexdata.com/v5/launches"
  );

  const handleSetFilter = (value: string) => {
    console.log(value);
    
    if (value === "success" || "failure") {
      setMissionFilter(value);
    }else{
      setMissionFilter('')
      setFilteredData([])
      setApiRoute(value);
    }

  };
  
  useEffect(() => {
    const fetchLaunchesApi = async () => {
      try {
        const res = await fetch(apiRoute);
        const launches: LaunchType[] = await res.json();
        setData(launches);
      } catch (error: any) {
        if (error) {
          return <ErrorPage/>
        }
      }
    };
    fetchLaunchesApi();
  }, [apiRoute]);

  useEffect(() => {
    if (data.length > 0) {
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
      setFilteredData(filteredLaunches);
    }
  }, [missionFilter, data]);

  console.log(filteredData.length, data.length);
  

  return (
    <>
      <main className="flex min-h-screen w-screen flex-col items-center  justify-around py-32 px-16  ">
        <Sidebar
          handleSetFilter={handleSetFilter}
        />
        <LaunchGrid launches={filteredData.length ? filteredData : data} />
      </main>
    </>
  );
}
