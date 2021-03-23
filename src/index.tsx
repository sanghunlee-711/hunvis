import React from "react";
import ReactDOM from "react-dom";
import RootRouter from "./routes";

const RenderComponent: React.FC = (): JSX.Element => {
  return (
    <>
      <RootRouter />
    </>
  );
};

ReactDOM.render(<RenderComponent />, document.getElementById("root"));
