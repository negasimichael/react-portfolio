import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import About from './components/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
            <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
