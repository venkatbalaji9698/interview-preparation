import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

class HOCBaseComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          BaseComponent With enhancedProp: {this.props.enhancedProp} and also
          with header element
        </div>
      </div>
    );
  }
}

export default HigherOrderComponent(HOCBaseComponent);
