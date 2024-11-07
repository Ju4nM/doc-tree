import "./App.css";
import DocumentGrid from "./components/DocumentGrid.component";
import Header from "./components/Header.component";
import ModalProvider from "./providers/Modal.provider";

function App() {
	return (
    <ModalProvider>
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="p-10 overflow-y-auto h-screen">
        <div className="w-3/4 mx-auto">
          <Header />
          <DocumentGrid />
        </div>
      </div>
    </ModalProvider>
	);
}

export default App;
