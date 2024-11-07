import { ReactNode, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { ModalContext } from "../contexts/Modal.context";
import { DocumentInterface } from "../Interfaces/Document.interface";

export default function Modal ({ children, modalData, isVisible }: { children: ReactNode, modalData: DocumentInterface, isVisible: boolean }) {
  const { title, description, period } = modalData
  const { closeModal } = useContext(ModalContext);

  return (
    <div className = { `${ isVisible ? "" : "hidden" } fixed w-screen h-screen top-0 right-0 left-0 bottom-0 grid place-items-center` }>
      <div onClick = { closeModal } className = "bg-[rgba(0,0,0,0.7)] fixed top-0 right-0 left-0 bottom-0"></div>

      <div className = "w-content z-10 md:p-10 max-h-screen xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="rounded-t-md flex justify-between items-center py-2 px-3 sticky top-0 bg-[#f9f9f9]">
          <div><h2 className = "text-xl font-bold">{ title }</h2> <span className = "text-[#3d3d3d] text-sm">{ period }</span></div>
          <button type="button" onClick = { closeModal } className = "rounded-full hover:bg-[rgba(0,0,0,0.2)] p-2"><IoClose className = "text-black font-bold" size = "35px" /></button>
        </div>
        <div className = "overflow-y-auto md:p-10 bg-white" style = {{ maxHeight: "calc(100vh - 8rem)" }}>
          <p className = "text-pretty my-3 px-3">{ description }</p>
          {children}
        </div>
        <div className="rounded-b-md bg-white pb-2">
          {/* { description } */}
        </div>
      </div>
    </div>
  );
}
