import {  useRef } from "react";
import "./App.css";
import { useReactToPrint } from "react-to-print";
import { FunctionalComponent } from "./FunctionalComponent";



function App() {
  // const domRef = useRef<HTMLDivElement | null>(null);
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <h1>Vite + React</h1>
      <button
        onClick={() => {
          // if (!domRef.current) {
          //   return;
          // }
          // const className = domRef.current?.className;
          // const newClassName = className + " printFixed";
          // domRef.current.className = newClassName;
          // window.print();
          // domRef.current.className = className;
          handlePrint();
        }}
      >
        打印
      </button>
      <button>下载</button>
      {/* <ComponentToPrint /> */}
      {/* <FunctionalComponentWithFunctionalComponentToPrint /> */}
      <FunctionalComponent />
    </>
  );
}

export default App;
