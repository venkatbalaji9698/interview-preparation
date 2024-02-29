import * as app from "..";
import * as math from "../math";

describe("mock the function using jest.spyOn()", () => {
  test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");

    // calls the original implementation
    expect(app.doAdd(1, 2)).toEqual(3);

    // and the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2);
  });

  test("calls math.add - override the implementation", () => {
    const addMock = jest.spyOn(math, "add");

    // override the implementation
    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");

    // restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
  });
});
