import React from "react";

class ErrorInConstructor extends React.Component {
  constructor() {
    // must call super() before accessing this
    // the above error is caught in ErrorBoundary and render the UI without crashing
    this.state = {
      count: 1,
    };
  }
  render() {
    return <div>ErrorInConstructor: {this.state.count}</div>;
  }
}

export default ErrorInConstructor;
