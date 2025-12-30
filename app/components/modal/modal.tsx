import { ModalObject } from "@/types/types";
import React from "react";

const Modal: React.FC<ModalObject> = ({ modal, onClose, children }) => {
  return (
    <div
      className={`fixed flex flex-col inset-0 h-fit justify-center items-center bg-amber-800 font-bold w-1/2 h-1/2 ${
        modal ? "visible " : "invisible"
      }`}
    >
      {children}
      <button onClick={() => onClose()}>Close Details</button>
    </div>
  );
};

export default Modal;
