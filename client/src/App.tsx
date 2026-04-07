import "./styles/index.css";
import Router from "./routes";
import { useRoutes } from "react-router-dom";
import PipBoyLayout from "./components/PipBoyLayout";

function App() {
  const router = useRoutes(Router);
  return <PipBoyLayout>{router}</PipBoyLayout>;
}

export default App;
