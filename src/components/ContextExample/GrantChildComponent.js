import { useContext } from "react";
import { UserContext } from ".";

function GrantChildComponent() {
  const { count } = useContext(UserContext);

  return (
    <div
      style={{
        background: "yellow",
        width: "25vw",
        margin: "auto",
        marginTop: 50,
      }}
    >
      <div>GrantChildComponent</div>
      <div>count: {count}</div>
    </div>
  );
}

export default GrantChildComponent;
