import { ReactNode } from "react";
import { DocumentInterface } from "./Document.interface";

export interface ModalContextInterface {
  showModal: (children: ReactNode, modalData: DocumentInterface) => void;
  closeModal: () => void;
}