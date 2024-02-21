import { useRef } from "react";
import ForwarRefComponent from "./ForwarRefComponent";

function RefComponent() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div>RefComponent</div>
      <button onClick={handleClick}>Focus child input</button>
      <ForwarRefComponent ref={inputRef} />
    </div>
  );
}

export default RefComponent;
