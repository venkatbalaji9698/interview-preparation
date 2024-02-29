// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

describe("Input component", () => {
  test("should render the input value properly", () => {
    const initialProps = {
      value: "Test",
      handleChange: jest.fn(),
    };
    render(<Input {...initialProps} />);
    expect(screen.getByRole("textbox")).toHaveValue("Test");
  });

  test("should call the handleChange props function properly on input change", () => {
    const initialProps = {
      value: "",
      handleChange: jest.fn(),
    };
    render(<Input {...initialProps} />);

    // using fireEvent.change
    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: "Test" },
    // });
    // expect(initialProps.handleChange).toBeCalled();
    // expect(initialProps.handleChange).toBeCalledTimes(1);
    // expect(initialProps.handleChange).toBeCalledWith("Test");

    // using fireEvent.change
    userEvent.type(screen.getByRole("textbox"), "Test");
    expect(initialProps.handleChange).toBeCalled();
    // called 4 times, because it calls for all user typing in the browser => 1)T  2)Te  3)Tes  4)Test
    expect(initialProps.handleChange).toBeCalledTimes(4);
  });
});
