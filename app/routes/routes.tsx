import { LaunchType } from "@/types/types";

  // export const SuccesfulLaunches = async () => {
  //   const res = await fetch("https://api.spacexdata.com/v5/launches");
  //   const launches: LaunchType[] = await res.json();
  //   const filteredLaunches = launches.filter(
  //     (launch) =>
  //       launch.success !== null && launch.success === true
  //   );
  //   return filteredLaunches ;
  // };

  //   export const FailedLaunches = async () => {
  //   const res = await fetch("https://api.spacexdata.com/v5/launches");
  //   const launches: LaunchType[] = await res.json();
  //   const filteredLaunches = launches.filter(
  //     (launch) =>
  //       launch.success !== null && launch.success === false
  //   );
  //   return filteredLaunches ;
  // };