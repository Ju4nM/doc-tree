import { DocumentsData } from "../data/documents.data";
import { DocumentInterface } from "../Interfaces/Document.interface";
import DocCard from "./DocCard.component";

export default function DocumentGrid() {
  
  return (
    <div className="w-3/4 place-items-center justify-center items-start mx-auto grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-10" style = {{ gridTemplateColumns: "masonry" }}>
      { DocumentsData.map((document: DocumentInterface) => <DocCard docData = { document } />) }
    </div>
  )
}