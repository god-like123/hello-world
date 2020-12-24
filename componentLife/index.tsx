import React, { Component } from 'react';
import './style.scss';
import ReactDOM from 'react-dom';

interface timerState {
  date: any;
}
export default class Clock extends Component<{}, timerState> {
  // 1.timerID: ReturnType<typeof setInterval> = null;  
  // 2.
  static timerID;

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount(): void {
    // console.log('挂载成功');
    // 2.
    Clock.timerID = setInterval(() => this.tick(), 1000);
    // 1.
    // this.timerID = setInterval(() => this.tick(), 1000);
    // console.log('挂载成功');
  }

  componentWillUnmount(): void {
    clearInterval(Clock.timerID);
    console.log('销毁');
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div className="time-top-hello">
        <h1>Hello,world!</h1>
        <h2>It is {date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
ReactDOM.render(<Clock />, document.getElementById('root'));
// console.log(document.getElementById('root'));
