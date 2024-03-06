import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";
import { addUser } from "./UserAction";

const initialState = {
  userList: [],
};
export const UserContext = createContext(initialState);

export default function UserContextProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        userList: state.userList,
        addUser: addUser(dispatch),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
