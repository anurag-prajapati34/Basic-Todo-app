// src/App.js
import React from "react";
import "./App.css";

import './images/yuji.jpg'
import ToDo from "./todo/ToDo";

function App() {
const imageUrl='https://staticg.sportskeeda.com/editor/2023/06/ca77b-16863370440945-1920.jpg?w=640';
  return (
    <div className="appContainer">
  <ToDo/>
    </div >
  );
}

export default App;
