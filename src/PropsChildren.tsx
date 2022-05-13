import React from "react";

export default class PropsChildren extends React.Component<any> {
  render() {
    const { name, children } = this.props;
    return (
      <>
        <h1>Welcome {name}</h1>
        {children}
      </>
    );
  }
}
