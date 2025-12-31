import { ModalObject } from "@/types/types";
import React from "react";

const Modal: React.FC<ModalObject> = ({ modal, onClose, children }) => {
  return (
    <div
      className='flex flex-col justify-center items-center'
    >
      {children}
      <button className=" bg-blue-300 rounded-3xl w-30 m-5" onClick={() => onClose()}>Close Details</button>
    </div>
  );
};

export default Modal;
