import { connect } from "react-redux";

const UserList = (props) => {
  const { isLoading, data, isError } = props.userReducer;

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

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps)(UserList);
