exports.login = (email, password) => {
  if (email === "test@gmail.com" && password === "12345678") {
    return { success: true };
  }
  return { success: false };
};
