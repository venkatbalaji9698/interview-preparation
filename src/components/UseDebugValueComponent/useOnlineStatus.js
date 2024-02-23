import { useDebugValue } from "react";

export function useOnlineStatus() {
  const isOnline = true;
  useDebugValue(isOnline ? "Online" : "Offline");

  return isOnline;
}
