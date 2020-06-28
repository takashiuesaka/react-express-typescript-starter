import React from "react";
import ReactDOM from "react-dom";

fetch("/api/").then((response) => {
  console.log(response.json());
});

const Index = (): React.FC => {
  return <div>Hello React - TypeScript!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
