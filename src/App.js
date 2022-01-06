import React from "react";
import Home from "./Home";
import Card from './Card';
// import {click} from './Home.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/instaclone" element={<Card/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
