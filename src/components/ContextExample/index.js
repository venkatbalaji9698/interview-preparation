import { createContext, useState } from "react";
import ChildComponent from "./ChildComponent";

export const UserContext = createContext();

function ContextExample() {
  const [count, setCount] = useState(1);

  return (
    <UserContext.Provider value={{ count }}>
      <div style={{ background: "lightgray", height: "100vh" }}>
        <div>ParentComponent</div>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <ChildComponent />
      </div>
    </UserContext.Provider>
  );
}

export default ContextExample;
