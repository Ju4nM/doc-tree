import { createContext } from "react"
import { ModalContextInterface } from "../Interfaces/ModalContext.interface";

export const ModalContext = createContext<ModalContextInterface>({
  showModal: () => {},
  closeModal: () => {}
});
