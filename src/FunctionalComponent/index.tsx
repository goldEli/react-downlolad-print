import * as React from "react";
import { FunctionalComponentToPrint } from "../ComponentToPrint";
import { usePDF } from "react-to-pdf";
import { usePrint } from "../hook/usePrint";

export const FunctionalComponent = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    // page: { margin: Margin.MEDIUM },
  });

  const { printBtnEle, printRef, loading } = usePrint();

  return (
    <div>
      {printBtnEle}
      <button
        onClick={() => {
          toPDF();
        }}
      >
        Download
      </button>
      {loading && <p className="indicator">onBeforeGetContent: Loading...</p>}
      <div ref={targetRef}>
        <FunctionalComponentToPrint ref={printRef} />
      </div>
    </div>
  );
};
