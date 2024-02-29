import * as app from "..";
import * as math from "../math";

math.add = jest.fn();
math.subtract = jest.fn();

describe("mock the function using jest.fn()", () => {
  test("calls math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  test("calls math.subtract", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
});
