const { isStrongPassword } = require("../utils/validation");

test("password should be strong", () => {
  expect(isStrongPassword("abcd1234")).toBe(true);
});

test("password should be weak", () => {
  expect(isStrongPassword("abc")).toBe(false);
});