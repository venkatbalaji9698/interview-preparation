import { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectExample = () => {
  const [show, setShow] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    if (popupRef.current) {
      console.log("useEffect called");
      //   popupRef.current.style.marginTop = "50px";
    }
  }, [show]);

  useLayoutEffect(() => {
    if (popupRef.current) {
      console.log("useLayoutEffect called");
      // To mutuate the dom/calculating measurements, useLayoutEffect will be useful.
      // It is also doable in useEfect, but will see flickering in the UI.
      // Synchronously executed before the browser repaints the screen.
      popupRef.current.style.marginTop = "50px";
    }
  }, [show]);

  const getName = () => {
    console.log("render");
  };

  return (
    <div>
      <div>UseLayoutEffectExample</div>
      <button onClick={() => setShow(true)}>Show</button>
      {show && (
        <div className={getName()} ref={popupRef}>
          Content displayed
        </div>
      )}
    </div>
  );
};

export default UseLayoutEffectExample;
