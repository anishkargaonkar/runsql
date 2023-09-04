import "./App.css";
import { ConfigProvider, theme } from "antd";
import { Dashboard } from "./dahsboard/Dashboard";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm
        }}>
        <Dashboard />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
