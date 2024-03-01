import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import store from "./store";

const ReduxThunk = () => {
  return (
    <Provider store={store}>
      <div>
        ReduxThunk
        <HomePage />
      </div>
    </Provider>
  );
};

export default ReduxThunk;
