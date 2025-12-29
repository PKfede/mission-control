import { ModalObject } from '@/types/types'
import React from 'react'

const Modal: React.FC<ModalObject> = ({modal, onClose, children}) => {
  return (
    <div className={`fixed flex flex-col justify-center items-center bg-amber-800 font-bold w-1/2 h-1/2 ${modal ? 'visible ' : "invisible"}`}>
        {children}
        <button>Close Details</button>
    </div>
  )
}

export default Modal