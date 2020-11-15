import React,{useState} from 'react';
import Header from "./Components/Header";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
    </div>
  );
}

export default App;
