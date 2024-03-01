import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserList from "../UserList";
import {
  setUserListFailure,
  setUserListLoading,
  setUserListSuccess,
} from "../../slices/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserList = async () => {
      dispatch(setUserListLoading());

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const resJson = await res.json();
        dispatch(setUserListSuccess(resJson));
      } catch (er) {
        console.log(er);
        dispatch(setUserListFailure());
      }
    };

    fetchUserList();
  }, [dispatch]);

  return (
    <div>
      <div>HomePage</div>
      <UserList />
    </div>
  );
};

export default HomePage;
