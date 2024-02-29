import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  test("should render the button name properly", () => {
    const initialProps = {
      buttonName: "Test",
      handleClick: jest.fn(),
    };
    render(<Button {...initialProps} />);
    expect(screen.getByText(initialProps.buttonName)).toBeInTheDocument();
  });

  test("should call the handleClick props function properly on button click", () => {
    const initialProps = {
      buttonName: "Test",
      handleClick: jest.fn(),
    };
    render(<Button {...initialProps} />);
    fireEvent.click(screen.getByTestId("button"));
    expect(initialProps.handleClick).toBeCalled();
    expect(initialProps.handleClick).toBeCalledTimes(1);
  });
});
