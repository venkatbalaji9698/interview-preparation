import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const UserList = () => {
  const { userList } = useContext(UserContext);

  return (
    <ul>
      {userList.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};

export default UserList;
