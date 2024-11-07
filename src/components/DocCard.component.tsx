import { FaExpandAlt } from "react-icons/fa";
// import ReconocimientoImage from "../assets/images/sigecendis.jpg";
import { ReactNode, useContext } from "react";
import { ModalContext } from "../contexts/Modal.context";
import { DocumentInterface } from "../Interfaces/Document.interface";

export default function DocCard({ docData }: { docData: DocumentInterface }) {
	const { sourceImage, description, period } = docData;
	const { showModal } = useContext(ModalContext);

	const img: ReactNode = <img className = "h-full mx-auto" src = { sourceImage } />;
	const onShowHandler = () => showModal(img, docData);

	return (
		<div className="bg-[#fafafa] max-w-[500px] xl:max-w-full p-5 w-full drop-shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 rounded-md">
			<div className="p-1 rounded-sm before:w-40 max-h-60 relative cursor-pointer select-none overflow-hidden">
        <div onClick = { () => onShowHandler() } className="bg-[rgba(0,0,0,0.7)] opacity-0 hover:opacity-100 transition-all duration-300 rounded-md absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center"><FaExpandAlt color="#fff" size="50px" /></div>
				{ img }
			</div>
			<div className = "mt-2">
				<span className = "text-sm">{ period }</span>
				<p className="text-pretty mt-1">{ description }</p>
			</div>
		</div>
	);
}
