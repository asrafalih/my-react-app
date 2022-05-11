import React from "react";

export default class JsxTsxExample extends React.Component {
  render() {
    const name: string = "John";
    return (
      <>
        <h3>
          Hello <span style={{ color: "red" }}>{name}</span> !!! Welcome to
          react world.
        </h3>
      </>
    );
  }
}
