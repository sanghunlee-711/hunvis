import React from "react";
import ReactDOM from "react-dom";
import RootRouter from "./routes";
import { Provider } from "react-redux";
import store from "./common/combinedStore";

const RenderComponent: React.FC = (): JSX.Element => {
  return (
    <>
      <RootRouter />
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <RenderComponent />
  </Provider>,
  document.getElementById("root")
);
