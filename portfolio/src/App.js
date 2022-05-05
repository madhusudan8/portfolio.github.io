import logo from "./logo.svg";
import "./App.css";
import Sidenav from "./components/Sidenav";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {

  

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <div style={{ width: "20%" }}>
                <Sidenav />
              </div>
              <div style={{ width: "100%" }}>
                <Home />
              </div>
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/about">
            <div className="App">
              <div style={{ width: "20%" }}>
                <Sidenav />
              </div>
              <div style={{ width: "100%" }}>
                <About />
              </div>
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/portfolio">
            <div className="App">
              <div style={{ width: "20%" }}>
                <Sidenav />
              </div>
              <div style={{ width: "100%" }}>
                <Portfolio />
              </div>
            </div>
          </Route>
        </Switch>


        <Switch>
          <Route exact path="/resume">
            <div className="App">
              <div style={{ width: "20%" }}>
                <Sidenav />
              </div>
              <div style={{ width: "100%" }}>
                <Resume />
              </div>
            </div>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/contact">
            <div className="App">
              <div style={{ width: "20%" }}>
                <Sidenav />
              </div>
              <div style={{ width: "100%" }}>
                <Contact />
              </div>
            </div>
          </Route>
        </Switch>


      </Router>
    </>
  );
}

export default App;
