import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Nav from "../pages/Nav/Nav";
import About from "../pages/About/About";
import Post from "../pages/Post/container/Post";
import Login from "../pages/Login/Login";
import Footer from "../pages/Footer/Footer";
import { Provider } from "react-redux";
import store from "../common/combinedStore";
const RootRouter: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post" exact component={Post} />
      </Switch>
      <Footer />
      {/* </Provider> */}
    </BrowserRouter>
  );
};

export default RootRouter;
