import capitalize from "../code/capitalize";

test("Returns a string with first char capitalized", () => {
  expect(capitalize("jaydon")).toBe("Jaydon");
});

test("Returns empty string if sent empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Uppercase at beginning", () => {
  expect(capitalize("Jaydon")).toBe("Jaydon");
});

test("Multi case word", () => {
  expect(capitalize("jAyDoN")).toBe("Jaydon");
});
