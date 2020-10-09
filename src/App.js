import React,{ createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/LogIn/PrivateRoute';
import Register from './Components/Register/Register';
import Admin from './Components/Admin/Admin';
import AddEvent from './Components/Admin/AddEvent';
import UserEvent from './Components/UserEvent/UserEvent';

export const UserContext = createContext();
function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <div>  
      <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
        <Router>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/login">
                    <LogIn/>
                </Route>
                <Route path="/admin">
                    <Admin />
                </Route>
                <Route path="/addEvent">
                    <AddEvent />
                </Route>
                <PrivateRoute path="/register/:name">
                    <Register />
                </PrivateRoute>
                <PrivateRoute path="/userEvent/:email">
                    <UserEvent />
                </PrivateRoute>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
