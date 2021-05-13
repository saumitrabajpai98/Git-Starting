import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
const crntDate=new Date().toLocaleDateString();
const crntTime=new Date().toLocaleTimeString();
let img1="https://picsum.photos/200/300";
let img2="https://picsum.photos/250/300";
let img3="https://picsum.photos/300/300";

ReactDOM.render(
<>
<h1 contentEditable="true" class='heading'>Hola! Konnichiva!! </h1>
<div className="imagss">
<img src={img1} alt="Some Random Imagez" />
<img src={img2} alt="Some Random Images" />
<img src={img3} alt="Some Random Imagess" />
</div>
<div className="datetym">
<p>{`Today's Date is: ${crntDate}`}</p>
<p>{`Cuurent time is: ${crntTime}`}</p>
</div>
</>,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();