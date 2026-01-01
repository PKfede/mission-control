import { ModalObject } from "@/types/types";
import React from "react";

const Modal: React.FC<ModalObject> = ({onClose, children }) => {
  return (
    <div
      className='flex flex-col justify-center items-center'
    >
      {children}
      <button className="bg-cyan-600 rounded-xl min-w-52 p-3 mt-3.5 my-3.5" onClick={() => onClose()}>Close Details</button>
    </div>
  );
};

export default Modal;
