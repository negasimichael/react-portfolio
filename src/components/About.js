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
                  Cerified Full Stack Web developer

                   Dedicated and effcient full Stack web developer with ambition in application layers and databases with a passion for architectural design and polishing client application, and database manipulation and routing with node/express server. Adept at working independently as well as collaborating with teams across multiple functions.
                </p>
              </div>
            </div>

            <div className="persona col-md-12">
              <p className="content">
                Technical Skills
                Front End: HTML/CSS,Bootstrap, JavaScript, jQuery, APIs fetch, and Ajax calls, React.js,Progressive Web Apps (PWAs).
                Version Control: git, gitlab, github.
                Backend: MySQL, MongoDB, Express, Node, Handlebars, Sequelize.
    
               I worked at Federal-Mogul Corporation in Chicago,IL as a  machine operator for three years.I had worked with different types of machines and collaborated  with team work jobs where I provided  fair, friendly and courteous service with a strong work ethic.
               Recognized by the manager as the most active employee to work and always on time. 
              
               Education North Western Unversity Full Stack developer 2021 certificate.
                <Link to="/contact">here</Link>.
              </p>
              <div className="about-btn-wrap d-flex justify-content-center myLin">
                <a href="https://github.com/negasimichael" target="_blank" className="btn btn-dark"><i className="btn-dark">Github</i></a>
                <a href={process.env.PUBLIC_URL+"/Resume.pdf"}
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