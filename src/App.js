import React from 'react';
import './App.sass';
import Landing from './components/Landing/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/">
          <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
