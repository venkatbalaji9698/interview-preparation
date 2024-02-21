import { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef("");

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <div>UncontrolledComponent</div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default UncontrolledComponent;
