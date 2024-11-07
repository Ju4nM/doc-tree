import { DocumentsData } from "../data/documents.data";
import { DocumentInterface } from "../Interfaces/Document.interface";
import DocCard from "./DocCard.component";

export default function DocumentGrid() {
  
  return (
    <div className="place-items-center justify-center items-start grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-10">
      { DocumentsData.map((document: DocumentInterface, index: number) => <DocCard key = { index } docData = { document } />) }
    </div>
  )
}