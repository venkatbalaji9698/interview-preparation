import { useEffect } from "react";
import { connect } from "react-redux";
import UserList from "../UserList";
import { fetchUserList } from "../../actions/userAction";

const HomePage = (props) => {
  const { getUserList } = props;

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return (
    <div>
      <div>HomePage</div>
      <UserList />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: () => dispatch(fetchUserList()),
  };
};

export default connect(undefined, mapDispatchToProps)(HomePage);
