"use client";

import { LaunchType, ModalObject } from "@/types/types";
import Image from "next/image";
import React, { ReactElement, Suspense, useRef, useState } from "react";
import Modal from "../modal/modal";
import LoadingElement from "@/app/loading";

const LaunchCard: React.FC<LaunchType> = ({
  id,
  rocket,
  name,
  flight_number,
  launchpad,
  date_utc,
  success,
  links,
  details,
}) => {
  const link: string = links.patch.small;
  const embed: string = "https://www.youtube.com/embed/" + links.youtube_id;
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      {modal ? (
        <div className="fixed inset-0 flex z-10 items-center justify-center text-white">
          <div className="min-w-screen max-w-68 h-screen bg-black/50 backdrop-blur-sm font-bold rounded-2xl px-14">
            <Modal modal={modal} onClose={() => setModal(false)}>
              <Image
                src={link}
                alt="crew patch"
                className="m-10"
                height={150}
                width={150}
              ></Image>
              <div className=" ">
              <p >Mission Id: {id}</p>
              <p>Rocket Id: {rocket}</p>
              <p>LaunchPad Id: {launchpad}</p>
              <p className="mt-12 mb-12">{details ? details : "No details logged"}</p>
              </div>

              <Suspense fallback={<LoadingElement/>}>
                <div className="m-2">
                  <iframe
                    loading="lazy"
                    src={modal ? embed : undefined}
                    height={300}
                    width={600}
                  ></iframe>
                </div>
              </Suspense>
            </Modal>
          </div>
        </div>
      ) : null}

      <div className=" bg-white/30 backdrop-blur-sm shadow-2xl shadow-cyan-500/50 text-black flex flex-col justify-between items-center px-3.5 py-3.5 rounded-xl min-w-68 max-w-96 h-fill">
        <div className="flex flex-col justify-between items-center">
          {link ? (
            <Image
              src={link}
              alt="mission badge"
              height={150}
              width={150}
            ></Image>
          ) : null}
          <h1 className="font-bold text-2xl mt-5 mb-5">{name}</h1>
        </div>
        <div>
          <p>Flight Number: {flight_number}</p>

          <p>Date: {date_utc}</p>
          <p>Mission Success: {success ? "Yes" : "No"}</p>
        </div>
        <button
          onClick={() => {
            setModal(true);
          }}
          className="bg-cyan-600 rounded-xl min-w-52 p-3 mt-3.5 my-3.5"
        >
          Details
        </button>
      </div>
    </>
  );
};

export default LaunchCard;
