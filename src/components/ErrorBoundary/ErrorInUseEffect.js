import { useEffect } from "react";

function ErrorInUseEffect() {
  useEffect(() => {
    const a = 5;
    a = 10;
    // invalid assigning to a constant varibale
    // the above error is caught in ErrorBoundary and render the UI without crashing
  }, []);

  return <div>ErrorInUseEffect</div>;
}

export default ErrorInUseEffect;
