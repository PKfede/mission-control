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
  const embed: string = "https://www.youtube.com/embed/" + links.youtube_id;
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      {modal ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-1/5 bg-amber-800 font-bold">
            <Modal modal={modal} onClose={() => setModal(false)}>
              <Image
                src={link}
                alt="crew patch"
                className="m-3.5"
                height={150}
                width={150}
              ></Image>
              <p className=" m-3">{details ? details : "No details logged"}</p>
              <Suspense fallback={<p>Loading...</p>}>
                <div className="m-2">
                  <iframe
                    loading="lazy"
                    src={modal ? embed : undefined}
                    className="w-full "
                  ></iframe>
                </div>
              </Suspense>
            </Modal>
          </div>
        </div>
      ) : null}

      <div className="bg-green-950 flex flex-col justify-between items-center px-3.5 py-3.5 border-2 rounded-xl min-w-68">
        <div className="">
          {link ? (
            <Image
              src={link}
              alt="mission badge"
              height={150}
              width={150}
            ></Image>
          ) : null}
        </div>
        <div>
        <p>{id}</p>
        <p>Rocket Id: {rocket}</p>
        <p>LaunchPad Id: {launchpad}</p>
        <p>Date: {date_utc}</p>
        <p>Mission Success: {success ? "Yes" : "No"}</p>
        </div>
        <button
          onClick={() => {
            setModal(true);
          }}
          className="bg-purple-400 p-3 mt-3.5 my-3.5"
        >
          Details
        </button>
      </div>
    </>
  );
};

export default LaunchCard;
