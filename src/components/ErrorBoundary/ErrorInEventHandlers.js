function ErrorInEventHandlers() {
  const handleClick = () => {
    console.log(a);
    let a= 5;
    // the above error will not be caught in ErrorBoundary.
    // Because ErrorBoundary does not catch errors in event handlers
  };

  return (
    <div>
      <div>ErrorInEventHandlers</div>
      <button onClick={handleClick}>Clikme</button>
    </div>
  );
}

export default ErrorInEventHandlers;
