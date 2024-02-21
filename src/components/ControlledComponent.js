import { useState } from "react";

function ControlledComponent() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    console.log(value);
  };

  return (
    <div>
      <div>ControlledComponent</div>
      <input value={value} onKeyUp={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ControlledComponent;
