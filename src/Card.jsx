import React, { useEffect, useState } from "react";
import "./Card.css";
let count=0;
let countm=0;
const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((request) => request.json())
      .then((response) => setData(response));
  }, []);
  
  let [colors,setColor]=useState("black");
  let [colorm,setColorm]=useState("black");
  const click=(ele)=>{

    console.log(ele.key);
    if(count%2===0){
      count+=1
      setColor("black");
    }else{
      setColor("red");
      count+=1
    }
  }
  const click2=()=>{
    if(countm%2===0){
      countm+=1
      setColorm("black");
    }else{
      setColorm("#34eb52");
      countm+=1
    }
  }
  return (
    <>
      <div className="site-container">
          {data.map((val, i) => {
            // debugger
            return (
              <div key={i}>
              
                <div className="main">
                  <div className="post">
                    <div className="post-top">
                      <h4 className="name">{val.name}</h4>
                      <p className="location">{val.location}</p>
                    </div>
                    <div>
                      <p className="three-dot">
                        <strong>...</strong>
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={val.PostImage}
                      alt="Post-img"
                      className="post-img"
                    />
                  </div>
                  <div>
                    <div className="post-bottom">
                      <div>
                        <i className="far fa-heart" style={{color:colors}} onClick={click} key={i}></i>
                        <i className="fab fa-telegram-plane" style={{color:colorm}} onClick={click2}></i>
                      </div>
                      <div>
                        <p className="date"> {val.Date}</p>
                      </div>
                    </div>
                    <div>
                      <p className="like">{val.likes} likes</p>
                      <p className="des"><strong>{val.description}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </>
  );
};
export default Card;