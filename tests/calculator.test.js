import { add, subtract, divide, multiply } from "../code/calculator";
test("Addition of 2 numbers", () => {
  expect(add(1, 1)).toEqual(2);
});

test("Subtraction of 2 numbers", () => {
  expect(subtract(3, 1)).toEqual(2);
});

test("division  of 2 numbers", () => {
  expect(divide(4, 2)).toEqual(2);
});

test("multiplication  of 2 numbers", () => {
  expect(multiply(4, 2)).toEqual(8);
});
