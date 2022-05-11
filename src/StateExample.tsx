import React from "react";

interface IState{
    date:Date
}

export default class StateExample extends React.Component<any,IState> {
    timerID:any
    constructor(props: any) {
      super(props);
      this.state = {date: new Date()};
    }
    componentDidMount() {
        console.log('componentDidMount: After First Render');
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
      }
    tick() {
        console.log('Tick called.');
        this.setState({
          date: new Date()
        });
        console.log('Render will be called.');
      }
    render() {
        console.log('Render');
      return (
        <div>
          <h2>Currrent Time is {this.state.date.toLocaleTimeString('en')}</h2>
        </div>
      );
    }
  }