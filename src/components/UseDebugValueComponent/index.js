import { useOnlineStatus } from "./useOnlineStatus.js";

function UseDebugValueComponent() {
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

export default UseDebugValueComponent;
