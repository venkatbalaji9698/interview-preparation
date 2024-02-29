const Button = (props) => {
  const { buttonName, handleClick } = props;

  return <button data-testid="button" onClick={handleClick}>{buttonName}</button>;
};

export default Button;
