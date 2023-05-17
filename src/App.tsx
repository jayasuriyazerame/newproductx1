import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from './component/auth/login';
import Registration from './component/auth/registration';
import Forgetpassword from './component/auth/forget-password';
import Profile from './component/pages/profile';
import Dashboard from './component/pages/dashboard';
import Sidebar from './component/pages/sidebar';
import Supplies from './component/pages/supplies';
import Tracking from './component/pages/tracking';
import Products from './component/pages/products';
import Shipping from './component/pages/shipping';
import Newpassword from './component/auth/new-password';
import Apiform from './component/pages/apikey/apiform';
import Apiintegration from './component/pages/apikey/api-integration';
import { Module } from 'module';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/registration" Component={Registration} />
          <Route path="/forget-password" Component={Forgetpassword} />
          <Route path="/profile" Component={Profile} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/supplies" Component={Supplies} />
          <Route path="/tracking" Component={Tracking} />
          <Route path="/products" Component={Products} />
          <Route path="/shipping" Component={Shipping} />
          <Route path="/new-password" Component={Newpassword} />
          <Route path="/api-page" Component={Apiform} />
          <Route path="/api-integration" Component={Apiintegration} />
        </Routes>
      </div>
    );
  }
}

export default App;
