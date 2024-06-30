import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Port from "./component/Port";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Corousel from "./component/Corousel";
// import Time from "./component/Time";
// import Cards from "./component/Cards";
import Assing2 from "./component/Assing2";
import Assing3 from "./component/Assing3";
import Assing4 from "./component/Assing4";
import Assing6  from "./component/Assig6";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Corousel />} />
      {/* <Route path="/assigment1" element={<Time />} /> */}
      <Route path="/assingment2" element={<Assing2/>}/>
      <Route path="/assingment3" element={<Assing3/>}/>
      <Route path="/assingment4" element={<Assing4/>}/>
      <Route path="/assingment6" element={<Assing6/>}/>
      {/* <Route path="/assingment6" element={<Assing6/>}/> */}
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
