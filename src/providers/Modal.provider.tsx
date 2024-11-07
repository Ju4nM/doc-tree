import { ReactNode, useState } from "react";
import Modal from "../components/Modal.component";
import { ModalContext } from "../contexts/Modal.context";
import { DocumentInterface } from "../Interfaces/Document.interface";

export default function ModalProvider({ children }: { children: ReactNode }) {
  
  const [ modalChildren, setModalChildren ] = useState<ReactNode>();
  const [ currentModalData, setModalData ] = useState<DocumentInterface>({
    description: "",
    period: "",
    sourceImage: "",
    title: ""
  });
  const [ modalIsVisible, setModalVisibility ] = useState<boolean>(false);
  
  const showModal = (children: ReactNode, modalData: DocumentInterface) => {
    setModalData(modalData);
    setModalChildren(children);
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalChildren(null);
    setModalVisibility(false);
  };
  
  return (
    <ModalContext.Provider value = {{ showModal, closeModal }}>
      { children }
      { <Modal modalData = { currentModalData } isVisible = { modalIsVisible } >{modalChildren}</Modal> }
    </ModalContext.Provider>
  );
}
