import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Nav from "../pages/Nav/Nav";
import About from "../pages/About/About";
import Post from "../pages/Post/Post";
import Login from "../pages/Login/Login";
import Footer from "../pages/Footer/Footer";

const RootRouter: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/post" exact component={Post} />
        <Route path="/login" exact component={Login} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default RootRouter;
