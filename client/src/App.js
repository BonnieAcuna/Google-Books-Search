import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Header from "./components/Header";
// import ResultsContainer from "./components/ResultsContainer";
// import SearchForm from "./componenents/SearchForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route exact path="/saved" component={Saved}/>
          </Switch>
        {/* <SearchForm /> */}
        {/* <ResultsContainer /> */}
        </div>
      </Router>
    );
  }
}

export default App;