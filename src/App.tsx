import "./App.css";
import { ConfigProvider, theme } from "antd";
import { Dashboard } from "./dahsboard/Dashboard";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm
      }}>
      <Dashboard />
    </ConfigProvider>
  );
}

export default App;
