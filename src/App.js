import React from "react";
import SideBar from "./components/SideBar";
import CatsView from "./components/CatsView";
import Header from "./components/Header";
import About from "./components/About";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
      <>
          <SideBar/>
          <Header />
          <div className="container">
          <Switch>
              <Route path='/' exact>
                  <CatsView />
              </Route>
              <Route path='/about'>
                  <About />
              </Route>
          </Switch>
      </div>
      </>
  );
}

export default App;
