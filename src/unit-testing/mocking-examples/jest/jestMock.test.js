import * as app from "../index.js";
import * as math from "../math.js";

// Set all module functions to jest.fn
jest.mock("../math");

// mocks only add function. other function are not accessible from it(Means math module has add function only).
// jest.mock("../math", () => ({
//     add: jest.fn()
// }));

// mocks only add funciton. Still other functions have their implementations available
// jest.mock("../math", () => ({
//   ...jest.requireActual('../math'),
//   add: jest.fn()
// }));

describe("mock the module using jest.mock()", () => {
  test("calls math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  test("calls math.subtract", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
});
