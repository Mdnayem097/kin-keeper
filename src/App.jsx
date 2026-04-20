import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [callData, setCallData] = useState([]);
  
  return (
    <>
      <Navbar></Navbar>
      <Outlet context={[callData, setCallData]}></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
