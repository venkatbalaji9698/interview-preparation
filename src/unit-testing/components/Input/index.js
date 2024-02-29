const Input = (props) => {
  const { value, handleChange } = props;

  const onChange = (event) => {
    handleChange(event.target.value);
  }

  return <input type="text" value={value} onChange={onChange} />;
};

export default Input;
