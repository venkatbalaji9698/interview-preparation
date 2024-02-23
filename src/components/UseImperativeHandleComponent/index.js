import { useRef } from "react";
import MyInput from "./MyInput";

function UseImperativeHandleComponent() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}

export default UseImperativeHandleComponent;
