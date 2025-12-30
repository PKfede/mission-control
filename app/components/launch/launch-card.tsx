"use client";

import { LaunchType, ModalObject } from "@/types/types";
import Image from "next/image";
import React, { ReactElement, Suspense, useRef, useState } from "react";
import Modal from "../modal/modal";

const LaunchCard: React.FC<LaunchType> = ({
  id,
  rocket,
  launchpad,
  date_utc,
  success,
  links,
  details,
}) => {
  const link: string = links.patch.small;
  const embed: string = "https://www.youtube.com/embed?" + links.youtube_id;
  // const modal = useRef<ModalObject>(null)

  // function handleModal() {
  //   console.log("hey")
  //   if(modal.current)
  //   modal.current.open()
  // }

  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="bg-green-950 flex flex-col justify-between items-center px-3.5 py-3.5 border-2 rounded-3xl min-w-fit">
      <Modal modal={modal} onClose={() => setModal(false)}>
        <Image
          src={link}
          alt="crew patch"
          className="m-3.5"
          height={150}
          width={150}
        >
          {}
        </Image>
        <p className="w-1/2 m-3.5">{details}</p>
        <p className="w-1/2 m-3.5">{links.webcast}</p>
        <Suspense fallback={<p>Loading...</p>}>
          <iframe width={300} height={150} loading="lazy" src={embed}></iframe>
        </Suspense>
      </Modal>
      <div className="">
        {link ? (
          <Image
            src={link}
            alt="mission badge"
            className=""
            height={150}
            width={150}
          ></Image>
        ) : null}
      </div>
      <p>{id}</p>
      <p>Rocket Id: {rocket}</p>
      <p>LaunchPad Id: {launchpad}</p>
      <p>Date: {date_utc}</p>
      <p>Mission Success: {success}</p>
      <button
        onClick={() => setModal(true)}
        className="bg-purple-400 p-3 mt-3.5 my-3.5"
      >
        Details
      </button>
    </div>
  );
};

export default LaunchCard;
