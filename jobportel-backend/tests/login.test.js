const { Builder, By } = require("selenium-webdriver");

test("React Login Page Test", async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:5173/login");

    await driver.findElement(By.id("email")).sendKeys("test@gmail.com");
    await driver.findElement(By.id("password")).sendKeys("123456");
    await driver.findElement(By.id("login-btn")).click();

    let url = await driver.getCurrentUrl();
     console.log("Current URL:", url);

  } finally {
    await driver.quit();
  }
}, 20000); // timeout
