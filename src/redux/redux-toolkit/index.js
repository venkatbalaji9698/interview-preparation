import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import { store } from "./store";

const ReduxToolkit = () => {
  return (
    <Provider store={store}>
      <div>
        ReduxToolkit
        <HomePage />
      </div>
    </Provider>
  );
};

export default ReduxToolkit;
