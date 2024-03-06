import { useContext, useEffect } from "react";
import UserList from "../UserList";
import { UserContext } from "../../contexts/UserContext";

const HomePage = () => {
  const { addUser } = useContext(UserContext);

  useEffect(() => {
    addUser({
      id: 1,
      name: "venkat",
    });
  }, []);

  return (
    <div>
      <div>HomePage</div>
      <UserList />
    </div>
  );
};

export default HomePage;
