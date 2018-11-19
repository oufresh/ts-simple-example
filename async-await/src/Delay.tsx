import * as React from "react";

function delay(milliseconds: number, count: number): Promise<number> {
  return new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(count);
    }, milliseconds);
  });
}

declare interface DelayState {
  done: boolean;
  counter: number;
}

export class Delay extends React.Component<void, DelayState> {
  state: DelayState;

  constructor() {
    super();
    this.state = {
      done: false,
      counter: 0
    };
  }

  async dramaticWelcome(): Promise<void> {
    for (let i = 0; i < 5; i++) {
      // await is converting Promise<number> into number
      const count: number = await delay(2000, i);
      this.setState({ counter: count });
    }
  }

  componentDidMount() {
    this.setState({ done: true });
    this.dramaticWelcome();
  }

  render() {
    return (
      <div>
        <label>{this.state.counter}</label>
      </div>
    );
  }
}
