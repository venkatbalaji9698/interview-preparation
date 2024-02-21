import { forwardRef } from "react";

const ForwarRefComponent = forwardRef((props, ref) => {
  return (
    <div>
      <div>ForwarRefComponent</div>
      <input ref={ref} />
    </div>
  );
});

export default ForwarRefComponent;
