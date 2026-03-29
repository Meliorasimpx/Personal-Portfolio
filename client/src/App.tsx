import "./styles/index.css";
import Router from "./routes";
import { useRoutes } from "react-router-dom";
function App() {
  const router = useRoutes(Router);
  return <>{router}</>;
}

export default App;
