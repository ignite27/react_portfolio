import logo from "./logo.svg";
import "./App.css";
import Port from "./component/Port";
import { Route, Routes, Link } from "react-router-dom";
import Time from "./component/Time";

function App() {
  return (
    <>
      <Port />
    
      <Routes>
        <Route path="/add" element={<Time />} />
      </Routes>

      <Link to="/add">
        <button>click </button>
      </Link>
    </>
  );
}

export default App;
