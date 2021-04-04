import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../Assets/Images/Ne.jpg'
import './style.css'

const About = () => {
    return (
        <div className="container-body">
        <main className="about card mb-4 row no-gutters">
          <div id="div-1" className="row card-body">
            <div className="imp">
              <div id="myImage" className="box-s col-md-4 aaa">
                <img
                   src={Img}width="300px" alt="Negasi"className="card-img" alt="About Me"/>
              </div>


              <div className="persona col-md-8 card-body">
                <h5 className="card-title">About Me</h5>
                <p className="content card-text">
                   Hi my name is Negasi Michael.I am a Full  Stack Web Developer student at Northwestern Unversity with a passion for architectural design and polishing client application, and database manipulation and routing with node/express server. Adept at working independently as well as collaborating with teams across multiple functions.
                </p>
              </div>
            </div>

            <div className="persona col-md-12">
              <p className="content">
                Technical Skills
                Front End: HTML/CSS,Bootstrap, JavaScript, jQuery, APIs fetch, and Ajax calls, 
                Version Control: git, gitlab, github.
                Backend: MySQL, MongoDB, Express, Node, Handlebars, Sequelize.
    
               I worked Federal-Mogul Corporation in Chicago,IL as a  machine operator for three years.I had worked with different types of machines and collaborated  with team work jobs where I provided  fair, friendly and courteous service with a strong work ethic.
               Recognized by the manager as the most active employee to work and always on time. 
               
               Professional Driver;I worked as a professional chauffeur driver providing customers safe and pleasant services.Nowdays I am working with Uber as Driver and food delivery .I received a lot of great compliments from riders thanking me for the experience of a safe, on-time ride with friendly conversations.
                <Link to="/contact">here</Link>.
              </p>
              <div className="about-btn-wrap d-flex justify-content-center myLin">
                <a href="https://github.com/negasimichael" target="_blank" className="btn btn-dark"><i className="btn-dark">Github</i></a>
                <a href="./Assets/Images/Resume.pdf"
                  target="_blank" className="btn btn-secondary"> Resume</a>
                <a href="https://www.linkedin.com/in/negasi-michael-39397519a/" target="_blank"
                  className="btn btn-dark">Linkedin</a>
              </div>
            </div>
          </div>
      </main>
      </div>    


    )
}
export default About