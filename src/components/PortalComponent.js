import { createPortal } from "react-dom";

const PortalComponent = () => {
  return (
    <div>
      <div>PortalComponent</div>
      {/* createPortal lets you render some children into a different part of the DOM. */}
      {createPortal(
        <div>Portal is placed in the document body</div>,
        document.body
      )}
    </div>
  );
};

export default PortalComponent;
