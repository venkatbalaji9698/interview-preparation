import { useSelector } from "react-redux";

const UserList = () => {
  const { isLoading, data, isError } = useSelector(
    (state) => state.user
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to fetch...</div>;
  }

  if (data) {
    return (
      <ul>
        {data.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    );
  }

  return null;
};

export default UserList;
