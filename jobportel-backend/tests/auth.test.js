const { login } = require("../controllers/auth");

test("login success", () => {
  const result = login("test@gmail.com", "12345678");
  expect(result.success).toBe(true);
});

test("login failure", () => {
  const result = login("wrong@gmail.com", "pass");
  expect(result.success).toBe(false);
});
