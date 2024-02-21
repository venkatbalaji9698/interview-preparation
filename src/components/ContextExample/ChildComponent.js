import GrantChildComponent from "./GrantChildComponent";

function ChildComponent() {
  return (
    <div
      style={{
        background: "grey",
        height: "50vh",
        width: "50vw",
        margin: "auto",
        marginTop: 50,
      }}
    >
      <div>ChildComponent</div>
      <GrantChildComponent />
    </div>
  );
}

export default ChildComponent;
