import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import AddCustomer from './components/customerComponents/AddCustomer';
import Dashboard from './components/Dashboard'
import DetailViewCustomer from './components/customerComponents/DetailViewCustomer';
import Login from './components/Login'
import { NavBar } from "./components/AppBar"
import React from 'react';
import UpdateCustomer from './components/customerComponents/UpdateCustomer';
import ViewCustomers from './components/customerComponents/ViewCustomers';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/viewCustomers">
            <ViewCustomers />
          </Route>
          <Route path="/addCustomer">
            <AddCustomer />
          </Route>
          <Route path="/updateCustomer/:id" component={UpdateCustomer} />
          <Route path="/detailViewCustomer/:id" component={DetailViewCustomer} />
        </Switch>
      </div >
    </Router >
  );
}

export default App;
