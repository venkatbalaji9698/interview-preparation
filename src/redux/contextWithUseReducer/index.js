import HomePage from "./components/HomePage";
import UserContextProvider from "./contexts/UserContext";

const ContextWithUseReducer = () => {
  return (
    <UserContextProvider>
      <div>
        ContextWithUseReducer
        <HomePage />
      </div>
    </UserContextProvider>
  );
};

export default ContextWithUseReducer;
