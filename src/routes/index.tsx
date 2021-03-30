import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import { NavMemo } from "../pages/Nav/Nav";
import { PostMemo } from "../pages/Post/container/Post";
import Footer from "../pages/Footer/Footer";
const RootRouter: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavMemo />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post" exact component={PostMemo} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default RootRouter;
