
import "./App.css";
import Port from "./component/Port";
// import Time from "./component/Time";
import Nav from "./component/Nav";
import Corousel from "./component/Corousel";
// import Cards from "./component/Cards";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    
      <div className="container">
        <Nav/>
        <div className="container">
          <Outlet/>
        </div>
        <Footer/>

      </div>
    
      /* <Routes>
        <Route path="/add" element={<Time />} />
      </Routes>

      <Link to="/add">
        <button>click </button>
      </Link> */
      
    
  );
}

export default App;
