import React from 'react'
import './style.css'

const Contact = () => {
    return (
        <div id="mydiv">
        <div className="personal">
          <div id="mydivheader">
            <p>
              Contact Information
            </p>
          </div>
          <h3>Negasi Michael</h3>
          <h3>Chicago, IL</h3>
          <p>Phone: <span>(630)-278-0005</span></p>
          <p> Email: <a href="mailto:negasimichael1@gmail.com">negasimichael1@gmail.com</a></p>
        </div>
      
        <div className="myForm" id="form-contact">
          <form>
            <h2> Contact</h2>
            <div className="form-group">
              <label for="exampleInputName">Name</label>
              <input type="Name" className="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Name"/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input type="Email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Message</label>
              <input type="Message" className="form-control" id="exampleInputMassege" placeholder="Message"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
}
export default Contact