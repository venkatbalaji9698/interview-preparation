function ErrorInRendering() {
  const getName = () => {
    throw new Error();
    // the above error is caught in ErrorBoundary and render the UI without crashing
  };

  return <div>ErrorInRendering {getName()}</div>;
}

export default ErrorInRendering;
