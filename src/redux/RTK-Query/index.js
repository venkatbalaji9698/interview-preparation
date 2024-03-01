import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import { store } from "./store";

const RTKQuery = () => {
  return (
    <Provider store={store}>
      <div>
        RTK Query 
        <HomePage />
      </div>
    </Provider>
  );
};

export default RTKQuery;
