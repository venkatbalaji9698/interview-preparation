import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import store from "./store";

const ReduxSaga = () => {
  return (
    <Provider store={store}>
      <div>
        ReduxSaga
        <HomePage />
      </div>
    </Provider>
  );
};

export default ReduxSaga;
