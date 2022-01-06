import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import img from "./img.jpg";
import {Link} from 'react-router-dom'
const Home=()=>{
    return (
        <div className="card">
        <div>
          <img src={img} alt="ui-img" />
        </div>
        <div className="button">
          <h1>10X Team 04</h1>
          <Link to="./instaclone" style={{textDecoration:"none"}}><Button 
            style={{
              backgroundColor: "White",
              color: "green",
              fontSize: "20px",
              marginTop: "20px",
            }}
            variant="contained"
          >
            <strong>Enter</strong>
          </Button></Link>
        </div>
      </div>
    )
}
export default Home;
