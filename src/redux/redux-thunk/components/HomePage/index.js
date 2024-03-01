import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserList from "../UserList";
import { fetchUserList } from "../../actions/userAction";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  return (
    <div>
      <div>HomePage</div>
      <UserList />
    </div>
  );
};

export default HomePage;
