import ErrorBoundary from "./ErrorBoundary";
import ErrorInConstructor from "./ErrorInConstructor";
import ErrorInEventHandlers from "./ErrorInEventHandlers";
import ErrorInRendering from "./ErrorInRendering";
import ErrorInUseEffect from "./ErrorInUseEffect";

// Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
function ErrorBoundaryParentComponent() {
  return (
    <ErrorBoundary>
      <ErrorInConstructor />
      {/* <ErrorInRendering /> */}
      {/* <ErrorInUseEffect /> */}
      {/* <ErrorInEventHandlers /> */}
    </ErrorBoundary>
  );
}

export default ErrorBoundaryParentComponent;
