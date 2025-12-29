
import { log } from "node:console";
import LaunchCard from "./components/launch/launch-card";
import LaunchGrid from "./components/launch/launch-grid";
import { LaunchType } from "@/types/types";


export default function Home() {


  const Launches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/past?limit=9&offset=0')
    const launches : LaunchType[] = await res.json()

    return <LaunchGrid launches = {launches}/>
  }

  return (
    <>
        <main className="flex min-h-screen w-screen flex-col items-center justify-around py-32 px-16  ">
          {Launches()}
        </main>
    </>
  );
}
