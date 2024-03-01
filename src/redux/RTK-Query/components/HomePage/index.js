import UserList from "../UserList";
import { useFetchUserListQuery } from "../../services/userListApi";

const HomePage = () => {
  const { isLoading, isError, data } = useFetchUserListQuery();

  return (
    <div>
      <div>HomePage</div>
      <UserList isLoading={isLoading} isError={isError} data={data} />
    </div>
  );
};

export default HomePage;
