import { useId } from "react";

function PasswordField() {
  // generates a unique id everytime for the component
  const uniqueId = useId();

  return (
    <>
      <label for={uniqueId}>Password:</label>
      <input id={uniqueId} type="password" />
    </>
  );
}

export default PasswordField;
