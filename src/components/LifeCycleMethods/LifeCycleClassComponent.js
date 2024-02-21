import React from "react";

class LifeCycleClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { favoritecolor: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;

    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <div>LifeCycleClassComponent</div>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default LifeCycleClassComponent;

// Mounting phase
// 1)contructor
// 2)getDerivedStateFromProps
// 3)render
// 4)componentDidMount

// Updating phase
// 1)getDerivedStateFromProps
// 2)shouldComponentUpdate
// 3)render
// 4)getSnapshotBeforeUpdate
// 5)componentDidUpdate

// Unmounting phase
// 1)componentWillUnmount
