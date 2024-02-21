import React from "react";

function HigherOrderComponent(BaseComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <header style={{ background: "grey" }}>Header</header>
        <BaseComponent {...props} enhancedProp="someValue" />
      </div>
    );
  };
}

export default HigherOrderComponent;
