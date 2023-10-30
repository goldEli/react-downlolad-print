import React from "react";
import ReactToPrint from "react-to-print";

export const usePrint = () => {
  const printRef = React.useRef<HTMLDivElement | null>(null);

  const [loading, setLoading] = React.useState(false);

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called");
    setLoading(false);
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called");
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);
    // setText("Loading new text...");

    return new Promise((resolve) => {
      resolve(true);
      //   if (!onBeforeGetContentResolve.current) {
      //     reject(false);
      //     return;
      //   }
      //   onBeforeGetContentResolve.current = resolve;

      //   setTimeout(() => {
      //     setLoading(false);
      //     setText("New, Updated Text!");
      //     resolve(true);
      //   }, 2000);
    });
  }, []);

  //   React.useEffect(() => {
  //     if (
  //       text === "New, Updated Text!" &&
  //       typeof onBeforeGetContentResolve.current === "function"
  //     ) {
  //       onBeforeGetContentResolve.current();
  //     }
  //   }, [onBeforeGetContentResolve.current, text]);

  const reactToPrintContent = React.useCallback(() => {
    return printRef.current;
  }, [printRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

    // Good
    return <button>Print</button>;
  }, []);

  const printBtnEle = (
    <ReactToPrint
      content={reactToPrintContent}
      documentTitle="AwesomeFileName"
      onAfterPrint={handleAfterPrint}
      onBeforeGetContent={handleOnBeforeGetContent}
      onBeforePrint={handleBeforePrint}
      trigger={reactToPrintTrigger}
    />
  );

  return {
    printBtnEle,
    printRef,
    loading,
  };
};
