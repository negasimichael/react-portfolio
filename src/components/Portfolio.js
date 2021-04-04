import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Assets/Images/pro2.png'
import img2 from '../Assets/Images/w.png'
import img3 from '../Assets/Images/Q.png'
import img4 from '../Assets/Images/Burger-logger.png'
import img5 from '../Assets/Images/Notetaker.png'
import img6 from '../Assets/Images/team.png'

import './style.css'
const Portfolio = () => {
    return (
<div id="container porto">
    <h2>Portfilio </h2>
    <div className=" col-12 bg-light-dark xy">

      <div className="row imgDiv">
        <img src={img1} className="rounded float-left" alt="mg-thumbnail"/>
        <a href="https://github.com/glynismullankwok/musiclocations" className="btn btn-primary">Github</a>
        <a href="https://glynismullankwok.github.io/musiclocations/" className="btn btn-success">Url</a>
      </div>

      <div className="row imgDiv">
        <img src={img2} className="rounded float-left" alt="mg-thumbnail"/>
        <a href="https://github.com/negasimichael/-Weather-Dashboard" className="btn btn-primary">Github</a>
        <a href="https://negasimichael.github.io/-Weather-Dashboard/" className="btn btn-success">Url</a>
      </div>

      <div className="row imgDiv">
        <img src={img3} className="rounded float-left" alt="mg-thumbnail"/>
        <a href="https://github.com/negasimichael/Code-Quiz" className="btn btn-primary">Github</a>
        <a href="https://negasimichael.github.io/Code-Quiz/" className="btn btn-success">Url</a>
      </div>

      <div className="row imgDiv">
        <img src={img4} className="rounded float-left" alt="mg-thumbnail"/>
        <a href="https://github.com/negasimichael/burger-logger" className="btn btn-primary">Github</a>
        <a href="https://burgerapp124.herokuapp.com/index" className="btn btn-success">Url</a>
      </div>

      <div className="row imgDiv">
        <img src={img5} className="rounded float-left" alt="mg-thumbnail"/>
        <a href="https://github.com/negasimichael/note-taker" className="btn btn-primary">Github</a>
        <a href="https://notetakern.herokuapp.com/" className="btn btn-success">Url</a>
      </div>

      <div className="row imgDiv">
        <img src={img6} className="rounded float-left" alt="mg-thumbnail"/>
        <a href="https://github.com/negasimichael/template-engine---employee-summary" className="btn btn-primary">Github</a>
        <a href="https://negasimichael.github.io/template-engine---employee-summary/" className="btn btn-success">Url</a>
      </div>

    </div> 
   </div>
   
    )      
}
export default Portfolio